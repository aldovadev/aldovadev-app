import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { XIcon } from "@/components/ui/XIcon";

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
