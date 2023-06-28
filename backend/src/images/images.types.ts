export interface IImages {
  albumId: number;
  id: number;
  title: string;
  path: string;
}

export interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export enum ImageSize {
  SMALL = 150,
  MEDIUM = 600,
}
