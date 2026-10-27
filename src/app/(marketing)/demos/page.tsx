import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, CreditCard, Package, Camera } from 'lucide-react'

export default function DemosPage() {
  return (
    <div className='min-h-screen bg-white'>
      
      <main className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>Live AR Demos</h1>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>Try our working WebAR demos. Sample mode works in any browser - camera AR requires device support.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <Link href='/demos/wedding' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white'>
            <div className='h-56 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 flex items-center justify-center relative'>
              <Heart className='h-16 w-16 text-rose-600 group-hover:scale-110 transition-transform' />
              <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700'>Wedding AR</div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>Wedding Photo-to-Video AR</h2>
              <p className='text-slate-600 mb-4'>Scan printed wedding photos to reveal video memories</p>
              <span className='text-blue-600 font-medium group-hover:underline'>Try Demo â†’</span>
            </div>
          </Link>
          <Link href='/demos/visiting-card' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white'>
            <div className='h-56 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 flex items-center justify-center relative'>
              <CreditCard className='h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform' />
              <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700'>Visiting Card</div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>Smart Visiting Card AR</h2>
              <p className='text-slate-600 mb-4'>Interactive business card with video, links and contact</p>
              <span className='text-blue-600 font-medium group-hover:underline'>Try Demo â†’</span>
            </div>
          </Link>
          <Link href='/demos/product-label' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white'>
            <div className='h-56 bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 flex items-center justify-center relative'>
              <Package className='h-16 w-16 text-purple-600 group-hover:scale-110 transition-transform' />
              <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700'>Product Label</div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>AR Product Label</h2>
              <p className='text-slate-600 mb-4'>Bring product packaging to life with 3D and video</p>
              <span className='text-blue-600 font-medium group-hover:underline'>Try Demo â†’</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
