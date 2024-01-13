'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import StatusTimelineCardRight from '@/components/status_timeline_card_right';
import MapStatus from '@/components/map_status';
import StatusTimelineCardLeft from '@/components/status_timeline_card_left';
import { TimelineData } from '@/models/timeline_data';
import ContentContainer from '@/components/content_container';

const descriptionParagraphs: string[] = [
  `Mao dönemi ile başlayan Çin toplumunu topyekûn dönüştürmeyi amaçlayan politikalar Doğu Türkistan'da sert bir şekilde uygulanmaktadır. Başörtüsü, sakal, dinî kitap 'aşırılık' olarak değerlendirilerek yurt dışına gönderilen bir mesaj bile hapis ve aylarca sürecek işkence nedeni olmaktadır. Çinli Komünistlerin tek hâkim kültür olmak istemesinden kaynaklanan bu baskı ve asimilasyon hareketi yerel dillerin, kültürlerin yok edilmesine, dinî inanç ve ibadetlerin yasaklanmasına, din adamlarının saldırıya uğramasına kadar gitti.`,
  `Doğu Türkistan gerçeği, dünyanın ve Türkiye’nin görmezden geldiği, görmezden gelinmese de siyasi çıkarlar uğruna feda edilen bir gerçek. Dinî, millî ve kültürel köklerinden kopartılmak istenen ve gözlerini açtığı andan itibaren “Sincanlı” olduğuna inandırılmaya çalışılan bir tutsaklar ülkesi Doğu Türkistan.Doğu Türkistanlılar şimdi Kur’an okuduklarında dayak yiyor, Kur’an öğrenmek istediklerinde hapse giriyorlar. Daha doğmadan yasaklarla karşılaşıyor; eğer devlet tarafından “fazlalık” olarak addedilirlerse annelerinin karınlarından zorla çıkartılıp öldürülüyorlar. Kendi dillerini, tarihlerini öğrenme hakları yok. İstedikleri üniversiteye girmek, istedikleri işte çalışmak onlar için hayalden de öte. Hayatlarının her aşamasında kimlikleri soruluyor onlara; aidiyetleri sorgulanıyor. Üstelik sorgulanmakla da kalmıyor, kendilerinden çalınıp yerine bir başkası konmaya çalışılıyor.Suçları bir hak talep etmekse bunun bedelini fazlasıyla ödüyorlar. Hesapsızca işkence görüyor, hapislerde ölüme terk ediliyorlar. Hapis hayatından ve dolayısıyla işkenceden evlerine dönenlerse normal hayatlarına bir daha asla dönemiyorlar. Çünkü artık ya psikolojik sorunlarla ya da fiziksel bir rahatsızlıkla yaşamak zorunda kalıyorlar…Çin Halk Cumhuriyeti, Doğu Türkistan’ı hâkimiyeti altına alıp bölgeyi “Sincan” (Kazanılmış Topraklar) olarak adlandırdığı tarihten bu yana, Doğu Türkistanlılara yönelik etnik temizlik ve asimilasyon politikası uygulamaktadır. Nitekim Çin Halk Cumhuriyeti’nin kuruluşundan bu yana 35 milyon Doğu Türkistanlı katledilmiştir Yıllardır Çin zulmü altında olan Doğu Türkistan, Çin, Tibet, Keşmir, Pakistan, Afganistan, Tacikistan, Kırgızistan, Kazakistan, Moğolistan ve Rusya ile sınırı olan, 1.828.418 km2 toprağa sahip bir ülkedir. Zengin yeraltı kaynakları ve stratejik konumu ile Doğu Türkistan, Çin’in siyasi ve ekonomik olarak kendi nüfuzu altına almaya çalıştığı bir bölgedir.`,
]


const listTimeline: TimelineData[] = [
  {
    date: `13.05.2021`,
    title: `Çin, Doğu Türkistan Nüfus İstatistiklerini yayınladı`,
    description: `Çin Nüfus istatistik kurumu, 11 Mayıs'ta 7. Nöbetli Çin Nüfus Sayımı sonuçlarını açıkladı. Çinli yetkililer her on yılda bir kapsamlı nüfus sayımı yapıyor ve sonuçlar, Çin'in toplam nüfusunun 1.41178 milyara ulaştığını ve dünya nüfusunun% 18'ini oluşturduğunu gösteriyor. Bilgilere göre Çin’in ortalama yaş gurubu 38,8 olduğu 15 ile 58 yaşları arasında 894 milyondan fazla insanın var olduğu ve işgücünün yeteri kadar olduğu öne sürülüyor.`,
    source: `https://turkistanpress.com/page/cin-dogu-turkistan-nufus-istatistiklerini-yayinladi/3171`
  },
]

export default function DoguTurkistanPage() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className='container m-8 mx-auto flex flex-col justify-center items-center gap-y-8'>

        <ContentContainer>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
                {`Doğu Türkistan`}
              </span>

            </h2>
            <p className="text-lg leading-8">
              {`Çin'e terkedilmiş bir kader: `}
              <span className="bg-clip-text text-transparent dark:bg-turkistan bg-turkistan-dark drop-shadow-md">
                {`Doğu Türkistan`}
              </span>
            </p>
          </div>

          <Image
            src='/img/dogu-turkistan-banner.jpg'
            alt=''
            width={700}
            className="my-8"
          />

          <div className="text-center space-y-4 mt-8">
            <p className="text-medium leading-8 ">
              {

                descriptionParagraphs[0]
              }
            </p>
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
          </div>
        </ContentContainer>

        <ContentContainer>
          <h2 className="text-2xl font-bold tracking-wider sm:text-2xl">
            {`Zaman Çizelgesi`}
          </h2>

          <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 mt-8">
            {
              listTimeline.map((item, index) => {
                if (index % 2 == 0) {
                  return (
                    <StatusTimelineCardRight key={index} data={item} />
                  )
                } else {
                  return (
                    <StatusTimelineCardLeft key={index} data={item} />
                  )
                }

              })
            }
          </div>
        </ContentContainer>
      </div >
    </main >
  )
}
