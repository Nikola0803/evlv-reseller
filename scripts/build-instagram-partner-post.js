const sharp = require("sharp");
const path = require("path");

const root = path.resolve(__dirname, "..");
const background = path.join(root, "public", "images", "social", "partner-recruitment-background.png");
const logo = path.join(root, "public", "logo", "evlv-logo-light.png");
const output = path.join(root, "public", "images", "social", "evlv-partner-recruitment-instagram.png");

const width = 1080;
const height = 1350;

const overlay = Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#061f1c" stop-opacity="0.98"/>
      <stop offset="0.43" stop-color="#082824" stop-opacity="0.76"/>
      <stop offset="0.67" stop-color="#082824" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1350" fill="url(#shade)"/>
  <text x="78" y="305" fill="#d49b6a" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="5">PARTNER APPLICATIONS</text>
  <text x="78" y="390" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700">BUILD</text>
  <text x="78" y="468" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700">SOMETHING</text>
  <text x="78" y="546" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="700">OF YOUR OWN.</text>
  <rect x="78" y="597" width="70" height="3" rx="1.5" fill="#d49b6a"/>
  <text x="78" y="658" fill="#edf3ef" font-family="Arial, Helvetica, sans-serif" font-size="25">Private wholesale access</text>
  <text x="78" y="700" fill="#edf3ef" font-family="Arial, Helvetica, sans-serif" font-size="25">Storefront and catalogue tools</text>
  <text x="78" y="742" fill="#edf3ef" font-family="Arial, Helvetica, sans-serif" font-size="25">One-to-one consultation</text>
  <rect x="78" y="806" width="276" height="68" rx="34" fill="#ffffff"/>
  <text x="216" y="849" text-anchor="middle" fill="#0a312c" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" letter-spacing="1.5">APPLY FOR REVIEW</text>
  <text x="78" y="1218" fill="#f5f1e8" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="2.5">INDEPENDENT PARTNER PROGRAM</text>
  <text x="78" y="1252" fill="#d6dfda" font-family="Arial, Helvetica, sans-serif" font-size="16">Reviewed access. No income guarantees.</text>
</svg>`);

async function main() {
  const logoPng = await sharp(logo)
    .resize({ width: 250, fit: "inside" })
    .png()
    .toBuffer();

  await sharp(background)
    .resize(width, height, { fit: "cover" })
    .composite([
      { input: overlay, left: 0, top: 0 },
      { input: logoPng, left: 78, top: 82 },
    ])
    .png({ quality: 95 })
    .toFile(output);

  console.log(output);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
