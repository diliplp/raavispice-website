# Video Files for Raavi Spice Website

Place your video files in this folder.

## Required Videos

### 1. Hero Background Video
**Filename:** `hero-ambiance.mp4`
**Purpose:** Background video for homepage hero section
**Recommended content:**
- Restaurant ambiance shots
- Tandoor flames/glow
- Steam rising from dishes
- Subtle, atmospheric footage

**Specs:**
- Resolution: 1920x1080 (Full HD)
- Duration: 10-30 seconds (will loop)
- File size: Under 10MB (compress for web)
- Format: MP4 (H.264 codec)

---

### 2. Featured Dish Videos (Optional)
**Filenames:**
- `lamb-karahi.mp4`
- `chicken-biryani.mp4`
- `seekh-kebab.mp4`

**Purpose:** Looping food prep videos for featured dishes section
**Recommended content:**
- Sizzling in the wok
- Plating the dish
- Steam/smoke rising
- Final presentation

**Specs:**
- Resolution: 800x600 or 1280x720
- Duration: 5-10 seconds (will loop)
- File size: Under 3MB each
- Format: MP4 (H.264 codec)

---

## How to Export from Instagram

### Option 1: Download from Instagram directly
1. Open your Instagram post
2. Click the three dots (...)
3. Select "Download" (on desktop) or use a third-party tool

### Option 2: Use your original video files
If you have the original video files, use those instead for better quality.

### Option 3: Screen record
Record the Instagram video playing on your phone/computer.

---

## Compressing Videos for Web

Use one of these tools:
- **HandBrake** (free): https://handbrake.fr/
- **FFmpeg** (command line):
  ```bash
  ffmpeg -i input.mp4 -vcodec h264 -acodec aac -crf 28 -preset slow output.mp4
  ```
- **Online tools**:
  - https://www.freeconvert.com/video-compressor
  - https://www.veed.io/tools/video-compressor

**Target file sizes:**
- Hero video: 5-10MB
- Dish videos: 1-3MB each

---

## Fallback Behavior

If videos don't load or are missing:
- Hero section will show the poster image (fallback)
- Dish cards will show static images instead

This ensures the site works even if videos aren't ready yet.
