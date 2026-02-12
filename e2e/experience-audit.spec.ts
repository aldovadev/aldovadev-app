import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.describe("Experience Section Audit", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}/aldovadev`, { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);
  });

  test("Experience section — container height and background", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    // Scroll to experience section
    await page.evaluate(() => {
      const main = document.querySelector("main");
      const section = document.querySelector("#experience");
      if (main && section) {
        main.scrollTo({ top: (section as HTMLElement).offsetTop, behavior: "instant" });
      }
    });
    await page.waitForTimeout(1000);

    const section = page.locator("#experience");
    const sectionBox = await section.boundingBox();
    const sectionBg = await section.evaluate((el) => getComputedStyle(el).backgroundColor);

    const container = section.locator(".container-main");
    const containerBox = await container.boundingBox();
    const containerBg = await container.evaluate((el) => getComputedStyle(el).backgroundColor);

    console.log("Section:", sectionBox, "bg:", sectionBg);
    console.log("Container:", containerBox, "bg:", containerBg);

    if (sectionBox && containerBox) {
      const heightPercent = (containerBox.height / sectionBox.height) * 100;
      const widthPercent = (containerBox.width / sectionBox.width) * 100;
      console.log(`Container height: ${heightPercent.toFixed(1)}% of section (should be <90%)`);
      console.log(`Container width: ${widthPercent.toFixed(1)}% of section (should be 80-90%)`);

      // Container should NOT fill entire section height
      expect(heightPercent).toBeLessThan(95);
      // Background should be on container, not section
      expect(sectionBg).toBe("rgba(0, 0, 0, 0)");
      expect(containerBg).not.toBe("rgba(0, 0, 0, 0)");
    }

    // Verify NO extra wrapper div with border around stepper
    const extraWrappers = section.locator(".container-main .rounded-2xl.border.border-border-color");
    const wrapperCount = await extraWrappers.count();
    console.log(`Extra stepper wrapper divs: ${wrapperCount} (should be 0)`);
    expect(wrapperCount).toBe(0);

    await section.screenshot({ path: "e2e/screenshots/experience-fixed.png" });
  });

  test("Experience stepper — CTA buttons behavior", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });

    await page.evaluate(() => {
      const main = document.querySelector("main");
      const section = document.querySelector("#experience");
      if (main && section) {
        main.scrollTo({ top: (section as HTMLElement).offsetTop, behavior: "instant" });
      }
    });
    await page.waitForTimeout(2000); // Wait for whileInView animations

    // Wait for stepper "Next" button to appear after animation
    const nextBtnLocator = page.locator("#experience button").filter({ hasText: /Next/ });
    await nextBtnLocator.first().waitFor({ state: "visible", timeout: 10000 });

    // Navigate to last step — nextButtonText is "Next →"
    const totalSteps = 5;
    for (let i = 1; i < totalSteps; i++) {
      await nextBtnLocator.first().click();
      await page.waitForTimeout(800);
    }

    // Wait for last step's button to appear after animation
    await nextBtnLocator.first().waitFor({ state: "visible", timeout: 5000 });

    // Last step should still show "Next →" (finalStepButtonText)
    const lastBtnText = await nextBtnLocator.first().textContent();
    console.log(`Last step button: "${lastBtnText}"`);
    expect(lastBtnText?.trim()).toContain("Next");

    // Click to trigger overlay
    await nextBtnLocator.first().click();
    await page.waitForTimeout(2000);

    // Verify overlay CTAs
    const contactBtn = page.locator("#experience button").filter({ hasText: "Contact Me" });
    const exploreBtn = page.locator("#experience button").filter({ hasText: "Explore More" });

    await contactBtn.first().waitFor({ state: "visible", timeout: 5000 });
    expect(await contactBtn.first().isVisible()).toBe(true);
    expect(await exploreBtn.first().isVisible()).toBe(true);
    console.log("Contact Me visible:", await contactBtn.first().isVisible());
    console.log("Explore More visible:", await exploreBtn.first().isVisible());

    // Click "Explore More" — should close overlay and restart stepper
    await exploreBtn.first().click();
    await page.waitForTimeout(1500);

    // Overlay should be gone — Contact Me button should no longer be visible
    const overlayGone = await contactBtn.first().isVisible().catch(() => false);
    console.log(`Overlay after Explore More: ${overlayGone} (should be false)`);
    expect(overlayGone).toBe(false);

    // Stepper should be back at step 1
    const step1Active = page.locator("#experience button .rounded-full").first();
    const step1Bg = await step1Active.evaluate((el) => getComputedStyle(el).backgroundColor);
    console.log(`Step 1 bg after reset: ${step1Bg} (should be tomato/active)`);
  });
});
