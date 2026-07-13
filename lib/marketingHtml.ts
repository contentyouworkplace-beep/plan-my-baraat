import { readFile } from "node:fs/promises";
import path from "node:path";

export async function serveMarketingHtml(relativePath: string) {
  const filePath = path.join(process.cwd(), "public", relativePath);
  const html = await readFile(filePath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}
