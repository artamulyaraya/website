"use client";

import { useState } from "react";
import styles from "./RequestQuote.module.css";
import SectionTitle from "./UI/SectionTitle";
import { countries } from "../lib/countries";

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();

  setLoading(true);

  await new Promise((resolve) =>
    setTimeout(resolve, 1200)
  );

  setLoading(false);

  setSubmitted(true);

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
            <label>Full Name *</label>

            <input
              type="text"
              maxLength={100}
              placeholder="John Smith"
              autoComplete="name"
              required
            />
          </div>

          <div className={styles.field}>
            <label>Company Name *</label>

            <input
              type="text"
              placeholder="ABC Trading Co., Ltd."
              maxLength={150}
              autoComplete="organization"
              required
            />
          </div>

          <div className={styles.field}>
            <label>Country *</label>

            <select defaultValue="" required>
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
            <label>Business Email *</label>
            <input
              type="email"
              placeholder="john@company.com"
              autoComplete="email"
              required
            />
          </div>

          <div className={styles.field}>
            <label>Phone / WhatsApp *</label>

            <input
              type="tel"
              autoComplete="tel"
              placeholder="e.g. +1 555 123 4567"
            />
          </div>

          <div className={styles.field}>
            <label>Product or Commodity *</label>

            <input
              type="text"
              placeholder="Coconut Charcoal Briquette"
              maxLength={150}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Estimated Quantity</label>

            <input
              type="text"
              placeholder="1 Container / Month"
            />
          </div>

          <div className={styles.field}>
            <label>Target Delivery Country</label>

            <select defaultValue="">
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
            <label>Your Requirements</label>

            <textarea
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

          <p className={styles.success}>

            ✓ Thank you for your inquiry.
            Our sourcing team will contact you shortly.

          </p>

        )}

      </div>
    </section>
  );
}