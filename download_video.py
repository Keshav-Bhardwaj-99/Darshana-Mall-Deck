import requests
import os

video_url = "https://vjs.zencdn.net/v/oceans.mp4"
output_path = "public/assets/hero_video.mp4"

# Create directory if it doesn't exist
os.makedirs(os.path.dirname(output_path), exist_ok=True)

print(f"Downloading video from {video_url}...")
try:
    response = requests.get(video_url, stream=True, timeout=10)
    if response.status_code == 200:
        with open(output_path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print("Video downloaded successfully!")
    else:
        print(f"Failed to download. Status code: {response.status_code}")
except Exception as e:
    print(f"Error occurred: {e}")
