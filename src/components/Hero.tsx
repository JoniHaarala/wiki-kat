'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/CatLogoDark.svg'
import hero from '@/assets/HeroImagelg.png'
import { apiconfig } from '@/utils/apiconfig';
import { BreedProps } from '../../types'
import SearchIcon from '@mui/icons-material/Search';

export const Hero = () => {

    const [breedData, setBreedData] = useState<BreedProps>()
    const [inputValue, setInputValue] = useState('')
    const [autocompleteData, setAutocompleteData] = useState<BreedProps>()

    useEffect(() => {
        const getBreedData = async () => {
            const data = await apiconfig('/breeds')
            setBreedData(data)
        }
        getBreedData()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        const filterData = breedData?.filter((value) => (
            value.name.toLowerCase().includes(e.target.value)
        ))
        console.log(filterData)
        setAutocompleteData(filterData)
        setInputValue(e.target.value)
    }
    console.log(breedData)
    return (
        <div className='mt-10 relative'>
            <div className='absolute top-1/4 left-[10%] md:top-1/3 md:left-[20%] flex flex-col items-center gap-5 text-white text-center lg:text-lg'>
                <Image src={logo} alt="Logo" width={180} />
                <h1 className='w-40 md:w-64'>Get to know more about your cat breed</h1>

                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder='search cat breeds...'
                            className='px-4 py-2 text-black outline-none text-base rounded-xl'
                        />
                        <SearchIcon />
                    </div>
                    {
                        inputValue.length > 0
                        &&
                        <div className='h-32 bg-slate-300 text-black overflow-y-scroll rounded-xl'>
                            {
                                autocompleteData?.map((values, i) => (
                                    <Link
                                        key={i}
                                        href={`Description/${values.id}`}
                                        className='p-2'
                                    >
                                        <p>{values.name}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
            <Image src={hero} alt='hero banner' priority={true} className='object-cover rounded-t-3xl min-h-[300px]' />
        </div>
    )
}