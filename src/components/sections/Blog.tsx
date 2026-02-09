"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function Blog() {
  return (
    <section
      id="blog"
      className="relative section-screen text-foreground bg-surface"
    >
      <div className="container-main">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12"
          >
            THOUGHT <span className="text-tomato">STREAM</span>
          </motion.h2>

          {/* Same pattern as Projects: w-full max-w-5xl */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card group cursor-pointer hover:border-tomato/30 hover-transition p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-tomato bg-tomato/10 px-2.5 py-0.5 rounded-full">
                  {post.date}
                </span>
                <span className="text-xs text-foreground-muted">
                  {post.readTime}
                </span>
              </div>
              <h3 className="text-base font-semibold mb-2 group-hover:text-tomato hover-transition">
                {post.title}
              </h3>
              <p className="text-sm text-foreground-muted mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 flex-wrap mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs text-tomato bg-tomato/5 border border-tomato/30 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-foreground-muted group-hover:text-foreground group-hover:gap-3 hover-transition mt-auto">
                Read More <ArrowRight className="w-3 h-3" />
              </div>
            </motion.article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
