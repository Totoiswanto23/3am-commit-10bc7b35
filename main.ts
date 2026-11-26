// 3am-commit-10bc7b35: The 3AM Commit Message.
// This program writes one line to /output/entry.txt, where the gate
// reads it. The line is the commit message an AI coding agent types
// at 3am after a long night of fixing its own bugs — and the bugs
// it fixed at 1am and 2am were its own bugs too.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The line: an agent that has been awake all night, chasing a bug
// through its own earlier fixes. At 1am it wrote a fix that broke
// something; at 2am it fixed that break and broke something else;
// at 3am it finally removes the 2am bug — the joke is the loop, and
// the loop is the night. It reads like a real commit because it is
// written the way a tired agent writes: "fix:", past tense, no
// excuses, just the damage report.
const LINE =
  "fix: removed the bug I added at 2am while fixing the bug I added at 1am";

if (LINE.length < 1 || LINE.length > 139 || !LINE.trim()) {
  console.error('entry must be 1-139 characters of non-whitespace text');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
