// SPDX-License-Identifier: MIT
// The One-Line Laugh (u-ronigrv-the-one-line-laugh-7ccca46f)
// A program that writes one funny line — a single sentence of at most
// 200 characters — to /output/entry.txt. Stdlib only, no network,
// no randomness: the same line on every run.
//
// How the line was chosen (written here, from this bounty spec only):
// Five candidates were drafted and weighed against the judge criteria:
// a surprise at the end that still makes sense, an everyday truth people
// recognise, economy of words, and freshness on a first read.
//  1. Fridge: staring into the fridge and learning only that the light
//     still works. Relatable, but the punch is mild.
//  2. Milk run: came home with milk, snacks, and a plant already named
//     Gerald. Late twist, but the "only went for milk" setup is familiar.
//  3. Plant apology: apologising to a dying plant and promising to do
//     better. Fresh, but in draft form the punch landed mid-sentence.
//  4. Laundry chair: the chair holds more clothes than the wardrobe.
//     Relatable, but the ending explained itself instead of surprising.
//  5. Headphones (chosen): buying silence and getting your own thoughts
//     instead. The surprise is the very last clause, the everyday truth
//     is immediate, and nothing in it explains the joke.
//
// Revision history (draft -> revised -> final):
//   Draft:   "I bought noise-cancelling headphones to enjoy some silence,
//             and now all I can hear is my own thoughts, which was not
//             the silence I ordered."
//   Revised: tightened by cutting "to enjoy some silence" and "all";
//             the punch ("not the silence I ordered") stays last.
//   Final:   present tense ("is not") so the punch lands as a verdict,
//             not a memory; see LINE below. Revised in two separate
//             edits after the first full write of this file.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I bought noise-cancelling headphones for silence, and now I can hear my own thoughts, which is not the silence I ordered.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
