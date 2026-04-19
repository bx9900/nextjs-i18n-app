"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] as Locale;

  const switchLocale = (locale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-2" role="navigation" aria-label="Language switcher">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          aria-current={locale === currentLocale ? "true" : undefined}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            locale === currentLocale
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
