'use client'

import ListTile from '@/components/list_tile';
import { Product } from '@/models/product';
import { Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.boykotaj.com.tr/api/content/items/product?populate=1', {
      method: "GET",
      headers: {
        "api-key": "API-b7f4a3972c33db263e9ac5cbb2c9355937af3441"
      }
    })
      .then((res) => res.json())
      .then((fetchedData) => {
        setData(fetchedData)
        setLoading(false)
      })
  }, [])


  return (
    <main className="flex flex-col w-full justify-center items-center p-4">
      {
        isLoading ? (
          <div className='container mx-auto flex justify-center items-center'>
            <Spinner color='current' />
          </div>
        ) : (
          <ListTile products={data} />
        )
      }
    </main>
  )
}