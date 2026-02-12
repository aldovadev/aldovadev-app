"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { name: "GitHub", href: "https://github.com/aldovadev", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/aldovadev", icon: Linkedin },
  { name: "X", href: "https://x.com/aldovadev", icon: XIcon },
  { name: "Email", href: "mailto:hello@aldovadev.com", icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-color bg-background text-foreground">
      <div className="container-main py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xs text-foreground-muted">
            © {currentYear} CODEWITH<span className="text-tomato font-bold">ALDOVA</span>. All rights reserved.
          </span>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
