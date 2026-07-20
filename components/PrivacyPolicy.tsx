"use client";

import { useState } from "react";
import { PRIVACY_POLICIES } from "@/data/privacyPolicies";

export function PrivacyPolicy() {
  const [language, setLanguage] = useState("en");
  const policy =
    PRIVACY_POLICIES.find((candidate) => candidate.code === language) ?? PRIVACY_POLICIES[0];

  return (
    <article className="privacy-card" dir={policy.direction ?? "ltr"} lang={policy.code}>
      <a className="privacy-back" href="/">
        {policy.back}
      </a>

      <label className="privacy-language-picker">
        <span>{policy.languageLabel}</span>
        <select value={language} onChange={(event) => setLanguage(event.target.value)}>
          {PRIVACY_POLICIES.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <header>
        <p className="privacy-kicker">SINAVRO</p>
        <h1>{policy.title}</h1>
        <p>{policy.effectiveDate}</p>
      </header>

      {policy.sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </section>
      ))}

      <section>
        <h2>{policy.contactLabel}</h2>
        <p>
          <a href="mailto:kodak2130@gmail.com">kodak2130@gmail.com</a>
        </p>
      </section>
    </article>
  );
}
