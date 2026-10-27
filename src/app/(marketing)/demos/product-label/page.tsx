import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Package, Camera, Play } from 'lucide-react'

export default function ProductLabelDemoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <Button asChild><Link href='/demos'>Back to Demos</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-12 max-w-6xl'>
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4'><Package className='h-4 w-4 text-purple-600' /><span className='text-sm font-medium text-purple-700'>AR Product Label Demo</span></div>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>GlowSkin Naturals</h1>
          <p className='text-lg text-slate-600'>Vitamin C Brightening Serum - 30ml</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='border border-slate-200 rounded-2xl overflow-hidden shadow-xl'>
            <div className='relative h-80'>
              <img src='/images/product-label.jpg' alt='Product label packaging' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/20 flex items-center justify-center'><div className='bg-white/90 px-4 py-2 rounded-lg'><p className='text-sm font-medium text-slate-900'>AR Overlay Preview</p></div></div>
            </div>
            <div className='p-4 bg-white flex gap-3'>
              <Button className='flex-1 bg-gradient-to-r from-purple-600 to-pink-600'><Camera className='h-4 w-4 mr-2' />Start Camera AR</Button>
              <Button variant='outline' className='flex-1'><Play className='h-4 w-4 mr-2' />Play Product Video</Button>
            </div>
          </div>
          <div className='bg-white border border-slate-200 rounded-2xl p-6'>
            <h3 className='font-semibold text-slate-900 mb-4'>Product Details</h3>
            <ul className='space-y-2 text-slate-600'>
              <li><strong className='text-slate-900'>Product:</strong> Vitamin C Brightening Serum</li>
              <li><strong className='text-slate-900'>Brand:</strong> GlowSkin Naturals (Demo)</li>
              <li><strong className='text-slate-900'>Size:</strong> 30ml</li>
              <li><strong className='text-slate-900'>AR Features:</strong> 3D visualization, product demo video</li>
            </ul>
            <div className='mt-6 p-4 bg-purple-50 rounded-lg'><p className='text-sm text-purple-700 font-medium mb-1'>Sample Mode Available</p><p className='text-xs text-purple-600'>Video playback works without camera permission</p></div>
          </div>
        </div>
      </main>
    </div>
  )
}
