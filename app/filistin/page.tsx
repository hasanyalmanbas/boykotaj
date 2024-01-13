'use client'

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Progress } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import StatusTimelineCardRight from '@/components/status_timeline_card_right';
import MapStatus from '@/components/map_status';
import StatusTimelineCardLeft from '@/components/status_timeline_card_left';
import { TimelineData } from '@/models/timeline_data';

const listTimeline: TimelineData[] = [
  {
    date: `23.07.1968`,
    title: ``,
    description: `Filistin Kurtuluş Örgütü (FKÖ) ile İsrail arasındaki ilk esir takası 23 Temmuz 1968’de gerçekleşti. Yusuf er-Radi ile Leyla Halid liderliğindeki Filistin Kurtuluşu Halk Cephesi (FHKC) mensuplarının İsrail'in El-Al Hava Yollarına ait bir yolcu uçağını İtalya'nın başkenti Roma'dan Cezayir'e kaçırması olayının ardından taraflar arasında ilk kez esir takası yapıldı. Uluslararası Kızılhaç Komitesinin arabuluculuğunda gerçekleşen eşir takasında, FHKC, İsrail’in ağır cezalara çarptırılan 37 Filistinli esiri serbest bırakması karşılığında söz konusu uçağın yolcularını serbest bıraktı.`,
    source: ``
  },
  {
    date: `1969`,
    title: ``,
    description: `Bir kez daha Leyla Halid liderliğindeki FHKC’li bir grup, İsrail cezaevlerindeki Filistinli esirlerin serbest bırakılması için İsrail’e ait bir uçağı kaçırma girişiminde bulundu. Girişim başarısızlıkla sonuçlandı ve uçağın İngiltere’ye inmesiyle beraber İngiliz güçleri bir FHKC’liyi öldürdü, Leyla Halid’i ise gözaltına aldı. Daha sonra bir İngiliz uçağını kaçıran FHKC, Leyla Halid’in serbest bırakılması talebinde bulundu. Bu çerçevede bir anlaşma yapıldı ve Halid serbest kaldı.`,
    source: ``
  },
  {
    date: `28.01.1971`,
    title: ``,
    description: `Filistin Ulusal Kurtuluş Hareketi (Fetih) ile İsrail arasında, Uluslararası Kızılhaç Komitesinin arabuluculuğunda imzalanan anlaşma gereği, Fetih mensuplarınca kaçırılan İsrail askeri Shmuel Fayez'in serbest bırakılması karşılığında Filistinli Esir Mahmud Bekir Hicazi serbest bırakıldı.`,
    source: ``
  },
  {
    date: "14.03.1979",
    title: ``,
    description: `İsrail ile FKÖ arasında, örgütün fraksiyonlarından Halk Cephesi-Genel Komutanlık tarafından 5 Nisan 1978'de esir alınan İsrail askeri Abraham Amram'ın serbest bırakıldığı “Martı” adı verilen takas. Bu anlaşma çerçevesinde İsrail, 12'si kadın olmak üzere birçok Filistinli gruptan 76 esiri serbest bıraktı.`,
    source: ``
  },
  {
    date: "02.1980",
    title: ``,
    description: `İsrail hükümeti, Fetih hareketi tarafından gözaltına alınan İsrail Dış İstihbarat Servisi (Mossad) için çalışan Ürdün vatandaşı Emine Davut el-Müftü’ün serbest bırakılması karşılığında Filistinli esir Mehdi Bsiso'nun serbest bırakılmasına karar verdi. Değişim, Uluslararası Kızılhaç Komitesi gözetiminde Kıbrıs'ta gerçekleşti.`,
    source: ``
  },
  {
    date: "23.11.1983",
    title: ``,
    description: `İsrail hükümeti ile Fetih arasında varılan anlaşma uyarınca, İsrail'in Güney Lübnan'daki "Ensar Gözaltı Merkezi"ndeki 4 bin 700 Filistinli ile Lübnanlı tüm esirler ve İsrail hapishanelerindeki 65 esiri serbest bırakması karşılığında 6 İsrailli asker serbest bırakıldı.`,
    source: ``
  },
  {
    date: "20 Mayıs 1985",
    title: ``,
    description: `İsrail, FHKC ile Celile Operasyonu adı verilen bir değişim gerçekleştirdi. Bu operasyonda, FHKC’nin elindeki 3 İsrail askeri karşılığında 1155 Filistinli ve Lübnanlı esir serbest kaldı.`,
    source: ``
  },
  {
    date: "1997",
    title: `Şeyh Ahmet Yasin serbest bırakıldı`,
    description: `Ürdün'de 1997'de dönemin Hamas Siyasi Büro Başkanı Halid Meşal'e yönelik başarısız bir suikast girişiminin ardından 2 Mossad ajanının serbest bırakılmasına karşılık Hamas’ın kurucusu Şeyh Ahmed Yasin ve 2 arkadaşı salıverildi.`,
    source: ``
  },
  {
    date: "10.2009",
    title: ``,
    description: `İsrail, 25 Haziran 2006'da Filistinli direniş grupları tarafından esir alınan İsrailli asker Gilad Şalit'i gösteren 2 dakikalık bir video klip karşılığında Batı Şeria ve Gazze Şeridi'ndeki 20 Filistinli esiri serbest bıraktı.`,
    source: ``
  },
  {
    date: "11.10.2011",
    title: ``,
    description: `Hamas'ın “Özgürlüğe Sadakat”, Tel Aviv'in ise “Kapanış Zamanı” olarak adlandırdığı süreçte İsrail'in 1027 Filistinli esiri, Hamas'ın da asker Şalit'i serbest bırakmasıyla sonuçlanan büyük bir esir değişimi gerçekleşti.`,
    source: ``
  },
]



export default function FilistinPage() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <div className='container m-8 mx-auto flex flex-col justify-center items-center gap-y-8'>

        <div className='bg-white dark:bg-[#18181b2e] border-2 dark:border-[#22222578] border-[#dfdfdf78] rounded-3xl px-4 py-8'>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  <span className="bg-clip-text text-transparent dark:bg-palestine bg-palestine-dark drop-shadow-md">
                    {`Filistin`}
                  </span>
                </h2>
                <p className="text-lg leading-8">
                  {'Gazze acil yardım bekliyor'}
                </p>
              </div>
              <dl className="mt-16 grid grid-cols-1 gap-2 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
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
              </dl>
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
            </div>
          </div>
        </div>

        <div className='bg-white flex flex-col justify-center items-center gap-8 dark:bg-[#18181b2e] border-2 dark:border-[#22222578] border-[#dfdfdf78] rounded-3xl px-4 py-8'>
          <h2 className="text-2xl font-bold tracking-wider sm:text-2xl">
            {`Maalesef herşey `}
            <span className="bg-clip-text text-transparent dark:bg-palestine bg-palestine-dark drop-shadow-md">
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
                indicator: "bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100]",
                label: "tracking-wider font-medium text-foreground/60",
                value: "tracking-wider font-semibold text-default-600",
              }}
              valueLabel={">10.000"}
              showValueLabel={true}
              label={`Öldürülen Çocuk Sayısı`}
              value={100}
            />
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
              valueLabel={">7.000"}
              showValueLabel={true}
              label={`Öldürülen Kadın Sayısı`}
              value={100}
            />

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
              valueLabel={">23.000"}
              showValueLabel={true}
              label="Toplam Öldürülen İnsan Sayısı"
              value={100}
            />

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
              valueLabel={">1.900.000"}
              showValueLabel={true}
              label="Yerinden Edilen Kişi Sayısı"
              value={100}
            />

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
              valueLabel={">290.000"}
              showValueLabel={true}
              label="Ağır Hasarlı Konut Sayısı"
              value={100}
            />

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
              valueLabel={">69.000"}
              showValueLabel={true}
              label="Yıkılan Konut Sayısı"
              value={100}
            />
          </div>
        </div>

        <div className='bg-white flex flex-col justify-center items-center gap-8 dark:bg-[#18181b2e] border-2 dark:border-[#22222578] border-[#dfdfdf78] rounded-3xl px-4 py-8'>
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
        </div>
      </div>
    </main >
  )
}
