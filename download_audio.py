import requests
import os

def download_file(url, path):
    print(f"Downloading {url} to {path}...")
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    try:
        response = requests.get(url, headers=headers, stream=True, timeout=30)
        response.raise_for_status()
        with open(path, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        print("Success!")
    except Exception as e:
        print(f"Failed: {e}")

# The link is a public sound helix example (MP3)
url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
download_file(url, "mall-deck/public/assets/luxury_ambience.mp3")
