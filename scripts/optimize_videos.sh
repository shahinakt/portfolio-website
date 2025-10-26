#!/usr/bin/env bash
# Optimize all mp4 files in ./public by
# 1) ensuring 'faststart' (moov atom at front)
# 2) generating a tiny 1-2s low-res WebM preview for faster perceived startup
# Usage: bash ./scripts/optimize_videos.sh

set -euo pipefail

PUBLIC_DIR="./public"
OUT_DIR="./public/optimized"
PREVIEW_DIR="./public/previews"

mkdir -p "$OUT_DIR"
mkdir -p "$PREVIEW_DIR"

shopt -s nullglob

# Iterate over mp4 files in public (non-recursive)
for f in "$PUBLIC_DIR"/*.mp4; do
  filename=$(basename "$f")
  echo "Processing: $filename"

  # 1) Faststart optimized output path
  out="$OUT_DIR/$filename"
  if [ -f "$out" ]; then
    echo "  Skipping faststart, optimized file exists: $out"
  else
    echo "  Running ffmpeg faststart -> $out"
    # Copy video with moov atom moved to front (faststart)
    ffmpeg -y -i "$f" -c copy -movflags +faststart "$out"
  fi

  # 2) Generate 2s low-res webm preview
  preview_name="${filename%.*}-preview.webm"
  preview_path="$PREVIEW_DIR/$preview_name"
  if [ -f "$preview_path" ]; then
    echo "  Preview exists: $preview_path"
  else
    echo "  Generating preview -> $preview_path"
    # 240p, 2 seconds, VP9 (good compression) -- adjust CRF as needed
    ffmpeg -y -i "$f" -ss 0 -t 2 -vf scale=426:-2 -c:v libvpx-vp9 -crf 32 -b:v 0 -an "$preview_path"
  fi

done

cat <<'EOF'
Done. Files written to:
 - faststart-optimized MP4s: ./public/optimized/
 - low-res previews: ./public/previews/

Next steps:
 - Inspect optimized files and, if satisfied, replace originals in ./public/ with files from ./public/optimized/
 - Update your project entries in components/Projects.tsx to reference preview files (e.g. preview: '/previews/xyz-preview.webm') for faster perceived startup.
 - Commit the optimized files (consider using Git LFS for large binaries) or host them on a CDN.
EOF
