// This entry writes the answer for A funny out-of-office reply to the output directory,
// producing /output/entry.txt so the make.fun harness can collect the submitted text.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const answer = 'Back Monday. Emails sent while I was away have been answered by a version of me with considerably less patience.';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`${answer.length} characters written to ${join(out, 'entry.txt')}`);
