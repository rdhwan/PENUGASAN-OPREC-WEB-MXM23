interface Thumbnail {
  source: string;
  width: number;
  height: number;
}

export interface IBiography {
  title: string;
  extract: string;
  thumbnail?: Thumbnail;
}
