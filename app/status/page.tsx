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
    name: "23 Temmuz 1968",
    description: `Filistin Kurtuluş Örgütü (FKÖ) ile İsrail arasındaki ilk esir takası 23 Temmuz 1968’de gerçekleşti.

  Yusuf er-Radi ile Leyla Halid liderliğindeki Filistin Kurtuluşu Halk Cephesi (FHKC) mensuplarının İsrail'in El-Al Hava Yollarına ait bir yolcu uçağını İtalya'nın başkenti Roma'dan Cezayir'e kaçırması olayının ardından taraflar arasında ilk kez esir takası yapıldı.
  
  Uluslararası Kızılhaç Komitesinin arabuluculuğunda gerçekleşen eşir takasında, FHKC, İsrail’in ağır cezalara çarptırılan 37 Filistinli esiri serbest bırakması karşılığında söz konusu uçağın yolcularını serbest bıraktı.
  
  `},
  {
    name: "1969",
    description: `Bir kez daha Leyla Halid liderliğindeki FHKC’li bir grup, İsrail cezaevlerindeki Filistinli esirlerin serbest bırakılması için İsrail’e ait bir uçağı kaçırma girişiminde bulundu. Girişim başarısızlıkla sonuçlandı ve uçağın İngiltere’ye inmesiyle beraber İngiliz güçleri bir FHKC’liyi öldürdü, Leyla Halid’i ise gözaltına aldı.

    Daha sonra bir İngiliz uçağını kaçıran FHKC, Leyla Halid’in serbest bırakılması talebinde bulundu. Bu çerçevede bir anlaşma yapıldı ve Halid serbest kaldı.
    `}
]



export default function Status() {
  return (
    <main className="flex flex-col w-full justify-center items-center p-">
      <div className='container m-8 rounded-3xl p-8 bg-white dark:bg-[#18181B] border-2 dark:border-[#22222578] border-[#dfdfdf78] mx-auto flex flex-col justify-center items-center gap-4'>
        <motion.div className='fixed flex flex-row justify-center items-center w-full gap-4'>
          <Progress
            size="md"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100] ",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Number of children killed"
            value={20}
            showValueLabel={true}
          />
          <Progress
            size="md"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100] ",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Number of women killed"
            value={100}
            showValueLabel={true}
          />
        </motion.div>

        <MapStatus />

        <Divider className='my-4' />

        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">

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

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300" />
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
              <p className="mt-2 leading-6">Description of the second event.</p>
              <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300" />
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
              <p className="mt-2 leading-6">Description of the second event.</p>
              <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300" />
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
              <p className="mt-2 leading-6">Description of the second event.</p>
              <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300" />
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
              <p className="mt-2 leading-6">Description of the second event.</p>
              <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-indigo-300" />
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-indigo-400 rounded-full top-1/2" />
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
              <h3 className="text-lg font-semibold lg:text-xl">New Event 4</h3>
              <p className="mt-2 leading-6">Description of the second event.</p>
              <span className="absolute text-sm text-indigo-100/75 -top-5 left-2 whitespace-nowrap">
                Date 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
