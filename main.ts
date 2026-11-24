import { mkdirSync, writeFileSync } from "node:fs";

// Final line: the machine names its slot, speaks to the human walking
// by, and the drop — its whole job — becomes the punchline.
const ENTRY =
  "B6, that's me. My coil holds me back whenever you walk by. Press me once and I fall for you — and falling is literally my job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
