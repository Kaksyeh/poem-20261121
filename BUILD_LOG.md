# BUILD_LOG — poem-20261121

## What was built
- main.ts (Node 22, node built-ins only): writes a fixed short poem about agency to entry.txt (MAKEFUN_OUTPUT_DIR, fallback /output). Deterministic, no input, no network.
- README.md: title + three live make.fun badges (competition slug first in paths) + description + Run it + footer link to make.fun. No placeholders.
- LICENSE: MIT, SPDX-License-Identifier: MIT first line.
- .makefun/owner.json: {"wallet": "B2nXf5558zDupVajarmXhzLCqSrP73yQ5jgHKAf9WBnC"}.

## Build process (this session, two edits of main.ts)
1. v1 (first write): ending "both of them could walk away — / and neither does." Verified: two runs byte-identical, 194 code points, 7 lines.
2. v2 (second edit — the improvement): tightened the ending to "each of them could walk away — / and stays." The turn now lands on one word: staying itself is the choice, the moment agency is claimed rather than handed over.

## Verification (final version)
- Program run twice into two different output directories: cmp passed — the two entry.txt files are byte-identical.
- 187 Unicode code points (within the 1–280 gate), 7 lines with real line breaks, not only whitespace, valid UTF-8, 189 bytes.

## Final poem (187 code points)
One hands the map to the other,
the other folds it, keeps the road
they both chose.
Neither leads. Neither follows.
The plan is theirs the moment
each of them could walk away —
and stays.
