'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React, { useEffect, useRef, useState } from 'react'
import { MotionValue, motion, useScroll, useSpring, useTransform } from "framer-motion"
import StatusTimelineCardRight from '@/components/status_timeline_card_right';
import MapStatus from '@/components/map_status';
import StatusTimelineCardLeft from '@/components/status_timeline_card_left';
import { Headline, TimelineData } from '@/models/timeline_data';
import ContentContainer from '@/components/content_container';
import AnimatedContentContainer from '@/components/animated_content_container';
import { AnimatedText } from '@/components/animated_text';
import TurkistanHeadlineContainer from '@/components/special/turkistan/turkistan_headline_container';
import TurkistanPapersContainer from '@/components/special/turkistan/turkistan_papers_container';
import ImageGalleryContainer from '@/components/image_gallery_container';
import { Slide, SlideImage } from 'yet-another-react-lightbox';
import turkistan_slides from '@/data/turkistan_slide_data';



const descriptionParagraphs: string[] = [
  `Mao dönemi ile başlayan Çin toplumunu topyekûn dönüştürmeyi amaçlayan politikalar Doğu Türkistan'da sert bir şekilde uygulanmaktadır. Başörtüsü, sakal, dinî kitap 'aşırılık' olarak değerlendirilerek yurt dışına gönderilen bir mesaj bile hapis ve aylarca sürecek işkence nedeni olmaktadır. Çinli Komünistlerin tek hâkim kültür olmak istemesinden kaynaklanan bu baskı ve asimilasyon hareketi yerel dillerin, kültürlerin yok edilmesine, dinî inanç ve ibadetlerin yasaklanmasına, din adamlarının saldırıya uğramasına kadar gitti.`,
  `Doğu Türkistan gerçeği, dünyanın ve Türkiye’nin görmezden geldiği, görmezden gelinmese de siyasi çıkarlar uğruna feda edilen bir gerçek. Dinî, millî ve kültürel köklerinden kopartılmak istenen ve gözlerini açtığı andan itibaren “Sincanlı” olduğuna inandırılmaya çalışılan bir tutsaklar ülkesi Doğu Türkistan.Doğu Türkistanlılar şimdi Kur’an okuduklarında dayak yiyor, Kur’an öğrenmek istediklerinde hapse giriyorlar. Daha doğmadan yasaklarla karşılaşıyor; eğer devlet tarafından “fazlalık” olarak addedilirlerse annelerinin karınlarından zorla çıkartılıp öldürülüyorlar. Kendi dillerini, tarihlerini öğrenme hakları yok. İstedikleri üniversiteye girmek, istedikleri işte çalışmak onlar için hayalden de öte. Hayatlarının her aşamasında kimlikleri soruluyor onlara; aidiyetleri sorgulanıyor. Üstelik sorgulanmakla da kalmıyor, kendilerinden çalınıp yerine bir başkası konmaya çalışılıyor.Suçları bir hak talep etmekse bunun bedelini fazlasıyla ödüyorlar. Hesapsızca işkence görüyor, hapislerde ölüme terk ediliyorlar. Hapis hayatından ve dolayısıyla işkenceden evlerine dönenlerse normal hayatlarına bir daha asla dönemiyorlar. Çünkü artık ya psikolojik sorunlarla ya da fiziksel bir rahatsızlıkla yaşamak zorunda kalıyorlar…Çin Halk Cumhuriyeti, Doğu Türkistan’ı hâkimiyeti altına alıp bölgeyi “Sincan” (Kazanılmış Topraklar) olarak adlandırdığı tarihten bu yana, Doğu Türkistanlılara yönelik etnik temizlik ve asimilasyon politikası uygulamaktadır. Nitekim Çin Halk Cumhuriyeti’nin kuruluşundan bu yana 35 milyon Doğu Türkistanlı katledilmiştir Yıllardır Çin zulmü altında olan Doğu Türkistan, Çin, Tibet, Keşmir, Pakistan, Afganistan, Tacikistan, Kırgızistan, Kazakistan, Moğolistan ve Rusya ile sınırı olan, 1.828.418 km2 toprağa sahip bir ülkedir. Zengin yeraltı kaynakları ve stratejik konumu ile Doğu Türkistan, Çin’in siyasi ve ekonomik olarak kendi nüfuzu altına almaya çalıştığı bir bölgedir.`,
]

const headlines: Headline[] =
  [
    {
      image: "/img/dogu-turkistan-1987.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-1987"
    },
    {
      image: "/img/dogu-turkistan-1988.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-1988"
    },
    {
      image: "/img/dogu-turkistan-1990.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-1990"
    },
    {
      image: "/img/dogu-turkistan-1992.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-1992"
    },
    {
      image: "/img/dogu-turkistan-1994.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-1994"
    },
    {
      image: "/img/dogu-turkistan-uzerine-rapor.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-uzerine-rapor"
    },
    {
      image: "/img/dogu-turkistan-sesi-2006.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistan-sesi-2006"
    },
    {
      image: "/img/rapor-dogu-turkistan-raporu-gecmisten-bugune-dini-ve-etnik-baskilar.jpg",
      source: "https://www.insamer.com/tr/dogu-turkistan-raporu-gecmisten-bugune-dini-ve-etnik-baskilar_3059.html"
    },
    {
      image: "/img/dogu-turkistanin-hurriyet-davasi-ve-cin-siyaseti.jpg",
      source: "https://turkistanilibrary.com/tr/content/dogu-turkistanin-hurriyet-davasi-ve-cin-siyaseti"
    },
  ]


const listTimeline: TimelineData[] = [
  {
    date: `13.05.2021`,
    title: `Çin, Doğu Türkistan Nüfus İstatistiklerini yayınladı`,
    description: `Çin Nüfus istatistik kurumu, 11 Mayıs'ta 7. Nöbetli Çin Nüfus Sayımı sonuçlarını açıkladı. Çinli yetkililer her on yılda bir kapsamlı nüfus sayımı yapıyor ve sonuçlar, Çin'in toplam nüfusunun 1.41178 milyara ulaştığını ve dünya nüfusunun% 18'ini oluşturduğunu gösteriyor. Bilgilere göre Çin’in ortalama yaş gurubu 38,8 olduğu 15 ile 58 yaşları arasında 894 milyondan fazla insanın var olduğu ve işgücünün yeteri kadar olduğu öne sürülüyor.`,
    source: `https://turkistanpress.com/page/cin-dogu-turkistan-nufus-istatistiklerini-yayinladi/3171`,
    image: `https://static.daktilo.com/sites/71/uploads/2022/09/13/dogu-turkistanda-zulum-suruyor.jpeg`
  },
  {
    date: `13.05.2021`,
    title: ``,
    description: `Müslüman Uygur Türklerini kamplarda topladığı yönündeki suçlamaları reddeden Pekin, Doğu Türkistan genelinde inşa edilen söz konusu yapıları, dünyaya "eğitim merkezi", "rehabilitasyon merkezi" ya da "mesleki eğitim merkezi" olarak lanse ediyor. Reuters ekibi kamplardan 7'sini ziyaret etmek istedi. Etrafı kalın duvarlarla çevrili kamplarda güvenlik kulübesinden gözetleme kulelerine ve dikenli tellere her şey mevcut. Çin yönetimi, kampların mesleki eğitim merkezi olduğunu iddia ediyor.`,
    source: `https://turkistanpress.com/page/cin-dogu-turkistan-nufus-istatistiklerini-yayinladi/3171`,
    image: `https://tgsp.org.tr/tr/frontend/storage/blogs/dogu-turkistan-icin-eller-duaya-kalkti-ca0f60c.jpeg`
  },
  {
    date: `13.05.2021`,
    title: ``,
    description: `Doğu Türkistan genelinde on binlerce kişi hükümet tarafından işe alındı. Komünist Parti'ye yakın kişiler, halkın arasına giriyor, istihbarat topluyor ve şüpheli gördükleri kişileri güvenlik görevlilerine bildiriyor. Geçmişte okul, hastane ya da kamu binası olarak hizmet veren bir çok bina da küçük kamplara dönüştürüldü. Çin'in Doğu Türkistanlıları tuttuğu ve ülkeden kaçan Uygurların ifadesiyle işkence gördükleri kampların sayısı net olarak bilinmiyor.`,
    source: `https://turkistanpress.com/page/cin-dogu-turkistan-nufus-istatistiklerini-yayinladi/3171`,
    image: `https://ordaf.org/wp-content/uploads/2021/02/china-uyghur.jpg`
  },
  {
    date: `13.05.2021`,
    title: `BM: Çölün ortasında, hiçbir hakkın bulunmadığı merkezler`,
    description: `Birleşmiş Milletler Irk Ayrımcılığının Ortadan Kaldırılması Komitesi Çin'i, Türkistan'ı hiçbir insan hakkın bulunmadığı kitlesel toplama kampına dönüştürmekle suçluyor. Eartrise Media isimli sivil toplum kuruluşunun, 39 toplama kampı üzerinde yaptığı uydu görüntüsü analizi, bu kampların hacminin nisan 2017 ile ağustos 2018 arasında 3 kat daha büyüdüğünü ortaya koyuyor. 39 kampın kapladığı alan ise kabaca 140 futbol sahası büyüklüğünde.`,
    source: `https://turkistanpress.com/page/cin-dogu-turkistan-nufus-istatistiklerini-yayinladi/3171`,
    image: `https://habererkcom.teimg.com/crop/1280x720/habererk-com/uploads/2022/11/cin-dogu-tirkistan.jpg`
  },
]

export default function DoguTurkistanPage() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.00001
  });

  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className='container m-8 mx-auto flex flex-col justify-center items-center gap-y-8'>

        <ContentContainer>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl my-4">
              {/* <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md"> */}

              <motion.span
                className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md"
                initial={{
                  opacity: 0,
                  // if odd index card,slide from right instead of left
                  x: 0 % 2 === 0 ? 50 : -50
                }}
                whileInView={{

                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                    delay: 0,
                  }
                }}
                viewport={{ once: true }}
              >
                {`Doğu Türkistan`}
              </motion.span>

              <AnimatedText
                once={true}
                firstDelay={0.5}
                /*  text={`Doğu Türkistan`} */
                text={[
                  "Çin'e terkedilmiş bir kader",
                ]}
              />
              {/*  </span> */}
            </h2>
            {/* <p className="text-lg leading-8">
              {`Çin'e terkedilmiş bir kader: `}
              <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
                {`Doğu Türkistan`}
              </span>
            </p> */}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: 0 % 2 === 0 ? 50 : -50
            }}
            whileInView={{

              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
                delay: 1,
              }
            }}
            viewport={{ once: true }}
          >
            <Image
              src='/img/dogu-turkistan-banner.jpg'
              alt=''
              width={700}
              className="my-8"
            />
          </motion.div>

          <div className="text-center space-y-4 mt-8">
            <motion.p
              className="text-medium leading-8 "
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: -100
              }}
              whileInView={{

                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                  delay: 1.25,
                }
              }}
              viewport={{ once: true }}

            >
              {
                descriptionParagraphs[0]
              }
            </motion.p>
          </div>
        </ContentContainer>

        <ContentContainer>
          <Table
            isStriped
            hideHeader
            aria-label="Example static collection table"
            className='w-fit mx-auto'
          >
            <TableHeader>
              <TableColumn>
                Key
              </TableColumn>
              <TableColumn>
                Value
              </TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  Başkent
                </TableCell>
                <TableCell>
                  <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
                    {`Urumçi`}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  Yüzölçümü
                </TableCell>
                <TableCell>
                  <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
                    {`1.828.418 km²`}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  {`Saldırı türü`}
                </TableCell>
                <TableCell>
                  <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
                    {`Zorla kürtaj, Zorunlu kısırlaştırma, Zorunlu Doğum kontrolü, Tecavüz, İşkence, Beyin yıkama, Zorla Evlendirme, Cinayet`}
                  </span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ContentContainer>

        <ContentContainer>
          <h2 className="text-2xl font-bold tracking-wider sm:text-2xl">
            {`Maalesef herşey `}
            <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
              {`rakamlardan`}
            </span>
            {` ibaret`}
          </h2>
          <div className='flex flex-row flex-wrap justify-center gap-8 w-full mt-8'>
            <Progress
              size="lg"
              radius="sm"
              classNames={{
                base: "max-w-md border-2 dark:border-white/10 border-black/10 px-4 py-4 rounded-2xl",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100] ",
                label: "tracking-wider font-medium text-foreground/60",
                value: "tracking-wider font-semibold text-default-600",
              }}
              valueLabel={">1.000.000"}
              showValueLabel={true}
              label={`Kurbanlar`}
              value={100}
            />
            {/* </motion.div> */}



            {/*  <Link href='https://insamer.com/tr/dogu-turkistan_3444.html' target='_blank'>
              <Image
                src='https://www.insamer.com/tr/uploads/gallery/infografik-dogu-turkistan_3444.jpg'
                alt=''
              />
            </Link> */}
          </div>
        </ContentContainer>

        <ContentContainer>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl my-4 mb-8">
            <motion.span
              className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 0 % 2 === 0 ? 50 : -50
              }}
              whileInView={{

                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                  delay: 0,
                }
              }}
              viewport={{ once: true }}
            >
              {`Infografik`}
            </motion.span>
          </h2>

          <ImageGalleryContainer
            slides={turkistan_slides}
          />
        </ContentContainer>

        <ContentContainer>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl my-4 mb-8">
            <motion.span
              className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md"
              initial={{
                opacity: 0,
                // if odd index card,slide from right instead of left
                x: 0 % 2 === 0 ? 50 : -50
              }}
              whileInView={{

                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                  delay: 0,
                }
              }}
              viewport={{ once: true }}
            >
              {`Dergi & Gazete`}
            </motion.span>
          </h2>
          <TurkistanPapersContainer headlines={headlines} />
        </ContentContainer>

        <ContentContainer>
          <TurkistanHeadlineContainer key={1} id={1} timelines={listTimeline} />
        </ContentContainer>

        <motion.div className="fixed left-0 right-0 bottom-0 h-2 dark:bg-turkistan bg-turkistan-dark z-50" style={{ scaleX }} />
      </div >
    </main >
  )
}