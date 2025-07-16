import { COMPANY_INFO } from '@/lib/constants'

interface LogoProps {
  className?: string
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`text-2xl font-bold gradient-text ${className}`}>
      {COMPANY_INFO.name}
    </div>
  )
} 