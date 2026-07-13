import { serveMarketingHtml } from "@/lib/marketingHtml";

export function GET() {
  return serveMarketingHtml("packages/index.html");
}
