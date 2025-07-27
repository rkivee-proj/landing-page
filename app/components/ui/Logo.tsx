import { COMPANY_INFO } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`text-2xl font-bold text-white ${className}`}>
      <Link href="/">
      {/* {COMPANY_INFO.name} */}
      <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </Link>
    </div>
  )
} 