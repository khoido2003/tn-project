import { Manufacturer } from './manufacturer';

export interface IProduct {
  _id: string;
  name: string;
  star: number;
  reviewNum: number;
  idProduct: string;
  dateActivated: Date;
  startDate: Date;
  endDate: Date;
  qualityInsurance: [
    {
      imgUrl: string;
    }
  ];
  carouselImg: [
    {
      imgUrl: string;
    }
  ];
  slug: string;
  previewImg: string;
  manufacturerId: Manufacturer;
}
