export interface KeywordTagItem {
  label: string;
}

interface KeywordTagBlockProps {
  title: string;
  summary: string;
  items: KeywordTagItem[];
}

export default function KeywordTagBlock({
  title,
  summary,
  items,
}: KeywordTagBlockProps) {
  return (
    <details className="group rounded-[24px] border border-stone-200 bg-[#F8F4EE] p-5 shadow-sm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-950">{title}</h3>
          <p className="mt-1 text-sm text-stone-600">{summary}</p>
        </div>
        <span className="rounded-full border border-stone-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 transition group-open:border-stone-900 group-open:text-stone-950">
          View All
        </span>
      </summary>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={`${title}-${item.label}-${i}`}
            className="rounded-full border border-stone-300 px-3 py-2 text-sm font-medium text-stone-500"
          >
            {item.label}
          </span>
        ))}
      </div>
    </details>
  );
}
