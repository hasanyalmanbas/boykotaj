import { Slider } from "@nextui-org/react";
import {
  GenericSlide,
  ImageFit,
  ImageSource,
  Slide,
  SlideImage,
} from "yet-another-react-lightbox";

const unsplashPhotos = [
  {
    id: "https://www.mepanews.com/d/other/filistingazzegruplar.jpg",
    source:
      "https://www.mepanews.com/infografik-gazzede-faaliyet-gosteren-silahli-gruplar-31701h.htm",
    width: 1045,
    height: 860,
  },
  {
    id: "https://pbs.twimg.com/media/Ce0L3IhW8AA5XY1.jpg",
    source: "https://twitter.com/anadoluajansi/status/715240957797642241",
    width: 724,
    height: 859,
  },
  {
    id: "https://cdnuploads.aa.com.tr/uploads/userFiles/4164aa16-2a0e-4a00-98ad-deb5a750816b/2019%2FHAZIRANN%2FFILISTINN_.jpg",
    source: "https://www.aa.com.tr/tr/info/infografik/14720",
    width: 572,
    height: 860,
  },
  {
    id: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2162000/2162722.jpg",
    source:
      "https://www.trthaber.com/infografik/filistin-direnisinin-sembolleri-240.html",
    width: 688,
    height: 860,
  },
  {
    id: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2162000/2162723.jpg",
    source:
      "https://www.trthaber.com/infografik/filistin-direnisinin-sembolleri-240.html",
    width: 688,
    height: 860,
  },
  {
    id: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2162000/2162724.jpg",
    source:
      "https://www.trthaber.com/infografik/filistin-direnisinin-sembolleri-240.html",
    width: 688,
    height: 860,
  },
  {
    id: "https://cdnuploads.aa.com.tr/uploads/InfoGraphic/2023/10/17/d7571f5aa67f30a1bb59e463444969e4.jpg",
    source: "https://www.aa.com.tr/tr/info/infografik/36325",
    width: 789,
    height: 860,
  },
  {
    id: "https://pbs.twimg.com/media/C69WG3tWkAAqSoB?format=jpg&name=medium",
    source:
      "https://twitter.com/anadoluajansi/status/841986334260658177/photo/1",
    width: 1053,
    height: 860,
  },
  {
    id: "https://www.insamer.com/tr/uploads/gallery/infografik-filistin-in-5-meselesi_2046.jpg",
    source: "https://insamer.com/tr/filistinin-5-meselesi_2046.html",
    width: 543,
    height: 860,
  },
  {
    id: "https://cdnuploads.aa.com.tr/uploads/InfoGraphic/2019/05/15/58e4bf3d8ab0263637d14c7a621421d6.jpg",
    source: "https://www.aa.com.tr/tr/info/infografik/14350",
    width: 507,
    height: 860,
  },
  {
    id: "https://cms.dijitalhafiza.com/wp-content/uploads/2022/03/Filistinde-ekonomik-gostergeler.jpg",
    source:
      "https://dijitalhafiza.com/infografikler/filistinde-ekonomik-gostergeler-alarm-veriyor-2",
    width: 602,
    height: 860,
  },
];

export const filistin_slides = unsplashPhotos.map((photo) => {
  const width = photo.width * 4;
  const height = photo.height * 4;

  return {
    src: photo.id,
    source: photo.source,
    width,
    height,
  };
});

export class DenemeSlide implements GenericSlide {
  type?: "image";
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  imageFit?: ImageFit;
  srcSet?: ImageSource[];
  source?: string;
}

export class CustomSlide implements GenericSlide {
  constructor(source: string, src: string, width: number, height: number) {}

  /** image slide type */
  type?: "image";
  /** image URL */
  src?: string;
  /** image 'alt' attribute */
  alt?: string;
  /** image width in pixels */
  width?: number;
  /** image height in pixels */
  height?: number;
  /** `object-fit` setting */
  imageFit?: ImageFit;
  /** alternative images to be passed to the 'srcSet' */
  srcSet?: ImageSource[];
  source?: string;
}

export default filistin_slides;
