'use client'

import ListTile from '@/components/list_tile';
import { SearchIcon } from '@/icons/search_icon';
import { Product } from '@/models/product';
import { Input, Spinner } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

export default function Brands() {
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.boykotaj.com/api/content/items/product?populate=-1', {
      method: "GET",
      headers: {
        "api-key": "API-f0c1821a1d447b015d1a0b1fe52f04f8ab2d600f"
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
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
