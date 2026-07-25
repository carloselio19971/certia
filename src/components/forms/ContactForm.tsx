"use client";

import { useState } from "react";
import type {
  ContactFormData,
  ContactFormField,
  FormSubmitStatus,
} from "@/types";
import { getCourseTitleOptions } from "@/data/courses";
import { isNonEmpty, isValidEmail, isValidPhone, minLength } from "@/lib/validation";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { InputField } from "@/components/ui/InputField";
import { SelectField } from "@/components/ui/SelectField";
import { TextareaField } from "@/components/ui/TextareaField";

const initialData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  courseInterest: "",
  message: "",
  privacyAccepted: false,
};

type ContactFormProps = {
  defaultCourseSlug?: string;
};

export function ContactForm({ defaultCourseSlug = "" }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    ...initialData,
    courseInterest: defaultCourseSlug,
  });
  const [errors, setErrors] = useState<Partial<Record<ContactFormField, string>>>(
    {},
  );
  const [status, setStatus] = useState<FormSubmitStatus>("idle");

  const courseOptions = [
    { value: "", label: "Selecciona un curso (opcional)" },
    ...getCourseTitleOptions(),
  ];

  function validate(): Partial<Record<ContactFormField, string>> {
    const nextErrors: Partial<Record<ContactFormField, string>> = {};

    if (!isNonEmpty(formData.fullName)) {
      nextErrors.fullName = "Ingresa tu nombre completo.";
    }

    if (!isNonEmpty(formData.email)) {
      nextErrors.email = "Ingresa tu correo electrónico.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!isNonEmpty(formData.phone)) {
      nextErrors.phone = "Ingresa tu teléfono.";
    } else if (!isValidPhone(formData.phone)) {
      nextErrors.phone = "Ingresa un número de teléfono válido.";
    }

    if (!isNonEmpty(formData.message)) {
      nextErrors.message = "Escribe tu mensaje.";
    } else if (!minLength(formData.message, 10)) {
      nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    if (!formData.privacyAccepted) {
      nextErrors.privacyAccepted =
        "Debes aceptar la política de privacidad para continuar.";
    }

    return nextErrors;
  }

  function handleChange(
    field: ContactFormField,
    value: string | boolean,
  ): void {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    /**
     * TODO: Conectar con API de contacto de CERTIA.
     * Ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
     */
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setFormData({ ...initialData, courseInterest: defaultCourseSlug });
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-xl font-semibold text-text-primary">
          Mensaje enviado correctamente
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Hemos recibido tu solicitud de forma simulada. Cuando se conecte la API
          oficial, nuestro equipo te contactará en el plazo indicado.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div
        className="sr-only"
        aria-live="polite"
        aria-atomic="true"
      >
        {status === "submitting" ? "Enviando formulario..." : ""}
        {status === "error" && Object.keys(errors).length > 0
          ? "Hay errores en el formulario. Revisa los campos marcados."
          : ""}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="contact-fullName"
          name="fullName"
          label="Nombre completo"
          required
          autoComplete="name"
          value={formData.fullName}
          onChange={(event) => handleChange("fullName", event.target.value)}
          error={errors.fullName}
        />
        <InputField
          id="contact-email"
          name="email"
          type="email"
          label="Correo electrónico"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          error={errors.email}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="contact-phone"
          name="phone"
          type="tel"
          label="Teléfono"
          required
          autoComplete="tel"
          value={formData.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          error={errors.phone}
        />
        <InputField
          id="contact-company"
          name="company"
          label="Empresa"
          autoComplete="organization"
          value={formData.company}
          onChange={(event) => handleChange("company", event.target.value)}
          error={errors.company}
        />
      </div>

      <SelectField
        id="contact-courseInterest"
        name="courseInterest"
        label="Curso de interés"
        options={courseOptions}
        value={formData.courseInterest}
        onChange={(event) =>
          handleChange("courseInterest", event.target.value)
        }
        error={errors.courseInterest}
      />

      <TextareaField
        id="contact-message"
        name="message"
        label="Mensaje"
        required
        value={formData.message}
        onChange={(event) => handleChange("message", event.target.value)}
        error={errors.message}
        placeholder="Cuéntanos qué información necesitas..."
      />

      <CheckboxField
        id="contact-privacy"
        name="privacyAccepted"
        required
        checked={formData.privacyAccepted}
        onChange={(event) =>
          handleChange("privacyAccepted", event.target.checked)
        }
        error={errors.privacyAccepted}
        label={
          <>
            Acepto la{" "}
            <span className="font-medium text-primary">
              política de privacidad
            </span>{" "}
            y el tratamiento de mis datos para recibir información de CERTIA
            Academy.
          </>
        }
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
