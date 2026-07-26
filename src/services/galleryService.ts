import type { GalleryItem } from '../types/gallery'

export async function fetchGalleryItems(): Promise<GalleryItem[]> {
  const response = await fetch('/gallery/gallery.json')

  if (!response.ok) {
    throw new Error('Failed to load gallery')
  }

  return response.json() as Promise<GalleryItem[]>
}

export function getGalleryMediaUrl(item: GalleryItem): string {
  const folder = item.type === 'video' ? 'videos' : 'images'
  return `/gallery/${folder}/${item.file}`
}
