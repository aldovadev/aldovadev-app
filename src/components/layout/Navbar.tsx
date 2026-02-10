"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X as MenuClose, Github, Linkedin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import Image from "next/image";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/aldovadev", icon: Github },
  { name: "X", href: "https://x.com/aldovadev", icon: XIcon },
  { name: "LinkedIn", href: "https://linkedin.com/in/aldovadev", icon: Linkedin },
];
import {
  Navbar as NavbarRoot,
  NavLogo,
  NavItems,
  NavActions,
  MobileNav,
} from "@/components/ui/ResizableNavbar";
import { AnimatedThemeToggler } from "@/components/ui/AnimatedThemeToggler";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const activeSectionRef = useRef("#home");

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const updateActive = () => {
      const scrollCenter = main.scrollTop + main.clientHeight / 2;
      let currentId = "home";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollCenter) currentId = id;
      }

      const hash = `#${currentId}`;
      if (activeSectionRef.current !== hash) {
        activeSectionRef.current = hash;
        setActiveSection(hash);
      }
    };

    main.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => main.removeEventListener("scroll", updateActive);
  }, []);

  useEffect(() => {
    const sectionNames: Record<string, string> = {
      "#home": "Home",
      "#about": "About Me",
      "#projects": "Projects",
      "#blog": "Blog",
      "#contact": "Contact",
    };
    const sectionName = sectionNames[activeSection] || "Home";
    document.title = `CODEWITHALDOVA - ${sectionName}`;
  }, [activeSection]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <NavbarRoot>
        <NavLogo>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-2.5 group"
          >
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
          </a>
        </NavLogo>

        <NavItems
          items={navItems}
          activeSection={activeSection}
          onItemClick={handleNavClick}
        />

        <NavActions>
          <div className="hidden lg:flex items-center gap-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 text-foreground-muted hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <AnimatedThemeToggler />

          <Button
            onClick={() => scrollToSection("#contact")}
            className="hidden lg:inline-flex uppercase tracking-wider px-10"
          >
            Contact Me
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-card-bg rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <MenuClose className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </NavActions>
      </NavbarRoot>

      <MobileNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navItems}
        activeSection={activeSection}
        onItemClick={handleNavClick}
      >
        <Button
          className="w-full uppercase tracking-wider mt-1"
          size="sm"
          onClick={() => handleNavClick("#contact")}
        >
          Contact Me
        </Button>
      </MobileNav>
    </>
  );
}
