'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Progress } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from "framer-motion"
import StatusTimelineCardRight from '@/components/status_timeline_card_right';
import MapStatus from '@/components/map_status';
import StatusTimelineCardLeft from '@/components/status_timeline_card_left';
import { TimelineData } from '@/models/timeline_data';
import ContentContainer from '@/components/content_container';
import ZoomContainer from '@/components/special/filistin/zoom_container';
import ImageGalleryContainer from '@/components/image_gallery_container';
import filistin_slides from '@/data/filistin_slide_data';
import ContentContainerNoneBackground from '@/components/content_container_none_background';
import TurkistanHeadlineContainer from '@/components/special/turkistan/turkistan_headline_container';
import LightboxImageContainer from '@/components/lightbox_image_container';
import StatProgress from '@/components/stat_progress';

const listTimeline: TimelineData[] = [
  {
    date: `23.07.1968`,
    title: `Filistin'in bölünmesi kararı ve 1948 savaşı`,
    description: `Birleşmiş Milletler Genel Kurulunda 29 Kasım 1947'de Filistin'in, Yahudi ve Filistin devleti olarak bölünmesini öngören karar onaylandı. Karara başta Filistinliler olmak üzere Arap ülkeleri karşı çıkarken, siyonistler ise kararı memnuniyetle karşıladı.

    Bölünme kararının ertesi günü siyonistler tarafından kurulan Haganah adlı silahlı çete tarzı örgüt, Yahudilerin ikamet etmesi için hazırlanan bölgeleri ele geçirdi.
    
    Filistin'de İngilizlerin manda yönetimi sona erer ermez silahlı örgütler, 14 Mayıs 1948'de David Ben Gurion tarafından İsrail devletinin kurulduğunu duyurdu.
    
    Yaşanan olayların ardından Arap Birliği, silahlı siyonist çetelerin saldırıları karşısında Filistinlilere yardım etmesi için Suriyeli bir komutan liderliğinde çeşitli ülkelerden güçleri barındıran ortak bir ordu kurdu.
    
    Söz konusu ordu, siyonistlerle mücadele eden Filistinli direniş gruplarına destek oldu. Arap birlikler, Mayıs 1948'de Filistin'deki yasa dışı Yahudi yerleşim birimlerine saldırılar düzenledi. Silah ve teçhizat açısından zayıf olmalarına rağmen bu birlikler silahlı siyonist çetelerin ele geçirdiği Filistin topraklarında tekrar kontrolü sağladı.
    
    Ürdün, Irak, Suriye, Mısır ve Lübnan orduları, Filistin'de siyonistlere karşı ilerlemeler kaydetti.
    
    Tarihe Arap-İsrail Savaşı olarak geçen 1948'teki savaşın başında Arap ülkelerinin orduları İsrail'in işgal ettiği bölgelerde kontrolü sağlayarak İsrail'e karşı zaferler kazandı.
    
    Buna göre Mısırlı birlikler, Beytullahim ile Kudüs'ün güney kırsallarına kadar ulaştı. Mısır güçleri ayrıca Yafa kentinin sınırları, Necef (Negev) bölgesi ve Akabe Körfezi'ne kadar ilerledi.
    
    Suriyeli birlikler, Celil kenti (bazı Yahudi yerleşim birimleri hariç) ve Taberiye Gölü'nü kontrol altına aldı.
    
    Lübnanlı birlikler, Akka şehrine yaklaştı, Nasıriye kentinin güneyindeki köylere kadar ulaştı.
    
    Irak birlikleri Tel Aviv'i kontrol altına aldı; Cenin, Tulkerm ve Kalkilya'ya vararak, Akdeniz'e 13 kilometre uzaklığa kadar ilerledi.
    
    Ürdünlü birlikler, Kudüs, Ramallah, Lid ve Remle'de kontrolü sağladı ve hatta bölgede Irak ve Mısırlı birliklerle buluştu.`,
    source: ``,
    image: `https://www.perspektif.online/wp-content/uploads/2023/10/filistin-israil-yeni-arap-bahari.jpeg`
  },
  {
    date: `1969`,
    title: `Ateşkes İsrail'e fayda sağladı`,
    description: `Çatışmalar sonucu Birleşmiş Milletler Güvenlik Konseyi (BMGK) kararıyla 11 Haziran 1948'de ilk ateşkese varıldı.

    Ateşkes kararı tarafların bulundukları konumlardan ileriye gitmemesini, savaşan asker ve güçlerinin sayısını artırmamasını öngörüyordu. Söz konusu kararla bölgedeki çatışmalar 4 hafta durdu, Filistinliler ve Arap birlikleri ateşkese bağlı kaldı. Ancak İsrail, ateşkesi ihlal etti ve bu 4 hafta boyunca durumu lehine çevirdi.
    
    İsrailliler bu süreçte askeri güçlerini çoğalttı. Ateşkese bağlı kalmayarak, silah, cephane ve teçhizatın yanı sıra savaşçılarını da arttırdı.
    
    Uluslararası müdahale ve ateşkes Arap ordularının sahada kazandığı zaferleri İsrail lehine çevirdi. Bu durum İsrail'e fayda sağladı ve dengeleri onun lehine değiştirdi.
    
    Öte yandan İsrail'in ateşkes ihlallerini görmezden gelen ABD ve İngiltere gibi büyük devletler, Arap ülkelerinin silah ve teçhizat edinmesine engel oldu.`,
    source: ``,
    image: `https://www.indyturk.com/sites/default/files/styles/1368x911/public/article/main_image/2020/10/30/495806-403723643.png?itok=npCD2BAV`
  },
  {
    date: `28.01.1971`,
    title: `Arap orduları çekilmeye başladı`,
    description: `Temmuz 1948'e gelindiğinde İsrail güçleri Kudüs'ün kuzey kesimlerinde Arap köylerine saldırmaya başladı.

    İsrail güçleri, bölgedeki Filistin şehirlerine düzenlediği bombardımanlar sonucu Lid kenti, buradaki havaalanı ve Remle şehrini ele geçirdi. Kudüs'teki Eski Şehir'i ve bazı bölgeleri de ele geçirmeye çalışan İsrail güçleri, bunda başarısız oldu.
    
    Sonrasında 15 Temmuz 1948'de BMGK tarafından ikinci ateşkes ilan edildi. İsrail, ateşkesi kabul etmesine rağmen, saldırılarına ve planlarına devam etti.
    
    Bunların sonucu olarak Necef bölgesini işgal etti ve Eliat Limanı ile Akabe Körfezi'ne ilerledi.
    
    İsrail uçakları, Mısır ordusunun sahadan çekilmesi için Mısır'ın Ariş Havalimanı ile Gazze Şeridi'ndeki bazı kentleri bombaladı. Olayın ardından Mısır ve İsrail orduları arasında şiddetli çatışmalar yaşandı. Ardından Mısır birlikleri, Mecdel kentinden Gazze'ye ve Han Yunus'a doğru çekildi. İsrailliler ise Mısır birliklerinin çekildiği bölgeleri işgal etti. Mısır birliklerinin kontrolündeki Beersheba da işgal edildi.
    
    Bunların sonucu Mısır birlikleri yalnızca Gazze Şeridi'ni kontrol altında tutabildi ve burası bugünkü sınırlarına kadar küçüldü.
    
    Irak ordusuna gelince onlar da Tel Aviv'in komşuları Tulkerm ve Kefr Kasım kentlerinden çekildi. Ayrıca Irak'ın bilgisi dışında Arap ülkeleri ve İsrail arasında yapılan ateşkes anlaşması sonucu Irak ordusu kontrolü altında tuttuğu Filistin topraklarından çekilmek zorunda kaldı ve buraları Ürdün hükümetine teslim etti.
    
    `,
    source: ``,
    image: `https://img.piri.net/mnresize/720/-/resim/imagecrop/2021/05/05/11/41/resized_44cae-db970498sss.jpg`
  },
  {
    date: "14.03.1979",
    title: `Savaşın sona ermesi`,
    description: `BMGK, 29 Aralık 1948'de savaşa son veren bir karar çıkardı. Bu karar sonrası Arap-İsrail Savaşı son buldu. Başta Filistin topraklarında ilerleyen Arap ülkeleri, İsrail lehine buralardan çekilmiş oldu.

    Tarihçiler, Arap ülkelerinin ve ordularının başarısızlığında "ferdi çıkarların öne çıkmasının" etkili olduğunu savunuyor.
    
    Savaşa katılan orduların, Arap ortak çıkarlarından ziyade kendi ülkelerinin faydasını ön planda tutması ve askeri güçlerini başka bir ordunun komutası altında tutmayı reddetmesi nedeniyle İsrail'in savaşı lehine sonuçlandırdığı belirtiliyor.`,
    source: ``,
    image: `https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2124000/2125718.jpg`
  },
  {
    date: "02.1980",
    title: ``,
    description: `İsrail hükümeti, Fetih hareketi tarafından gözaltına alınan İsrail Dış İstihbarat Servisi (Mossad) için çalışan Ürdün vatandaşı Emine Davut el-Müftü’ün serbest bırakılması karşılığında Filistinli esir Mehdi Bsiso'nun serbest bırakılmasına karar verdi. Değişim, Uluslararası Kızılhaç Komitesi gözetiminde Kıbrıs'ta gerçekleşti.`,
    source: ``,
    image: `https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2124000/2125719.jpg`
  },
  {
    date: "23.11.1983",
    title: `73 yıldır dinmeyen acı: Nekbe`,
    description: `Arap ülkeleri ile İsrail arasında yaşanan savaş, Filistin'in İsrail tarafından işgalini engelleyemedi.

    İsrail'in 14 Mayıs 1948'de tarihi Filistin topraklarında bağımsızlığını ilan etmesi, Filistinliler için onlarca yıldır devam eden felaketler silsilesinin başlangıcı oldu. Bu nedenle İsrail'in bağımsızlığını ilan ettiği tarih olan 14 Mayıs'ı takip eden gün, yani 15 Mayıs "Nekbe" (Büyük Felaket) günü olarak sembolleşti.
    
    Günümüze kadar uzanan bu süreçte Filistin topraklarının büyük bölümü işgal edildi, sistematik katliamlarla binlerce Filistinli öldürüldü, 1 milyona yakın kişi vatanından sürüldü, 675 köy yok edildi ve bazı kentler Yahudileştirildi.
    
    Nekbe'den bu yana işgali genişleten İsrail, şu an 27 bin kilometrekarelik tarihi Filistin topraklarının yüzde 85'ine el koymuş durumda. Filistinliler ise bu alanın sadece yüzde 15'ini kullanabiliyor.
    
    İsrail ayrıca 1967'de işgal ettiği Doğu Kudüs ve Batı Şeria'da da yasa dışı Yahudi yerleşim birimi inşaatlarına devam ediyor.`,
    source: ``,
    image: `https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2124000/2125720.jpg`
  }
]



export default function FilistinPage() {
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
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="bg-clip-text text-transparent dark:bg-palestine bg-palestine-dark drop-shadow-md">
                {`Filistin`}
              </span>
            </h2>
            <p className="text-lg leading-8">
              {'Bombaların ortasında bir şehir: '}
              <span className="bg-clip-text text-transparent dark:bg-palestine bg-palestine-dark drop-shadow-md">
                {`Filistin`}
              </span>
            </p>
          </div>
          {/* <dl className="mt-16 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
              <dt className="text-sm font-light mt-1 leading-6">
                Öncesi
              </dt>
              <dd className="order-first text-2xl font-bold tracking-tight ">
                1948
              </dd>

              <Divider className='my-5' />

              <Image
                alt="nextui logo"
                width={250}
                radius="sm"
                src="/img/map-1.png"
              />
            </div>
            <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
              <dt className="text-sm font-light mt-1 leading-6">
                BM TAKSİM PLANI
              </dt>
              <dd className="order-first text-2xl font-bold tracking-tight ">
                1947
              </dd>

              <Divider className='my-5' />

              <Image
                alt="nextui logo"
                width={250}
                radius="sm"
                src="/img/map-2.png"
              />
            </div>
            <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
              <dt className="text-sm font-light mt-1 leading-6">
                Yılı
              </dt>
              <dd className="order-first text-2xl font-bold tracking-tight ">
                1967
              </dd>

              <Divider className='my-5' />

              <Image
                alt="nextui logo"
                width={250}
                radius="sm"
                src="/img/map-3.png"
              />
            </div>
            <div className="flex flex-col dark:bg-white/5 bg-white rounded-3xl border-2 dark:border-[#22222578] border-[#dfdfdf78] p-8">
              <dt className="text-sm font-light mt-1 leading-6">
                Günümüz
              </dt>
              <dd className="order-first text-2xl font-bold tracking-tight ">
                GÜNCEL
              </dd>

              <Divider className='my-5' />

              <Image
                alt="nextui logo"
                width={250}
                radius="sm"
                src="/img/map-4.png"
              />
            </div>
          </dl> */}

          <LightboxImageContainer
            url={"https://twitter.com/anadoluajansi/status/715240957797642241"}
            imagePath={'/img/filistin-harita.jpeg'}
          />

          <div className="text-center space-y-4 mt-8">
            <p className="text-medium leading-8">
              {
                `İsrail'in 30 Mart 1976'da Filistinlilere ait binlerce dönüm araziye el koyması her yıl Toprak Günü olarak anılıyor. Tarihi Filistin toprakları üzerinde kurulan İsrail işgaline direnişin sembolü haline gelen Toprak Günü'nün kırk birinci yıl dönümü, giderek genişleyen İsrail işgalini yeniden gündeme taşıdı.`
              }
            </p>
            <p className="text-medium leading-8">
              {
                `Filistin İstatistik Merkezinin Mart 2015 verilerine göre İsrail, 27 bin kilometrekarelik Filistin topraklarının yüzde 85'ine el koymuş durumda. Filistinliler ise bu alanın sadece yüzde 15'ini kullanabiliyor.`
              }
            </p>
          </div>
        </ContentContainer>

        <ContentContainerNoneBackground>
          <ZoomContainer />
        </ContentContainerNoneBackground>

        <ContentContainer>
          <ImageGalleryContainer slides={filistin_slides} />
        </ContentContainer>

        <div className='bg-white flex flex-col justify-center items-center gap-8 dark:bg-[#18181b2e] border-2 dark:border-[#22222578] border-[#dfdfdf78] rounded-3xl px-4 py-8'>
          <h2 className="text-2xl font-bold tracking-wider sm:text-2xl">
            {`Maalesef herşey `}
            <span className="bg-clip-text text-transparent dark:bg-palestine bg-palestine-dark drop-shadow-md">
              {`rakamlardan`}
            </span>
            {` ibaret`}

          </h2>
          <div className='flex flex-row flex-wrap justify-center gap-8 w-full mt-8'>
            <StatProgress
              label={`Öldürülen Çocuk Sayısı`}
              valueLabel={">10.000"}
              value={100}
            />

            <StatProgress
              valueLabel={">7.000"}
              label={`Öldürülen Kadın Sayısı`}
              value={100}
            />

            <StatProgress
              valueLabel={">23.000"}
              label="Toplam Öldürülen İnsan Sayısı"
              value={100}
            />

            <StatProgress
              valueLabel={">1.900.000"}
              label="Yerinden Edilen Kişi Sayısı"
              value={100}
            />

            <StatProgress
              valueLabel={">290.000"}
              label="Ağır Hasarlı Konut Sayısı"
              value={100}
            />
            <StatProgress
              valueLabel={">69.000"}
              label="Yıkılan Konut Sayısı"
              value={100}
            />
          </div>
        </div>

        <ContentContainer>
          <TurkistanHeadlineContainer key={1} id={1} timelines={listTimeline} />
        </ContentContainer>

        {/*   <ContentContainer>
          <h2 className="text-2xl font-bold tracking-wider sm:text-2xl">
            7 Ekim&apos;den bu yana
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
        </ContentContainer> */}

        <motion.div className="fixed left-0 right-0 bottom-0 h-2 dark:bg-palestine bg-palestine-dark z-50" style={{ scaleX }} />

      </div>
    </main >
  )
}
