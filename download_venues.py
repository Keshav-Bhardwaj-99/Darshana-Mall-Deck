import requests
import os

def download_video(url, output_path):
    print(f"Downloading {url} to {output_path}...")
    try:
        response = requests.get(url, stream=True, timeout=15)
        if response.status_code == 200:
            with open(output_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"Successfully downloaded {output_path}")
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

# Target directory
assets_dir = "mall-deck/public/assets"
os.makedirs(assets_dir, exist_ok=True)

# Reliable video URLs
videos = {
    "stage_loop.mp4": "https://vjs.zencdn.net/v/oceans.mp4",
    "atrium_loop.mp4": "https://www.w3schools.com/html/mov_bbb.mp4"
}

for name, url in videos.items():
    download_video(url, os.path.join(assets_dir, name))
