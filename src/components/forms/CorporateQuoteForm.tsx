"use client";

import { useState } from "react";
import type {
  CorporateQuoteFormData,
  CorporateQuoteFormField,
  FormSubmitStatus,
} from "@/types";
import {
  modalityOptions,
  trainingAreaOptions,
} from "@/data/empresas";
import { isNonEmpty, isValidEmail, isValidPhone, minLength } from "@/lib/validation";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { InputField } from "@/components/ui/InputField";
import { SelectField } from "@/components/ui/SelectField";
import { TextareaField } from "@/components/ui/TextareaField";

const initialData: CorporateQuoteFormData = {
  firstName: "",
  lastName: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  participants: "",
  trainingArea: "",
  modality: "",
  message: "",
  privacyAccepted: false,
};

export function CorporateQuoteForm() {
  const [formData, setFormData] = useState<CorporateQuoteFormData>(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<CorporateQuoteFormField, string>>
  >({});
  const [status, setStatus] = useState<FormSubmitStatus>("idle");

  function validate(): Partial<Record<CorporateQuoteFormField, string>> {
    const nextErrors: Partial<Record<CorporateQuoteFormField, string>> = {};

    if (!isNonEmpty(formData.firstName)) {
      nextErrors.firstName = "Ingresa tu nombre.";
    }
    if (!isNonEmpty(formData.lastName)) {
      nextErrors.lastName = "Ingresa tus apellidos.";
    }
    if (!isNonEmpty(formData.company)) {
      nextErrors.company = "Ingresa el nombre de la empresa.";
    }
    if (!isNonEmpty(formData.jobTitle)) {
      nextErrors.jobTitle = "Ingresa tu cargo.";
    }
    if (!isNonEmpty(formData.email)) {
      nextErrors.email = "Ingresa tu correo corporativo.";
    } else if (!isValidEmail(formData.email)) {
      nextErrors.email = "Ingresa un correo electrónico válido.";
    }
    if (!isNonEmpty(formData.phone)) {
      nextErrors.phone = "Ingresa tu teléfono.";
    } else if (!isValidPhone(formData.phone)) {
      nextErrors.phone = "Ingresa un número de teléfono válido.";
    }
    if (!isNonEmpty(formData.participants)) {
      nextErrors.participants = "Indica el número aproximado de participantes.";
    }
    if (!formData.trainingArea) {
      nextErrors.trainingArea = "Selecciona un área de capacitación.";
    }
    if (!formData.modality) {
      nextErrors.modality = "Selecciona una modalidad.";
    }
    if (!isNonEmpty(formData.message)) {
      nextErrors.message = "Describe tus necesidades de capacitación.";
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
    field: CorporateQuoteFormField,
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
     * TODO: Conectar con API de cotización corporativa de CERTIA.
     * Ejemplo: await fetch('/api/corporate-quote', { method: 'POST', body: JSON.stringify(formData) })
     */
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setFormData(initialData);
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-secondary/20 bg-secondary/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <h3 className="text-xl font-semibold text-text-primary">
          Solicitud registrada correctamente
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          Tu cotización ha sido simulada en el frontend. Cuando se conecte la
          API comercial, recibirás una propuesta personalizada.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {status === "submitting" ? "Enviando solicitud..." : ""}
        {status === "error" && Object.keys(errors).length > 0
          ? "Hay errores en el formulario. Revisa los campos marcados."
          : ""}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="quote-firstName"
          name="firstName"
          label="Nombre"
          required
          autoComplete="given-name"
          value={formData.firstName}
          onChange={(event) => handleChange("firstName", event.target.value)}
          error={errors.firstName}
        />
        <InputField
          id="quote-lastName"
          name="lastName"
          label="Apellidos"
          required
          autoComplete="family-name"
          value={formData.lastName}
          onChange={(event) => handleChange("lastName", event.target.value)}
          error={errors.lastName}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="quote-company"
          name="company"
          label="Empresa"
          required
          autoComplete="organization"
          value={formData.company}
          onChange={(event) => handleChange("company", event.target.value)}
          error={errors.company}
        />
        <InputField
          id="quote-jobTitle"
          name="jobTitle"
          label="Cargo"
          required
          autoComplete="organization-title"
          value={formData.jobTitle}
          onChange={(event) => handleChange("jobTitle", event.target.value)}
          error={errors.jobTitle}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="quote-email"
          name="email"
          type="email"
          label="Correo corporativo"
          required
          autoComplete="email"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          error={errors.email}
        />
        <InputField
          id="quote-phone"
          name="phone"
          type="tel"
          label="Teléfono"
          required
          autoComplete="tel"
          value={formData.phone}
          onChange={(event) => handleChange("phone", event.target.value)}
          error={errors.phone}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <InputField
          id="quote-participants"
          name="participants"
          label="N.º aproximado de participantes"
          required
          inputMode="numeric"
          value={formData.participants}
          onChange={(event) =>
            handleChange("participants", event.target.value)
          }
          error={errors.participants}
        />
        <SelectField
          id="quote-trainingArea"
          name="trainingArea"
          label="Área de capacitación"
          required
          options={trainingAreaOptions}
          value={formData.trainingArea}
          onChange={(event) =>
            handleChange("trainingArea", event.target.value)
          }
          error={errors.trainingArea}
        />
        <SelectField
          id="quote-modality"
          name="modality"
          label="Modalidad"
          required
          options={modalityOptions}
          value={formData.modality}
          onChange={(event) => handleChange("modality", event.target.value)}
          error={errors.modality}
        />
      </div>

      <TextareaField
        id="quote-message"
        name="message"
        label="Mensaje"
        required
        value={formData.message}
        onChange={(event) => handleChange("message", event.target.value)}
        error={errors.message}
        placeholder="Describe objetivos, perfil del equipo y plazos estimados..."
      />

      <CheckboxField
        id="quote-privacy"
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
            para el tratamiento de datos corporativos con fines comerciales.
          </>
        }
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Enviando solicitud..." : "Solicitar cotización"}
      </button>
    </form>
  );
}
