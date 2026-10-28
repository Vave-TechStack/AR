import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
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
      <main className='container mx-auto px-4 py-16 max-w-4xl'>
        <h1 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>About VaveAR</h1>
        <p className='text-lg text-slate-600 mb-6'>VaveAR by Vave TechStack provides service-based WebAR solutions for weddings, businesses, and product brands. We create immersive augmented reality experiences that work in any mobile browser - no app downloads required.</p>
        <p className='text-lg text-slate-600'>Our services include wedding photo-to-video AR, smart visiting cards, and AR product labels designed to engage customers and create memorable experiences.</p>
      </main>
    </div>
  )
}
