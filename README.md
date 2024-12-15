# lyre

## Roadmap
- [x] install script to download latest binaries
- [ ] additional args (If you're using any additional args you should probably use the cli)

## Progress Bar
The way yt-dlp downloads the videos makes it rather difficult to display a progress bar. Because it downloads the video and audio separately, it emits different progress statuses for them. This is why this app and most apps display the raw output instead.

## Build From Source
1. Install [bun](https://bun.sh/docs/installation)
2. run `bun bootstrap` to download binaries
3. run `bun i`
4. run `bun tauri build --bundles <platform>`. Executable should be in `src-tauri/target/` and installer should be in `src-tauri/target/bundle/`.. For more info, visit the Tauri [docs](https://v2.tauri.app/distribute/)