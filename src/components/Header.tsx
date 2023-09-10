import logo from '@/assets/CatwikiLogo.svg'
import Image from 'next/image'
export default function Header() {
    return (
        <header className='w-full py-5 max-w-6xl'>
            <Image src={logo} alt='logo' />
        </header>
    )
}
