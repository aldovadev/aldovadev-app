"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowLeft, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import RotatingText from "@/components/ui/RotatingText";
import ShinyText from "@/components/ui/ShinyText";
import SilkBackground from "@/components/ui/SilkBackground";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const channels = [
  {
    id: "email",
    name: "Email",
    description: "Send me an email",
    icon: Mail,
    color: "tomato",
    bgClass: "bg-tomato/10",
    textClass: "text-tomato",
    hoverBorder: "hover:border-tomato/40",
    hoverBg: "group-hover:bg-tomato",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Quick chat on WhatsApp",
    icon: WhatsAppIcon,
    color: "#25D366",
    bgClass: "bg-emerald-500/10",
    textClass: "text-emerald-500",
    hoverBorder: "hover:border-emerald-500/40",
    hoverBg: "group-hover:bg-emerald-500",
    href: "https://wa.me/6281234567890",
  },
  {
    id: "telegram",
    name: "Telegram",
    description: "Message on Telegram",
    icon: TelegramIcon,
    color: "#26A5E4",
    bgClass: "bg-sky-500/10",
    textClass: "text-sky-500",
    hoverBorder: "hover:border-sky-500/40",
    hoverBg: "group-hover:bg-sky-500",
    href: "https://t.me/aldovadev",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Connect on LinkedIn",
    icon: LinkedInIcon,
    color: "#0A66C2",
    bgClass: "bg-blue-600/10",
    textClass: "text-blue-600",
    hoverBorder: "hover:border-blue-600/40",
    hoverBg: "group-hover:bg-blue-600",
    href: "https://linkedin.com/in/aldovadev",
  },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/aldovadev", icon: GithubIcon },
  { name: "LinkedIn", href: "https://linkedin.com/in/aldovadev", icon: LinkedInIcon },
  { name: "X", href: "https://x.com/aldovadev", icon: XIcon },
  { name: "Email", href: "mailto:hello@aldovadev.com", icon: Mail },
];

function EmailForm({ onBack }: { onBack: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
            Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-xl border border-border-color bg-card-bg/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-tomato/60 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
            Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-xl border border-border-color bg-card-bg/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-tomato/60 transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
          Subject
        </label>
        <input
          type="text"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="rounded-xl border border-border-color bg-card-bg/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-tomato/60 transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-mono uppercase tracking-wider text-foreground-muted">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-xl border border-border-color bg-card-bg/80 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-tomato/60 transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      {status === "sent" && (
        <p className="text-sm text-emerald-500 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-500 text-center">Something went wrong. Try again.</p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-border-color text-sm font-medium text-foreground-muted hover:text-foreground hover:border-foreground/20 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Channels
        </button>
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-tomato text-white text-sm font-semibold hover:bg-tomato/90 disabled:opacity-60 transition-all cursor-pointer"
        >
          {status === "sending" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {status === "sending" ? "Sending..." : "Send Email"}
        </button>
      </div>
    </motion.form>
  );
}

export function Contact() {
  const [view, setView] = useState<"channels" | "email">("channels");

  return (
    <section
      id="contact"
      className="relative section-screen text-foreground bg-background"
    >
      <div className="container-main relative z-10 flex flex-col h-full justify-center py-12 lg:py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-12"
        >
          <h2 className="section-title">
            <ShinyText
              text="GET IN TOUCH"
              speed={3}
              color="var(--foreground)"
              shineColor="var(--tomato)"
              spread={120}
            />
          </h2>
          <p className="text-base text-foreground-muted mt-3 max-w-md mx-auto">
            Let&apos;s build something{" "}
            <span className="text-tomato font-semibold">extraordinary</span>{" "}
            together.
          </p>
        </motion.div>

        {/* Design Container with Silk Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-3xl border border-border-color overflow-hidden"
        >
          {/* Silk Background */}
          <div className="absolute inset-0 z-0 opacity-30">
            <SilkBackground speed={3} scale={1} color="#E84A35" noiseIntensity={1.2} rotation={0.2} />
          </div>

          {/* Content Grid — Left: text hero | Right: channel cards */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 lg:p-12">
            {/* Left Side — Branding & Text */}
            <div className="relative flex flex-col justify-center gap-6">
              <div className="relative z-10">
              {/* DEVELOP / DELIVER + Rotating BETTER / FASTER */}
              <div className="flex flex-col gap-1">
                <div className="flex items-end gap-4">
                  <div className="flex flex-col leading-tight">
                    <ShinyText
                      text="DEVELOP"
                      speed={3}
                      color="var(--foreground)"
                      shineColor="var(--tomato)"
                      spread={120}
                      className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-widest"
                    />
                    <ShinyText
                      text="DELIVER"
                      speed={3}
                      color="var(--foreground)"
                      shineColor="var(--tomato)"
                      spread={120}
                      className="text-base sm:text-lg lg:text-xl font-bold uppercase tracking-widest"
                    />
                  </div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground uppercase overflow-hidden">
                    <RotatingText
                      texts={["BETTER", "FASTER", "SMARTER"]}
                      rotationInterval={2500}
                      staggerDuration={0.03}
                      staggerFrom="first"
                      transition={{ type: "spring", damping: 30, stiffness: 200 }}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-120%", opacity: 0 }}
                      mainClassName="text-tomato"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>

            {/* Right Side — Channel Cards / Email Form */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {view === "channels" ? (
                  <motion.div
                    key="channels"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-3 w-full"
                  >
                    {channels.map((ch, i) => {
                      const Icon = ch.icon;
                      const isExternal = ch.id !== "email";

                      const inner = (
                        <div className="flex items-center gap-4">
                          <div
                            className={`shrink-0 p-3 rounded-xl ${ch.bgClass} ${ch.textClass} ${ch.hoverBg} group-hover:text-white transition-all duration-300`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-foreground">
                              {ch.name}
                            </p>
                            <p className="text-xs text-foreground-muted">
                              {ch.description}
                            </p>
                          </div>
                        </div>
                      );

                      if (isExternal) {
                        return (
                          <motion.a
                            key={ch.id}
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={`group rounded-2xl border border-border-color bg-card-bg/60 backdrop-blur-md p-4 ${ch.hoverBorder} transition-all duration-300 cursor-pointer`}
                          >
                            {inner}
                          </motion.a>
                        );
                      }

                      return (
                        <motion.button
                          key={ch.id}
                          type="button"
                          onClick={() => setView("email")}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className={`group rounded-2xl border border-border-color bg-card-bg/60 backdrop-blur-md p-4 ${ch.hoverBorder} transition-all duration-300 text-left cursor-pointer`}
                        >
                          {inner}
                        </motion.button>
                      );
                    })}
                  </motion.div>
                ) : (
                  <EmailForm key="email" onBack={() => setView("channels")} />
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border-color/50 w-full mt-auto">
        <div className="container-main py-4">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <span className="text-xs text-foreground-muted">
              © {new Date().getFullYear()} CODEWITH<span className="text-tomato font-bold">ALDOVA</span>. All rights reserved.
            </span>
            <div className="flex items-center gap-1">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.name} variant="ghost" size="icon" asChild>
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
    </section>
  );
}
