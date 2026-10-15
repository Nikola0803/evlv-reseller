const sharp = require("sharp");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "public", "images", "storefronts", "blank-vial-master-v2.png");
const outDir = path.join(root, "public", "images", "storefronts", "products");

const products = [
  ["glp3-r-10mg", "GLP3-R", "10MG"],
  ["glp2-t-10mg", "GLP2-T", "10MG"],
  ["glp1-s-5mg", "GLP1-S", "5MG"],
  ["ghk-cu-50mg", "GHK-CU", "50MG"],
  ["nad-500mg", "NAD+", "500MG"],
  ["kpv-10mg", "KPV", "10MG"],
  ["mots-c-10mg", "MOTS-C", "10MG"],
  ["bpc-157-10mg", "BPC-157", "10MG"],
];

async function main() {
  const fs = require("fs");
  fs.mkdirSync(outDir, { recursive: true });

  for (const [slug, name, amount] of products) {
    const label = Buffer.from(`
      <svg width="1024" height="1536" viewBox="0 0 1024 1536" xmlns="http://www.w3.org/2000/svg">
        <text x="512" y="770" text-anchor="middle" fill="#16181c" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="6">INDEPENDENT</text>
        <line x1="422" y1="814" x2="602" y2="814" stroke="#2e58d6" stroke-width="5"/>
        <text x="512" y="925" text-anchor="middle" fill="#16181c" font-family="Arial, Helvetica, sans-serif" font-size="76" font-weight="700">${name}</text>
        <rect x="410" y="968" width="204" height="72" rx="36" fill="none" stroke="#2e58d6" stroke-width="5"/>
        <text x="512" y="1016" text-anchor="middle" fill="#2e58d6" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700">${amount}</text>
        <text x="512" y="1142" text-anchor="middle" fill="#5e626a" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="4">RESEARCH USE ONLY</text>
      </svg>`);

    await sharp(source)
      .composite([{ input: label, left: 0, top: 0 }])
      .png({ quality: 95 })
      .toFile(path.join(outDir, `${slug}.png`));
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
