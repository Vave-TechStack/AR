import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Package } from 'lucide-react'

export default function ProductLabelsServicePage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <img src='/brand/vavear-icon.svg' alt='VaveAR' className='h-8 w-8' />
            <img src='/brand/vavear-logo.svg' alt='VaveAR' className='h-6 hidden sm:block' />
          </Link>
          <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/demos/product-label'>Try Demo</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-12 max-w-7xl'>
        <div className='mb-10'><div className='inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-full mb-3'><Package className='h-4 w-4 text-purple-600' /><span className='text-sm text-purple-700'>AR Product Labels</span></div>
          <h1 className='text-[15px] font-bold text-slate-900 mb-3'>Interactive Product Packaging</h1>
          <p className='text-[17px] text-slate-600 max-w-2xl'>3D models, videos and product info on scan.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-4'>
          <div className='rounded-xl overflow-hidden border border-slate-200'><img src='/images/product-label.jpg' alt='Product label sample' className='w-full h-56 object-cover' /><div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>GlowSkin Naturals</p></div></div>
          <div className='rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-6'><p className='font-semibold text-slate-900 mb-2'>3D Preview</p><p className='text-sm text-slate-600'>Interactive product visualization</p></div>
          <div className='rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-6'><p className='font-semibold text-slate-900 mb-2'>Video Demo</p><p className='text-sm text-slate-600'>Playable product content</p></div>
        </div>
      </main>
    </div>
  )
}
