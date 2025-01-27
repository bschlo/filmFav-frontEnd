#!/bin/bash

# Define the input and output directories
input_dir="public/videos"
output_dir="public/videos/compressed"

# Create the output directory if it doesn't exist
mkdir -p "$output_dir"

# Loop through all .mp4 files in the input directory
for video in "$input_dir"/*.mp4; do
  # Get the base name of the file
  base_name=$(basename "$video")
  output_file="$output_dir/$base_name"

  echo "Compressing $video to $output_file"

  # Compress the video using FFmpeg
  ffmpeg -i "$video" -vcodec libx264 -crf 28 "$output_file"
done

echo "Video compression completed!"

