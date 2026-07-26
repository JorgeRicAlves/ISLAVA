export type GalleryItemType = 'image' | 'video'

export interface GalleryItem {
  type: GalleryItemType
  file: string
  title_pt: string
  title_en: string
}
