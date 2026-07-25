"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Course, CourseFiltersState } from "@/types";
import { courses } from "@/data/courses";
import { CourseFilters } from "@/components/courses/CourseFilters";
import { CourseGrid } from "@/components/courses/CourseGrid";

const emptyFilters: CourseFiltersState = {
  search: "",
  category: "",
  modality: "",
  level: "",
};

function filterCourses(
  allCourses: Course[],
  filters: CourseFiltersState,
): Course[] {
  const searchTerm = filters.search.trim().toLowerCase();

  return allCourses.filter((course) => {
    const matchesSearch =
      searchTerm === "" ||
      course.title.toLowerCase().includes(searchTerm) ||
      course.shortDescription.toLowerCase().includes(searchTerm) ||
      course.category.toLowerCase().includes(searchTerm);

    const matchesCategory =
      filters.category === "" || course.categoryId === filters.category;

    const matchesModality =
      filters.modality === "" || course.modality === filters.modality;

    const matchesLevel = filters.level === "" || course.level === filters.level;

    return matchesSearch && matchesCategory && matchesModality && matchesLevel;
  });
}

function getInitialFilters(searchParams: URLSearchParams): CourseFiltersState {
  const category = searchParams.get("categoria") ?? "";

  return {
    ...emptyFilters,
    category: category as CourseFiltersState["category"],
  };
}

export function CourseCatalog() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<CourseFiltersState>(() =>
    getInitialFilters(searchParams),
  );

  const filteredCourses = useMemo(
    () => filterCourses(courses, filters),
    [filters],
  );

  function handleClearFilters() {
    setFilters(emptyFilters);
  }

  return (
    <div className="space-y-8">
      <CourseFilters
        filters={filters}
        onChange={setFilters}
        onClear={handleClearFilters}
        resultsCount={filteredCourses.length}
      />
      <CourseGrid
        courses={filteredCourses}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}
