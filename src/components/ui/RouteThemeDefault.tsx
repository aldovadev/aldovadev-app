"use client";

import { useEffect } from "react";

/**
 * Sets the default theme for a route when no explicit user preference
 * is stored in localStorage. Works on both full page loads and
 * client-side navigations.
 */
export function RouteThemeDefault({ dark }: { dark: boolean }) {
  useEffect(() => {
    // Always apply route-based theme on navigation
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return null;
}
