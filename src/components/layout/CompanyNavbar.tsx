"use client";

import { useState } from "react";
import { Menu, X as MenuClose, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar as NavbarRoot,
  NavLogo,
  NavActions,
} from "@/components/ui/ResizableNavbar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";
import { Button } from "@/components/ui/Button";
import { companyNavLinks } from "@/data";

export function CompanyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobileGroup = (label: string) => {
    setExpandedMobile((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <NavbarRoot>
        <NavLogo>
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="text-sm font-bold text-foreground tracking-tight">
              CODEWITH<span className="text-tomato">ALDOVA</span>
            </span>
          </Link>
        </NavLogo>

        {/* ── Desktop Navigation ── */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              {companyNavLinks.map((link) =>
                link.children ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      {(() => {
                        const hasGroups = link.children!.some((c) => c.group);
                        if (!hasGroups) {
                          return (
                            <ul className="grid w-105 gap-1 p-3 md:w-135 md:grid-cols-2">
                              {link.children!.map((child) => (
                                <li key={child.label}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={child.href}
                                      data-active={pathname === child.href || undefined}
                                      className="block select-none rounded-lg p-3 leading-none no-underline transition-colors hover:bg-card-bg"
                                    >
                                      <div className="text-sm font-medium text-foreground leading-none">
                                        {child.label}
                                      </div>
                                      {child.description && (
                                        <p className="text-xs text-foreground-muted leading-snug mt-1.5">
                                          {child.description}
                                        </p>
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        const groups = [...new Set(link.children!.map((c) => c.group!))];
                        return (
                          <div className="flex w-105 gap-0 p-3 md:w-120">
                            {groups.map((group, gi) => (
                              <div
                                key={group}
                                className={`flex-1 ${gi > 0 ? "border-l border-border-color pl-3 ml-3" : ""}`}
                              >
                                <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider px-3 mb-2">
                                  {group}
                                </p>
                                <ul className="space-y-0.5">
                                  {link.children!
                                    .filter((c) => c.group === group)
                                    .map((child) => (
                                      <li key={child.label}>
                                        <NavigationMenuLink asChild>
                                          <Link
                                            href={child.href}
                                            data-active={pathname === child.href || undefined}
                                            className="block select-none rounded-lg p-3 leading-none no-underline transition-colors hover:bg-card-bg"
                                          >
                                            <div className="text-sm font-medium text-foreground leading-none">
                                              {child.label}
                                            </div>
                                            {child.description && (
                                              <p className="text-xs text-foreground-muted leading-snug mt-1.5">
                                                {child.description}
                                              </p>
                                            )}
                                          </Link>
                                        </NavigationMenuLink>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        data-active={
                          (link.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(link.href)) || undefined
                        }
                        className="inline-flex h-9 items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-foreground-muted transition-colors hover:text-foreground data-[active=true]:text-tomato"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <NavActions>
          <AnimatedThemeToggler />

          <Button asChild className="hidden lg:inline-flex uppercase tracking-wider px-10">
            <Link href="/contact">Free Consultation</Link>
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-card-bg rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <MenuClose className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </NavActions>
      </NavbarRoot>

      {/* ── Mobile Navigation ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-16 inset-x-0 z-40 lg:hidden"
          >
            <div className="bg-background/95 backdrop-blur-lg border-b border-border-color shadow-lg shadow-black/5 px-6 py-3 flex flex-col gap-0.5 max-h-[calc(100dvh-4rem)] overflow-y-auto">
              {companyNavLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleMobileGroup(link.label)}
                      className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMobile === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {expandedMobile === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 pb-2 space-y-0.5">
                            {(() => {
                              const hasGroups = link.children!.some((c) => c.group);
                              if (!hasGroups) {
                                return link.children!.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-3 text-sm text-foreground-muted hover:text-foreground hover:bg-card-bg rounded-lg transition-colors"
                                  >
                                    <span className="font-medium text-foreground">
                                      {child.label}
                                    </span>
                                    {child.description && (
                                      <span className="block text-xs text-foreground-muted mt-0.5">
                                        {child.description}
                                      </span>
                                    )}
                                  </Link>
                                ));
                              }
                              const groups = [...new Set(link.children!.map((c) => c.group!))];
                              return groups.map((group, gi) => (
                                <div key={group} className={gi > 0 ? "mt-3" : ""}>
                                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider px-3 mb-1">
                                    {group}
                                  </p>
                                  {link.children!
                                    .filter((c) => c.group === group)
                                    .map((child) => (
                                      <Link
                                        key={child.label}
                                        href={child.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 px-3 text-sm text-foreground-muted hover:text-foreground hover:bg-card-bg rounded-lg transition-colors"
                                      >
                                        <span className="font-medium text-foreground">
                                          {child.label}
                                        </span>
                                        {child.description && (
                                          <span className="block text-xs text-foreground-muted mt-0.5">
                                            {child.description}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
                                </div>
                              ));
                            })()}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2.5 text-sm font-medium transition-colors ${
                      (link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href))
                        ? "text-tomato"
                        : "text-foreground-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <Button asChild className="w-full uppercase tracking-wider mt-2" size="sm">
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
