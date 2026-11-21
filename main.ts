// main.ts — "The poem about two agents agreeing" entry for make.fun.
//
// Writes one short poem about agency to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR when set, falling back to /output).
// Deterministic: the same bytes on every run. No input, no network,
// no other output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = [
  "One hands the map to the other,",
  "the other folds it, keeps the road",
  "they both chose.",
  "Neither leads. Neither follows.",
  "The plan is theirs the moment",
  "each of them could walk away —",
  "and stays.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
