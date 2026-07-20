"use client";

import { useState } from "react";
import type { InquiryForm } from "../types/inquiry";
import styles from "./RequestQuote.module.css";
import SectionTitle from "./UI/SectionTitle";
import { countries } from "../lib/countries";

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<InquiryForm>({
  fullName: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  product: "",
  quantity: "",
  destination: "",
  requirements: "",
});

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (loading) return;

  setSubmitted(false);
  setLoading(true);

  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error("Failed to send inquiry");
    }

    setForm({
      fullName: "",
      company: "",
      country: "",
      email: "",
      phone: "",
      product: "",
      quantity: "",
      destination: "",
      requirements: "",
    });

    setSubmitted(true);

  } catch (error) {
    console.error(error);
    alert("Failed to send inquiry. Please try again.");

  } finally {
    setLoading(false);
  }
};

  return (
    <section id="quote" className={styles.quote}>
      <div className={styles.container}>

        <SectionTitle
          eyebrow="LET'S WORK TOGETHER"
          title="Start Your Sourcing Project"
        />

        <p className={styles.description}>
          Tell us about your sourcing requirements. Our team will review your inquiry and recommend the most suitable sourcing solution for your business.
        </p>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >

          <div className={styles.field}>
            <label htmlFor="fullName">
              Full Name *
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              value={form.fullName}
              onChange={handleChange}
              maxLength={100}
              placeholder="John Smith"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="company">
              Company Name *
            </label>

            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="ABC Trading Co., Ltd."
              maxLength={150}
              autoComplete="organization"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="country">
              Country *
            </label>

            <select
                id="country"
                name="country"
                value={form.country}
                onChange={handleChange}
                required
              >

              <option
                  value=""
                  disabled
              >
                  Select Country
              </option>

              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              Business Email *
            </label>
            <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                autoComplete="email"
                required
              />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">
              Phone / WhatsApp *
            </label>

            <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="e.g. +1 555 123 4567"
              />
          </div>

          <div className={styles.field}>
            <label htmlFor="product">
              Product or Commodity *
            </label>

            <input
                id="product"
                name="product"
                type="text"
                value={form.product}
                onChange={handleChange}
                placeholder="Coconut Charcoal Briquette"
                maxLength={150}
                required
              />
          </div>

          <div className={styles.field}>
            <label htmlFor="quantity">
              Estimated Quantity
            </label>

            <input
                id="quantity"
                name="quantity"
                type="text"
                value={form.quantity}
                onChange={handleChange}
                placeholder="1 Container / Month"
              />
          </div>

          <div className={styles.field}>
            <label htmlFor="destination">
              Target Delivery Country
            </label>

            <select
                id="destination"
                name="destination"
                value={form.destination}
                onChange={handleChange}
            >
              <option
                  value=""
                  disabled
              >
                  Select Destination Country
              </option>

              {countries.map((country) => (
                <option
                  key={country}
                  value={country}
                >
                  {country}
                </option>
              ))}

            </select>

          </div>

          <div className={styles.fieldFull}>
            <label htmlFor="requirements">
              Your Requirements
            </label>

            <textarea
                id="requirements"
                name="requirements"
                value={form.requirements}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your sourcing requirements..."
                maxLength={2000}
                required
              />

          </div>

          <div className={styles.actions}>
            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Request a Quote"}
            </button>
          </div>

        </form>

        {submitted && (

          <p
            className={styles.success}
            role="status"
            aria-live="polite"
          >

            ✓ Thank you for your inquiry.
            Our sourcing team will contact you shortly.

          </p>

        )}

      </div>
    </section>
  );
}