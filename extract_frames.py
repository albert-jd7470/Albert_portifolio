import cv2
import os

def extract_frames(video_path, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error: Could not open video {video_path}")
        return

    # Get video properties
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    duration = total_frames / fps if fps > 0 else 0
    aspect_ratio = width / height if height > 0 else 0

    print("=== Video Information ===")
    print(f"Width: {width}")
    print(f"Height: {height}")
    print(f"FPS: {fps:.2f}")
    print(f"Total Frames: {total_frames}")
    print(f"Duration: {duration:.2f} seconds")
    print(f"Aspect Ratio: {aspect_ratio:.4f}")

    if total_frames < 64:
        print("Error: Video has fewer than 64 frames. Cannot extract.")
        return

    print("\nExtracting 64 directional frames...")
    
    # Extract 64 frames
    # index = round(i * (total_frames - 1) / 63) for i = 0 to 63
    for i in range(64):
        target_frame_idx = round(i * (total_frames - 1) / 63)
        cap.set(cv2.CAP_PROP_POS_FRAMES, target_frame_idx)
        ret, frame = cap.read()
        if ret:
            out_path = os.path.join(output_dir, f"frame_{i:03d}.webp")
            cv2.imwrite(out_path, frame, [cv2.IMWRITE_WEBP_QUALITY, 90])
            print(f"Saved {out_path} (from video frame {target_frame_idx})")
        else:
            print(f"Error reading frame {target_frame_idx}")

    # For center.webp, we don't know which one looks center initially. Let's extract frame 0 as center.webp for now,
    # but the user said "Inspect the extracted video frames and choose the appropriate center-facing frame".
    # I will extract all 64, then look at some frames or assume frame 0 or frame 32 is center, then refine if needed.
    
    cap.release()
    print("Done extracting directional frames.")

if __name__ == '__main__':
    extract_frames('public/character.mp4', 'public/frames')
