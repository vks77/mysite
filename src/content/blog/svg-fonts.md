---
title: Embedding Fonts inside an SVG
description: Learn how to reliably embed an entire custom font inside a single SVG image file for standalone usage everywhere!
pubDate: 2026-03-03
---
When exporting an SVG with custom fonts from third-party systems for graphs, badges, or illustrations, just linking the fonts doesn’t always work. Your users might not have the right font files installed! So what can you do? Embed the fonts completely.

### The Problem

Standard SVG uses `font-family` elements to link to local fonts on the client’s device:
```xml
<text font-family="Roboto" x="10" y="20">Hello world</text>
```

However, when these images are rendered natively outside a browser, the default settings can change everything, ruining your layout.

### Solution: Embedded `<style>` + @font-face

To fix this, you can embed the font files in a base64 encoded string directly into your graphics container. This is done with embedded `<style>` sections in your images.

1. **Get your Font** (e.g., `<any>.woff2`). 
   Keep in mind that OpenType or TrueType fonts can be very large. You may need to use `pyftsubset` to reduce the size for production by cutting down unnecessary characters based on how you plan to use it.

2. **Encode into Base64.**

   *Linux/macOS:*
   ```bash
   base64 yourfont.woff2 -w 0 > base64font.txt 
   ```

3. **Construct the `<style>` block:**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="500" height="200">
  <defs>
    <style>
      @font-face {
        font-family: 'MyCustomFont';
        src: url('data:application/font-woff2;charset=utf-8;base64,...PASTE_BASE64_HERE...') format('woff2');
      }
      .custom-text {
        font-family: 'MyCustomFont';
        font-size: 40px;
        fill: #333;
      }
    </style>
  </defs>

  <text x="50" y="100" class="custom-text">Embedded SVG Font</text>
</svg>
```

This makes the document fully portable and self-contained!
