import logo from '@/assets/CatLogoDark.svg'
import Image from 'next/image'
export const Footer = () => {
    return (
        <footer className='flex p-5 w-full justify-between items-center rounded-t-2xl max-w-6xl bg-stone-800 text-white'>
            <Image src={logo} alt="cat logo" className='fill-white' />
            <p>© created by <span className='font-bold'>username</span> - devChallenge.io 2021</p>
        </footer>
    )
}
