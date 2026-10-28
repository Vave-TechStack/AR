import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HowItWorksPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/contact'>Get a Quote</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16 max-w-5xl'>
        <div className='text-center mb-12'>
          <h1 className='text-[24px] font-bold text-slate-900 mb-4'>How It Works</h1>
          <p className='text-lg text-slate-600'>Our simple process from concept to deployment</p>
        </div>
        <div className='grid md:grid-cols-4 gap-6'>
          <div className='text-center'><div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3'>1</div><h3 className='font-semibold text-slate-900 mb-2'>Consult</h3><p className='text-sm text-slate-600'>Discuss your requirements</p></div>
          <div className='text-center'><div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3'>2</div><h3 className='font-semibold text-slate-900 mb-2'>Design</h3><p className='text-sm text-slate-600'>Create AR experience</p></div>
          <div className='text-center'><div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3'>3</div><h3 className='font-semibold text-slate-900 mb-2'>Develop</h3><p className='text-sm text-slate-600'>Build & test AR</p></div>
          <div className='text-center'><div className='w-12 h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-3'>4</div><h3 className='font-semibold text-slate-900 mb-2'>Deliver</h3><p className='text-sm text-slate-600'>Share QR codes</p></div>
        </div>
      </main>
    </div>
  )
}

