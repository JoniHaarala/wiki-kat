'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { apiconfig } from '@/utils/apiconfig'
import { BreedProps } from '../../../types'

export default function BreedListPage() {

    const [breedData, setBreedData] = useState<BreedProps>()
    const [loadMore, setLoadMore] = useState(20)

    useEffect(() => {
        const getBreedData = async () => {
            const data = await apiconfig('/breeds')
            setBreedData(data)
        }
        getBreedData()
    }, [loadMore])

    return (
        <main className='flex flex-col justify-center'>
            <h1 className='mt-24 text-2xl font-semibold uppercase px-5'>Breeds chart list</h1>
            <section className='grid mt-14 mb-10 gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {
                    breedData?.slice(0, loadMore).map(value => (
                        <Link key={value.id} href={`/Description/${value.id}`} >
                            <Image
                                src={`https://cdn2.thecatapi.com/images/${value.reference_image_id}.jpg`}
                                alt={value.name}
                                priority={true}
                                width={100}
                                height={100}
                                className='w-44 h-44 object-cover rounded-lg'
                            />
                            <h2 className='py-2 text-center'>
                                {value.name}
                            </h2>
                        </Link>
                    ))
                }
            </section >
            <button onClick={() => setLoadMore(e => e + 20)} className='py-2 px-3 my-5 bg-slate-300 font-bold rounded-xl self-center'>LOAD MORE</button>
        </main>


    )
}
