import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, CreditCard, Layers } from 'lucide-react'

export default function DemoGalleryPage() {
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
      <main className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center mb-12'>
          <h1 className='text-[2rem] font-bold text-slate-900 mb-4'>Demo Gallery</h1>
          <p className='text-lg text-slate-600'>Explore sample WebAR experiences</p>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          <div className='border border-slate-200 rounded-xl overflow-hidden'>
            <div className='h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center'>
              <BookOpen className='h-12 w-12 text-cyan-600' />
            </div>
            <div className='p-4'>
              <h3 className='font-semibold text-slate-900 mb-1'>Priya & Rahul — Wedding Memories</h3>
              <p className='text-sm text-slate-600 mb-3'>Wedding Album AR</p>
              <Button size='sm' variant='outline' asChild><Link href='/wedding-album-ar'>View Demo</Link></Button>
            </div>
          </div>
          <div className='border border-slate-200 rounded-xl overflow-hidden'>
            <div className='h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center'>
              <CreditCard className='h-12 w-12 text-blue-600' />
            </div>
            <div className='p-4'>
              <h3 className='font-semibold text-slate-900 mb-1'>TechVision Solutions</h3>
              <p className='text-sm text-slate-600 mb-3'>Smart Visiting Card</p>
              <Button size='sm' variant='outline' asChild><Link href='/smart-visiting-cards'>View Demo</Link></Button>
            </div>
          </div>
          <div className='border border-slate-200 rounded-xl overflow-hidden'>
            <div className='h-48 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center'>
              <Layers className='h-12 w-12 text-cyan-600' />
            </div>
            <div className='p-4'>
              <h3 className='font-semibold text-slate-900 mb-1'>GlowSkin Naturals</h3>
              <p className='text-sm text-slate-600 mb-3'>AR Product Label</p>
              <Button size='sm' variant='outline' asChild><Link href='/ar-product-labels'>View Demo</Link></Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}



