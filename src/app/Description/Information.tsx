import { useState, useEffect } from 'react'
import { BreedProps, Breed } from '../../../types'
import { apiconfig } from '@/utils/apiconfig'
import Image from 'next/image'

type CatidProps = {
  catId: string
}

type LevelProps = {
  level: number | undefined
}

const PaintLevels = ({ level = 0 }: LevelProps) => {
  const diff = 5 - level
  let emptyArr = []
  let levelArr = []
  for (let i = 0; i < diff; i++) {
    emptyArr.push(i)
  }
  for (let i = 0; i < level; i++) {
    levelArr.push(i)
  }
  return (
    <div className='flex gap-2'>
      {
        levelArr.map((_, i) => (
          <div key={i}>
            <p className='bg-neutral-700 h-2 w-9 rounded-lg'></p>
          </div>
        ))
      }
      {
        emptyArr.map((_, i) => (
          <div key={i}>
            <p className='bg-slate-100 border-2 border-black h-2 w-9 rounded-lg'></p>
          </div>
        ))
      }
    </div>
  )
}

export const Information = ({ catId }: CatidProps) => {
  const [detailData, setDetailData] = useState<Breed>()

  useEffect(() => {
    const getDetailData = async () => {
      const detailData: BreedProps = await apiconfig(`/breeds`)
      const findData = await detailData.find(data => data.id === catId)
      setDetailData(findData)
    }
    getDetailData()
  }, [catId])

  return (
    <main className='flex gap-24 flex-col md:flex-row max-w-6xl p-10'>

      <Image
        src={`https://cdn2.thecatapi.com/images/${detailData?.reference_image_id}.jpg`}
        width={300}
        height={300}
        alt={`${detailData?.name} img`}
        priority={true}
        className='w-80 h-80 object-cover hidden md:block'
      />

      <section className='flex flex-col gap-6 pr-5'>
        <h1 className='text-5xl '>{detailData?.name}</h1>
        <p>{detailData?.description}</p>
        <p className="font-bold">Temperament: <span className='text-base font-normal'>{detailData?.temperament}</span></p>
        <p className="font-bold">Origin: <span className='text-base font-normal'>{detailData?.origin}</span></p>
        <p className="font-bold">Life Span: <span className='text-base font-normal'>{detailData?.life_span} years</span></p>

        <div className='grid grid-cols-2 gap-y-5 items-center'>
          <p>Adaptability : </p>
          <PaintLevels level={detailData?.adaptability} />

          <p>Affection level : </p>
          <PaintLevels level={detailData?.affection_level} />

          <p>Child friendly : </p>
          <PaintLevels level={detailData?.child_friendly} />

          <p>Grooming : </p>
          <PaintLevels level={detailData?.grooming} />

          <p>Health issues : </p>
          <PaintLevels level={detailData?.health_issues} />

          <p>Intelligence : </p>
          <PaintLevels level={detailData?.intelligence} />

          <p>Social needs : </p>
          <PaintLevels level={detailData?.social_needs} />

          <p>Stranger friendly : </p>
          <PaintLevels level={detailData?.stranger_friendly} />
        </div>

      </section>

    </main>
  )
}
