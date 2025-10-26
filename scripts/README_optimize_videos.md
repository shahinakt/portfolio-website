Optimize videos for faster playback

This folder contains a helper shell script to optimize your MP4 demo videos and generate tiny low-resolution previews to improve perceived startup time.

Why this helps
- `-movflags +faststart` moves the MP4 moov atom to the front of the file. This allows streaming playback to start before the full file downloads.
- Low-res previews (1–2s, WebM) load quickly and give the illusion of instant playback; we swap to the full video on user interaction.

Requirements
- ffmpeg installed and available in PATH.
- bash (Windows: Git Bash or WSL is fine).

Usage
```bash
# Run optimize script (creates ./public/optimized and ./public/previews)
npm run optimize:videos
```

What the script does
- Iterates over `./public/*.mp4`.
- For each file:
  - Writes an optimized copy to `./public/optimized/<name>.mp4` with `-movflags +faststart`.
  - Generates a 2s 240p WebM preview at `./public/previews/<name>-preview.webm`.

Post-processing
- Inspect the optimized files. If happy, replace the originals in `./public` with the optimized files (or upload them to your CDN/provider).
- Update the `projects` entries in `components/Projects.tsx` to include a `preview` field that points to the preview, e.g. `preview: '/previews/pr-preview.webm'`.
- Commit large binaries with Git LFS or host them externally (recommended for large sites).

Notes
- The script is conservative: optimized files are written to `./public/optimized/` so you can review before replacing originals.
- Adjust CRF/preset in the ffmpeg commands if you want higher quality or smaller size.
