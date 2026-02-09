"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Send } from "lucide-react";
import { Footer } from "@/components/layout";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full h-11 px-4 rounded-lg bg-background border border-border-color text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:border-tomato focus:ring-1 focus:ring-tomato/20 transition-all";

  return (
    <section
      id="contact"
      className="relative section-screen justify-between! text-foreground bg-background"
    >
      <div className="container-main flex-1 flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-20"
        >
          GET IN <span className="text-tomato">TOUCH</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full max-w-5xl">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold mb-4">
              Let&apos;s build something{" "}
              <span className="text-tomato">great</span>
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed mb-8">
              I am available for select commissions, collaborations, and
              full-time opportunities. Fill out the form or reach out directly.
            </p>

            <a
              href="mailto:hello@aldovadev.com"
              className="inline-flex items-center gap-3 text-foreground-muted hover:text-tomato hover-transition group mb-6"
            >
              <div className="p-3 rounded-lg bg-card-bg border border-border-color group-hover:border-tomato hover-transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-foreground-muted">Email</p>
                <p className="text-foreground font-medium text-sm">
                  hello@aldovadev.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 text-foreground-muted">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <p className="text-sm">
                Usually responds within <strong>24 hours</strong>
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="card p-6 sm:p-8 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-foreground-muted block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-foreground-muted block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-medium text-foreground-muted block"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className={inputClasses}
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-foreground-muted block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border-color text-foreground text-sm placeholder:text-foreground-muted/50 focus:outline-none focus:border-tomato focus:ring-1 focus:ring-tomato/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <ArrowRight className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  "Something went wrong. Try again."
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer inside contact section */}
      <Footer />
    </section>
  );
}
