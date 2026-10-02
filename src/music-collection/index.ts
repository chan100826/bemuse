import type { MusicServerIndex } from 'bemuse-types'

export const OFFICIAL_SERVER_URL = 'https://music4.bemuse.ninja/server'

export async function load(
  serverUrl: string,
  { fetch = global.fetch } = {}
): Promise<MusicServerIndex> {
  return { songs: [] }
}

export function getServerIndexFileUrl(serverUrl: string) {
  if (serverUrl.endsWith('/bemuse-song.json')) {
    return serverUrl
  }
  return serverUrl.replace(/\/(?:index\.json)?$/, '') + '/index.json'
}
