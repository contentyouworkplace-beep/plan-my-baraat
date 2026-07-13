import { serveMarketingHtml } from "@/lib/marketingHtml";

export function GET() {
  return serveMarketingHtml("baraat-management/index.html");
}
