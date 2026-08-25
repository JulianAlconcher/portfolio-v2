import { translations, type Lang } from "../data/i18n";

function getNestedTranslation(obj: any, path: string): string | undefined {
  return path.split(".").reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

export function updatePageLanguage(lang: Lang) {
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("lang", lang);

  const t = translations[lang];
  if (!t) return;

  // Update text contents
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = getNestedTranslation(t, key);
    if (value && typeof value === "string") {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = getNestedTranslation(t, key);
    if (value && typeof value === "string") {
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = value;
    }
  });

  // Update language toggle buttons
  document.querySelectorAll(".lang-indicator").forEach((el) => {
    el.textContent = lang === "es" ? "EN" : "ES";
  });
  document.querySelectorAll(".current-lang-text").forEach((el) => {
    el.textContent = lang.toUpperCase();
  });

  // Dispatch custom event
  window.dispatchEvent(new CustomEvent("portfolio-lang-change", { detail: { lang, t } }));
}

export function initI18n() {
  const stored = localStorage.getItem("lang") as Lang | null;
  let initialLang: Lang = "es";

  if (stored === "es" || stored === "en") {
    initialLang = stored;
  } else {
    const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || "es").toLowerCase();
    initialLang = browserLang.startsWith("es") ? "es" : "en";
  }

  updatePageLanguage(initialLang);

  // Setup click listeners on all language toggle buttons
  document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = (document.documentElement.getAttribute("lang") as Lang) || "es";
      const next: Lang = current === "es" ? "en" : "es";
      updatePageLanguage(next);
    });
  });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
}
