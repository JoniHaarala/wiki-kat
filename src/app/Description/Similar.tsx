import { useState, useEffect } from 'react'
import { ImgResult } from '../../../types'
import { apiconfig } from '@/utils/apiconfig'
import Image from 'next/image'

type CatidProps = {
    catId: string
}

export const Similar = ({ catId }: CatidProps) => {
    const [detailData, setDetailData] = useState<ImgResult>()

    useEffect(() => {
        const getDetailData = async () => {
            const detailData = await apiconfig(`/images/search?breed_ids=${catId}&limit=8`)
            setDetailData(detailData)
        }
        getDetailData()
    }, [catId])
    return (
        <div className='my-24'>
            <p className='font-bold text-3xl'>Some photos</p>
            <div className='grid gap-7 grid-cols-2 lg:grid-cols-4 py-10'>
                {detailData?.slice(0, 8).map(value => (
                    <Image
                        key={value.id}
                        src={value.url}
                        alt={value.id}
                        height={value.height}
                        width={value.width}
                        priority={true}
                        className='rounded-lg w-48 h-48 object-cover'
                    />
                ))}
            </div>
        </div>

    )
}
