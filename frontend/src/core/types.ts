interface IUrl {
  small: string;
  medium: string;
}

export interface IPictures {
  id: number;
  albumId: number;
  title: string;
  url: IUrl;
}

export interface IPicturesResponse {
  images: IPictures[];
  photos: IPictures[];
}
