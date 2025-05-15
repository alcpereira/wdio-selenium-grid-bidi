import { browser } from "@wdio/globals";
import { promises as fs } from "node:fs";

describe("My Example", () => {
  it("should take a nice screenshot", async () => {
    const isBidi = !!browser.capabilities.webSocketUrl;
    const screenshotName = isBidi
      ? "screenshot_bidi.png"
      : "screenshot_legacy.png";
    await browser.url("https://fonts.google.com/specimen/Exile");
    await browser.saveScreenshot(screenshotName);
    if (isBidi) {
      const context = await browser.getWindowHandle();
      const screenshotDocument = await browser.browsingContextCaptureScreenshot(
        {
          context,
          origin: "document",
        },
      );
      await fs.writeFile(
        "screenshot_bidi_raw_doc.png",
        screenshotDocument.data,
        "base64",
      );
      const screenshotViewport = await browser.browsingContextCaptureScreenshot(
        {
          context,
          origin: "viewport",
        },
      );
      await fs.writeFile(
        "screenshot_bidi_raw_vp.png",
        screenshotViewport.data,
        "base64",
      );
    }
  });
});
