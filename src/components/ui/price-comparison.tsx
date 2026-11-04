import { COMPARISON_NOTE, comparisonRows } from "@/lib/content/compare-prices";

/** The whole bill, dispatch fee included, next to another company's published rates. */
export function PriceComparison() {
  const rows = comparisonRows();
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">What the job really comes to</h2>
      <p className="mt-3 text-base leading-relaxed text-ink-700">
        A low number in an ad is only part of a bill. Here is the whole of it for the same jobs, dispatch fee included.
      </p>
      <div className="mt-5 overflow-hidden rounded-2xl border border-ink-950/10 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-ink-950 text-white">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Job</th>
              <th scope="col" className="px-4 py-3 font-semibold sm:px-5">TRA total</th>
              <th scope="col" className="px-4 py-3 font-semibold sm:px-5">Another DFW mobile company</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-950/8">
            {rows.map((row) => (
              <tr key={row.label}>
                <th scope="row" className="px-4 py-3 font-medium text-ink-900 sm:px-5">{row.label}</th>
                <td className="px-4 py-3 font-display text-base font-bold text-red-600 sm:px-5">{row.ours}</td>
                <td className="px-4 py-3 text-ink-600 sm:px-5">{row.theirs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-ink-500">{COMPARISON_NOTE}</p>
    </div>
  );
}
