"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

export function Navbar({ children, className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const handleScroll = () => setIsScrolled(main.scrollTop > 20);
    main.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border-color"
          : "bg-transparent",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl flex items-center h-16 px-6">
        {children}
      </div>
    </motion.nav>
  );
}

interface NavLogoProps {
  children: React.ReactNode;
  className?: string;
}

export function NavLogo({ children, className }: NavLogoProps) {
  return <div className={cn("shrink-0", className)}>{children}</div>;
}

interface NavItemsProps {
  items: { label: string; href: string }[];
  activeSection?: string;
  onItemClick?: (href: string) => void;
  className?: string;
  renderLink?: (
    item: { label: string; href: string },
    isActive: boolean,
    onClick: (href: string) => void,
  ) => React.ReactNode;
}

export function NavItems({
  items,
  activeSection,
  onItemClick,
  className,
  renderLink,
}: NavItemsProps) {
  return (
    <div className={cn("hidden lg:flex flex-1 items-center justify-center gap-8", className)}>
      {items.map((item) => {
        const isActive = activeSection === item.href;
        if (renderLink) {
          return (
            <React.Fragment key={item.href}>
              {renderLink(item, isActive, onItemClick ?? (() => {}))}
            </React.Fragment>
          );
        }
        return (
          <button
            key={item.href}
            onClick={() => onItemClick?.(item.href)}
            className={cn(
              "text-sm font-medium transition-colors cursor-pointer",
              isActive
                ? "text-foreground"
                : "text-foreground-muted hover:text-foreground",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

interface NavActionsProps {
  children: React.ReactNode;
  className?: string;
}

export function NavActions({ children, className }: NavActionsProps) {
  return (
    <div className={cn("flex items-center gap-3 shrink-0 ml-auto", className)}>{children}</div>
  );
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: { label: string; href: string }[];
  activeSection?: string;
  onItemClick?: (href: string) => void;
  children?: React.ReactNode;
  renderLink?: (
    item: { label: string; href: string },
    isActive: boolean,
    onClick: (href: string) => void,
  ) => React.ReactNode;
}

export function MobileNav({
  isOpen,
  onClose,
  items,
  activeSection,
  onItemClick,
  children,
  renderLink,
}: MobileNavProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="fixed top-16 inset-x-0 z-40 lg:hidden"
        >
          <div className="bg-background/95 backdrop-blur-lg border-b border-border-color shadow-lg shadow-black/5 px-6 py-3 flex flex-col gap-0.5">
            {items.map((item) => {
              const isActive = activeSection === item.href;
              if (renderLink) {
                return (
                  <React.Fragment key={item.href}>
                    {renderLink(item, isActive, onItemClick ?? (() => {}))}
                  </React.Fragment>
                );
              }
              return (
                <button
                  key={item.href}
                  onClick={() => {
                    onItemClick?.(item.href);
                    onClose();
                  }}
                  className={cn(
                    "px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-left cursor-pointer",
                    isActive
                      ? "text-foreground bg-card-bg"
                      : "text-foreground-muted hover:text-foreground hover:bg-card-bg",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
            {children && (
              <div className="pt-2 border-t border-border-color mt-2">
                {children}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
