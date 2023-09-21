import Link from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export const SeeMore = () => {
  return (
    <div className='bg-stone-400 p-8 rounded-b-2xl flex flex-col gap-8 md:grid md:grid-cols-2 md:grid-rows-3'>
      <p className='row-start-1 col-span-2 justify-items-center'>
        Most Searched Breeds
      </p>
      <h2 className='text-4xl col-span-2 row-start-2 items-center'>
        66+ Breeds For you to discover
      </h2>
      <section className='row-start-3 col-span-3'>
        <div className='grid gap-3 grid-cols-2 justify-items-center md:flex md:justify-around'>
          <p className='bg-gray-500 w-32 h-32'>a</p>
          <p className='bg-gray-500 w-32 h-32'>a</p>
          <p className='bg-gray-500 w-32 h-32'>a</p>
          <p className='bg-gray-500 w-32 h-32'>a</p>
        </div>
      </section>
      <Link
        href={`/BreedList`}
        className='px-5 row-start-4 md:row-start-2 flex md:items-center md:justify-end'
      >
        SEE MORE
        <ArrowRightAltIcon />
      </Link>
    </div>
  )
}
