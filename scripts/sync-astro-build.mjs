import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const astroDistDir = path.join(rootDir, "astro-site", "dist");
const publicDir = path.join(rootDir, "public");
const manifestPath = path.join(publicDir, ".astro-marketing-manifest.json");

if (!existsSync(astroDistDir)) {
  throw new Error(`Astro dist not found at ${astroDistDir}`);
}

mkdirSync(publicDir, { recursive: true });

if (existsSync(manifestPath)) {
  const previous = JSON.parse(readFileSync(manifestPath, "utf8"));

  for (const relativePath of previous.paths ?? []) {
    rmSync(path.join(publicDir, relativePath), { recursive: true, force: true });
  }
}

const entries = readdirSync(astroDistDir)
  .filter((entry) => !entry.startsWith("."))
  .filter((entry) => {
    const absolutePath = path.join(astroDistDir, entry);
    if (statSync(absolutePath).isDirectory()) {
      return true;
    }

    return /\.(html|txt|xml|ico|svg|png)$/.test(entry);
  });

for (const entry of entries) {
  cpSync(path.join(astroDistDir, entry), path.join(publicDir, entry), {
    recursive: true,
    force: true,
  });
}

writeFileSync(
  manifestPath,
  `${JSON.stringify({ paths: [...new Set(entries)] }, null, 2)}\n`,
  "utf8"
);
