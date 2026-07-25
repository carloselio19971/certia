"use client";

import { RotateCcw, Search } from "lucide-react";
import type {
  CourseCategoryId,
  CourseFiltersState,
  CourseLevel,
  CourseModality,
} from "@/types";
import {
  courseCategories,
  courseLevels,
  courseModalities,
} from "@/data/courses";

type CourseFiltersProps = {
  filters: CourseFiltersState;
  onChange: (filters: CourseFiltersState) => void;
  onClear: () => void;
  resultsCount: number;
};

export function CourseFilters({
  filters,
  onChange,
  onClear,
  resultsCount,
}: CourseFiltersProps) {
  function updateFilter<K extends keyof CourseFiltersState>(
    key: K,
    value: CourseFiltersState[K],
  ) {
    onChange({ ...filters, [key]: value });
  }

  const hasActiveFilters =
    filters.search.trim() !== "" ||
    filters.category !== "" ||
    filters.modality !== "" ||
    filters.level !== "";

  return (
    <div className="rounded-2xl border border-border bg-white p-5 shadow-sm md:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="text-sm font-medium text-text-primary"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultsCount}{" "}
          {resultsCount === 1 ? "resultado encontrado" : "resultados encontrados"}
        </p>
        {hasActiveFilters ? (
          <button
            type="button"
            onClick={onClear}
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm"
          >
            <RotateCcw className="h-4 w-4" aria-hidden />
            Limpiar filtros
          </button>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="xl:col-span-2">
          <label
            htmlFor="course-search"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Buscar por nombre
          </label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary"
              aria-hidden
            />
            <input
              id="course-search"
              type="search"
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
              placeholder="Ej. JavaScript, Power BI, ciberseguridad..."
              className="w-full rounded-lg border border-border bg-white py-3 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="course-category"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Categoría
          </label>
          <select
            id="course-category"
            value={filters.category}
            onChange={(event) =>
              updateFilter("category", event.target.value as CourseCategoryId | "")
            }
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
          >
            <option value="">Todas las categorías</option>
            {courseCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="course-modality"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Modalidad
          </label>
          <select
            id="course-modality"
            value={filters.modality}
            onChange={(event) =>
              updateFilter("modality", event.target.value as CourseModality | "")
            }
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
          >
            <option value="">Todas las modalidades</option>
            {courseModalities.map((modality) => (
              <option key={modality} value={modality}>
                {modality}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2 xl:col-span-1">
          <label
            htmlFor="course-level"
            className="mb-2 block text-sm font-medium text-text-primary"
          >
            Nivel
          </label>
          <select
            id="course-level"
            value={filters.level}
            onChange={(event) =>
              updateFilter("level", event.target.value as CourseLevel | "")
            }
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1"
          >
            <option value="">Todos los niveles</option>
            {courseLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
