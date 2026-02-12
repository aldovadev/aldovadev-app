import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

const viewports = [
  { name: "1920x1080", width: 1920, height: 1080 },
  { name: "1440x900", width: 1440, height: 900 },
  { name: "1280x720", width: 1280, height: 720 },
  { name: "1024x768", width: 1024, height: 768 },
  { name: "768x1024 (tablet)", width: 768, height: 1024 },
];

test.describe("Experience zoom/resize audit", () => {
  for (const vp of viewports) {
    test(`${vp.name} — stepper fits inside container`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${BASE_URL}/aldovadev`, { waitUntil: "networkidle" });
      await page.waitForTimeout(2000);

      // Scroll to experience
      await page.evaluate(() => {
        const main = document.querySelector("main");
        const section = document.querySelector("#experience");
        if (main && section) {
          main.scrollTo({ top: (section as HTMLElement).offsetTop, behavior: "instant" });
        }
      });
      await page.waitForTimeout(1000);

      const section = page.locator("#experience");
      const container = section.locator(".container-main");

      const sectionBox = await section.boundingBox();
      const containerBox = await container.boundingBox();

      console.log(`[${vp.name}] Section:`, sectionBox);
      console.log(`[${vp.name}] Container:`, containerBox);

      if (!sectionBox || !containerBox) {
        console.log(`[${vp.name}] MISSING boxes`);
        return;
      }

      // Check container fits within section
      const containerBottom = containerBox.y + containerBox.height;
      const sectionBottom = sectionBox.y + sectionBox.height;
      const overflow = containerBottom - sectionBottom;
      console.log(`[${vp.name}] Container bottom: ${containerBottom.toFixed(0)}, Section bottom: ${sectionBottom.toFixed(0)}, Overflow: ${overflow.toFixed(0)}px`);

      // Check stepper position within container
      // The stepper is in the right column
      const stepperCol = section.locator(".container-main > div > div").last();
      const stepperBox = await stepperCol.boundingBox();
      console.log(`[${vp.name}] Stepper column:`, stepperBox);

      if (stepperBox) {
        const stepperRight = stepperBox.x + stepperBox.width;
        const containerRight = containerBox.x + containerBox.width;
        const rightOverflow = stepperRight - containerRight;
        const bottomOverflow = (stepperBox.y + stepperBox.height) - (containerBox.y + containerBox.height);

        console.log(`[${vp.name}] Stepper right overflow: ${rightOverflow.toFixed(0)}px`);
        console.log(`[${vp.name}] Stepper bottom overflow: ${bottomOverflow.toFixed(0)}px`);

        // Stepper should not exceed container bounds
        expect(rightOverflow).toBeLessThanOrEqual(1);
        expect(bottomOverflow).toBeLessThanOrEqual(1);
      }

      // Check height percentages
      const heightPct = (containerBox.height / sectionBox.height) * 100;
      console.log(`[${vp.name}] Container height: ${containerBox.height.toFixed(0)}px (${heightPct.toFixed(1)}% of section)`);

      await section.screenshot({ path: `e2e/screenshots/experience-${vp.name}.png` });
    });
  }
});
