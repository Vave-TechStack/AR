import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <Button asChild><Link href='/register'>Get Started</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16 max-w-4xl'>
        <h1 className='text-[24px] font-bold text-slate-900 mb-6'>Terms of Service</h1>
        <p className='text-slate-600 mb-4'>Last updated: 2026</p>
        <p className='text-slate-700'>This is a demo/terms placeholder for VaveAR by Vave TechStack.</p>
      </main>
    </div>
  )
}

