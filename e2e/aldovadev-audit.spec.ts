import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3099";

test.describe("Aldovadev Page Layout Audit", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/aldovadev`, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
  });

  test("Desktop 1440px — Section centering, padding, max-width", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);

    // Check all .container-main elements
    const containers = page.locator(".container-main");
    const count = await containers.count();
    console.log(`Found ${count} .container-main elements`);

    for (let i = 0; i < count; i++) {
      const el = containers.nth(i);
      const box = await el.boundingBox();
      const styles = await el.evaluate((e) => {
        const cs = getComputedStyle(e);
        return {
          marginLeft: cs.marginLeft,
          marginRight: cs.marginRight,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight,
          maxWidth: cs.maxWidth,
          width: cs.width,
        };
      });
      console.log(`\n--- .container-main[${i}] ---`);
      console.log(`  marginLeft: ${styles.marginLeft}`);
      console.log(`  marginRight: ${styles.marginRight}`);
      console.log(`  paddingLeft: ${styles.paddingLeft}`);
      console.log(`  paddingRight: ${styles.paddingRight}`);
      console.log(`  maxWidth: ${styles.maxWidth}`);
      console.log(`  computed width: ${styles.width}`);
      if (box) {
        console.log(
          `  box: x=${box.x.toFixed(1)} y=${box.y.toFixed(1)} w=${box.width.toFixed(1)} h=${box.height.toFixed(1)}`
        );
        // Check centering: left offset should roughly equal right offset
        const leftOffset = box.x;
        const rightOffset = 1440 - (box.x + box.width);
        console.log(
          `  centering: left=${leftOffset.toFixed(1)} right=${rightOffset.toFixed(1)} diff=${Math.abs(leftOffset - rightOffset).toFixed(1)}`
        );
      }
    }
  });

  test("Desktop 1440px — Section backgrounds and typography", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForTimeout(500);

    const sections = ["#home", "#experience", "#projects", "#philosophy"];
    for (const id of sections) {
      const section = page.locator(id);
      if ((await section.count()) === 0) {
        console.log(`\n--- ${id} --- NOT FOUND`);
        continue;
      }
      const box = await section.boundingBox();
      const styles = await section.evaluate((e) => {
        const cs = getComputedStyle(e);
        return {
          bg: cs.backgroundColor,
          color: cs.color,
          minHeight: cs.minHeight,
          height: cs.height,
          paddingTop: cs.paddingTop,
          paddingBottom: cs.paddingBottom,
          overflow: cs.overflow,
        };
      });
      console.log(`\n--- ${id} ---`);
      console.log(`  bg: ${styles.bg}`);
      console.log(`  color: ${styles.color}`);
      console.log(`  minHeight: ${styles.minHeight}`);
      console.log(`  height: ${styles.height}`);
      console.log(`  paddingTop: ${styles.paddingTop}`);
      console.log(`  paddingBottom: ${styles.paddingBottom}`);
      if (box) {
        console.log(`  box: w=${box.width.toFixed(1)} h=${box.height.toFixed(1)}`);
      }
    }

    // Typography checks
    const typoChecks = [
      { selector: ".hero-title", label: "hero-title" },
      { selector: ".section-title", label: "section-title" },
    ];
    for (const { selector, label } of typoChecks) {
      const el = page.locator(selector).first();
      if ((await el.count()) === 0) {
        console.log(`\n--- ${label} --- NOT FOUND`);
        continue;
      }
      const styles = await el.evaluate((e) => {
        const cs = getComputedStyle(e);
        return {
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          fontFamily: cs.fontFamily.substring(0, 60),
          letterSpacing: cs.letterSpacing,
        };
      });
      console.log(`\n--- ${label} ---`);
      console.log(`  fontSize: ${styles.fontSize}`);
      console.log(`  fontWeight: ${styles.fontWeight}`);
      console.log(`  lineHeight: ${styles.lineHeight}`);
      console.log(`  letterSpacing: ${styles.letterSpacing}`);
      console.log(`  fontFamily: ${styles.fontFamily}`);
    }
  });

  test("Desktop 1440px — Experience section gap audit", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    // Scroll to experience section
    await page.evaluate(() => {
      const main = document.querySelector("main");
      const exp = document.getElementById("experience");
      if (main && exp) main.scrollTop = exp.offsetTop;
    });
    await page.waitForTimeout(500);

    const expSection = page.locator("#experience");
    if ((await expSection.count()) > 0) {
      // Check title margin-bottom relative to content
      const headerDiv = expSection.locator(".section-title").first();
      const headerBox = await headerDiv.boundingBox();

      // Find the stepper/content area
      const contentArea = expSection
        .locator(".flex.flex-col.lg\\:flex-row")
        .first();
      const contentBox = await contentArea.boundingBox();

      if (headerBox && contentBox) {
        const gap = contentBox.y - (headerBox.y + headerBox.height);
        console.log(`\n--- Experience Header-to-Content Gap ---`);
        console.log(`  header bottom: ${(headerBox.y + headerBox.height).toFixed(1)}`);
        console.log(`  content top: ${contentBox.y.toFixed(1)}`);
        console.log(`  gap: ${gap.toFixed(1)}px`);
      }
    }
  });

  test("Mobile 375px — Layout check", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);

    const containers = page.locator(".container-main");
    const count = await containers.count();
    console.log(`Mobile: Found ${count} .container-main elements`);

    for (let i = 0; i < count; i++) {
      const el = containers.nth(i);
      const box = await el.boundingBox();
      const styles = await el.evaluate((e) => {
        const cs = getComputedStyle(e);
        return {
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight,
          width: cs.width,
        };
      });
      console.log(`\n--- mobile .container-main[${i}] ---`);
      console.log(`  paddingLeft: ${styles.paddingLeft}`);
      console.log(`  paddingRight: ${styles.paddingRight}`);
      console.log(`  width: ${styles.width}`);
      if (box) {
        console.log(`  box: x=${box.x.toFixed(1)} w=${box.width.toFixed(1)}`);
        // Check content doesn't overflow
        const overflows = box.x + box.width > 375;
        console.log(`  overflows viewport: ${overflows}`);
      }
    }
  });

  test("Screenshots — Desktop & Mobile", async ({ page }) => {
    // Desktop screenshots
    await page.setViewportSize({ width: 1440, height: 900 });
    const main = page.locator("main");

    const sections = ["home", "experience", "projects", "philosophy"];
    for (const id of sections) {
      await page.evaluate(
        (sectionId) => {
          const mainEl = document.querySelector("main");
          const section = document.getElementById(sectionId);
          if (mainEl && section) mainEl.scrollTop = section.offsetTop;
        },
        id
      );
      await page.waitForTimeout(800);
      await page.screenshot({
        path: `e2e/screenshots/desktop-${id}.png`,
        fullPage: false
      });
    }

    // Mobile screenshots
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(500);
    for (const id of sections) {
      await page.evaluate(
        (sectionId) => {
          const mainEl = document.querySelector("main");
          const section = document.getElementById(sectionId);
          if (mainEl && section) mainEl.scrollTop = section.offsetTop;
        },
        id
      );
      await page.waitForTimeout(800);
      await page.screenshot({
        path: `e2e/screenshots/mobile-${id}.png`,
        fullPage: false
      });
    }
  });
});
