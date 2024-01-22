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
    id: "https://vision-pd.org/wp-content/uploads/2020/05/Modern-Filistin-Tarihi.jpg",
    source: "https://vision-pd.org",
    width: 790,
    height: 1204,
  },
  {
    id: "https://www.insamer.com/tr/uploads/gallery/infografik-dogu-turkistan-daki-toplama-kamplari_2923.jpg",
    source: "https://www.insamer.com",
    width: 761,
    height: 1204,
  },
  {
    id: "/img/turkistan-1941-1996-demografik-asimilasyonu.jpg",
    source:
      "https://www.facebook.com/ihhinsaniyardim/photos/a.370299055228/10158181187325229/",
    width: 1403,
    height: 1204,
  },
  {
    id: "https://www.mepanews.com/d/other/dogu-turkistan-info.jpg",
    source:
      "https://www.mepanews.com/ramazanda-her-gune-bir-musluman-cografyasi-dogu-turkistan-59182h.htm",
    width: 1080,
    height: 1080,
  },
  {
    id: "/img/kirim-tatar-surgunu.jpg",
    source:
      "https://www.facebook.com/yurtdisiturkler/photos/a.561701467236799/2736778323062425/",
    width: 903,
    height: 1204,
  },
  {
    id: "https://img.piri.net/mnresize/900/-/resim/upload/2023/04/20/64e6aa08gztdoc49futc3bcrkistanbayrampost.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/dogu-turkistanda-bayram-nasil-geciyor-24159",
    width: 900,
    height: 900,
  },
  {
    id: "https://img.piri.net/mnresize/1200/-/resim/upload/2022/06/19/e2b2f1011.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/gzt-surec-dogu-turkistanda-neler-oldu-10989",
    width: 1200,
    height: 1200,
  },
  {
    id: "https://img.piri.net/mnresize/1200/-/resim/upload/2022/06/19/cd8d3b132.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/gzt-surec-dogu-turkistanda-neler-oldu-10989",
    width: 1200,
    height: 1200,
  },
  {
    id: "https://img.piri.net/mnresize/1200/-/resim/upload/2022/06/19/eef81e113.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/gzt-surec-dogu-turkistanda-neler-oldu-10989",
    width: 1200,
    height: 1200,
  },
  {
    id: "https://img.piri.net/mnresize/1200/-/resim/upload/2022/06/19/8282f0624.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/gzt-surec-dogu-turkistanda-neler-oldu-10989",
    width: 1200,
    height: 1200,
  },
  {
    id: "https://img.piri.net/mnresize/1200/-/resim/upload/2022/06/19/c1e029645.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/gzt-surec-dogu-turkistanda-neler-oldu-10989",
    width: 1200,
    height: 1200,
  },
  {
    id: "https://img.piri.net/mnresize/1200/-/resim/upload/2022/06/19/c71721826.jpg",
    source:
      "https://www.gzt.com/infografik/jurnalist/gzt-surec-dogu-turkistanda-neler-oldu-10989",
    width: 1200,
    height: 1200,
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
