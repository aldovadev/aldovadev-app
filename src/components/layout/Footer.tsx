"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/aldovadev", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aldovadev",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/aldovadev", icon: Twitter },
  { name: "Email", href: "mailto:hello@aldovadev.com", icon: Mail },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-color bg-background text-foreground">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-lg font-bold tracking-tight inline-block uppercase"
            >
              CODEWITH<span className="text-tomato">ALDOVA</span>
            </button>
            <p className="text-sm text-foreground-muted mt-3 max-w-xs mx-auto md:mx-0 leading-relaxed">
              Crafting digital experiences that transcend the ordinary.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-foreground-muted hover:text-tomato hover-transition"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="p-2.5 rounded-lg bg-card-bg border border-border-color hover:border-tomato hover:text-tomato hover-transition"
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border-color flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3">
          <p className="text-xs text-foreground-muted">
            © {currentYear} aldovadev. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-foreground-muted hover:text-tomato hover-transition"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-xs text-foreground-muted hover:text-tomato hover-transition"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
