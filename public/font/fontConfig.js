const fs = require("fs");
const path = require("path");

const fontPath = path.join(__dirname, "Vazirmatn-Regular.ttf");
const base64 = fs.readFileSync(fontPath).toString("base64");

const outputDir = path.join(__dirname, "..", "..", "src", "lib");
const outputPath = path.join(outputDir, "vazirFontBase64.js");

// اگه پوشه وجود نداشت، بسازش (recursive: true یعنی پوشه‌های تودرتو رو هم بساز)
fs.mkdirSync(outputDir, { recursive: true });

fs.writeFileSync(outputPath, `export const vazirFontBase64 = "${base64}";\n`);

console.log("Done!");
