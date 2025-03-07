export interface IProduct {
  image_url: string;
  _id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  attenuation_level: number;
  brewers_tips: string;
  contributed_by: string;
  expireAt: string;
  __v: number;
}

export interface IBlog {
  img: string;
  description: string;
  path: string;
  buttonText: string;
}

export interface IProps {
  buttonText: string;
  product?: IProduct;
}
