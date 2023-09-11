import logo from '@/assets/CatwikiLogo.svg'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return (
        <header className='w-full py-5 max-w-6xl'>
            <Link href={'/'}>
                <Image src={logo} alt='logo' />
            </Link>

        </header>
    )
}
