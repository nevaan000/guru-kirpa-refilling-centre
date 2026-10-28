import type { Cartridge } from "@/data/cartridges";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9\u0900-\u097F]+/g, " ")
    .trim();
}

/**
 * Every token in the query must appear in the cartridge's searchable text.
 * A compact haystack catches codes typed without spaces (e.g. "TN2365").
 */
export function searchCartridges(items: Cartridge[], query: string): Cartridge[] {
  const tokens = normalize(query).split(" ").filter(Boolean);
  if (tokens.length === 0) return [];

  return items.filter((item) => {
    const haystack = normalize(
      [
        item.brand,
        item.name,
        item.code,
        item.type,
        ...item.printerModels,
      ].join(" "),
    );
    const compact = haystack.replace(/ /g, "");

    return tokens.every(
      (token) => haystack.includes(token) || compact.includes(token.replace(/ /g, "")),
    );
  });
}
