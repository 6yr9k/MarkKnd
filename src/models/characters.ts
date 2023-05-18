export interface Characters {
  url?: string;
  images?: Images;
  name?: string;
  name_kanji?: string;
  nicknames?: string[];
  about?: string;
}

type Images = {
  jpg: {
    image_url: string;
    small_image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
  };
};
