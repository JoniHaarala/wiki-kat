/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { Hero } from '@/components/Hero'
import { SeeMore } from '@/components/SeeMore'
import img1 from '@/assets/image 1.png'
import img2 from '@/assets/image 2.png'
import img3 from '@/assets/image 3.png'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full max-w-6xl items-center justify-between">
      <section className="w-full items-center justify-between">
        <Hero />
        <SeeMore />
      </section>
      <section className='my-10 px-20 flex flex-col items-center gap-10 lg:flex-row '>
        <div className='max-w-md flex flex-col gap-6'>
          <p className='font-bold text-5xl'>Why should you have a cat?</p>
          <p>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
          <p>READ MORE <span className='ml-4'>{'-->'}</span></p>
        </div>
        <div className='flex gap-3'>
          <div className='flex gap-5 flex-col items-end'>
            <Image src={img2} width={1900} alt='img2' className='' />
            <Image src={img1} alt='img1' className='w-2/3' />
          </div>
          <Image src={img3} alt='img3' className='object-cover rounded-3xl w-1/2 lg:w-80' />
        </div>
      </section>
    </main>
  )
}
