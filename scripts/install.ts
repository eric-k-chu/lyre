import { createWriteStream, existsSync, mkdirSync } from 'node:fs'
import { pipeline } from 'node:stream/promises'

console.log('Downloading binaries...')

const linux = install('linux')
const macos = install('macos')
const windows = install('windows')

await Promise.all([linux, macos, windows])

console.log('Finished downloading binaries.')

type Platform = 'linux' | 'macos' | 'windows'

async function install(platform: Platform): Promise<void> {
  try {
    if (!existsSync('src-tauri/binaries')) {
      mkdirSync('src-tauri/binaries', { recursive: true })
    }

    const filename = getFilename(platform)

    const response = await fetch(getUrl(platform))
    if (!response.ok || !response.body) {
      throw new Error(`Failed to download yt-dlp for ${platform}`)
    }

    const fs = createWriteStream(`src-tauri/binaries/${filename}`, { mode: 0o755 })

    await pipeline(response.body, fs)
    console.log(`yt-dlp for ${platform} downloaded successfully`)
  } catch (e) {
    console.error(e)
  }
}

function getFilename(platform: Platform): string {
  switch (platform) {
    case 'linux':
      return 'yt-dlp-x86_64-unknown-linux-gnu'
    case 'macos':
      return 'yt-dlp-x86_64-apple-darwin'
    case 'windows':
      return 'yt-dlp-x86_64-pc-windows-msvc.exe'
    default:
      throw new Error('Invalid platform')
  }
}

function getUrl(platform: Platform): string {
  const base = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/'
  switch (platform) {
    case 'linux':
      return `${base}yt-dlp`
    case 'macos':
      return `${base}yt-dlp_macos`
    case 'windows':
      return `${base}yt-dlp.exe`
    default:
      throw new Error('Invalid platform')
  }
}
