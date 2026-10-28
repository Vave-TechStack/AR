import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Package, Play } from 'lucide-react'

export default function ProductLabelDemoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <main className='container mx-auto px-4 py-12 max-w-6xl'>
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-4'><Package className='h-4 w-4 text-purple-600' /><span className='text-sm font-medium text-purple-700'>AR Product Label Demo</span></div>
          <h1 className='text-[2rem] font-bold text-slate-900 mb-4'>Packaging That Comes Alive</h1>
          <p className='text-lg text-slate-600'>Interactive hotspots reveal product content</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='relative rounded-2xl overflow-hidden shadow-xl'>
            <img src='/images/skincare-bottle.jpg' alt='Skincare bottle' className='w-full h-[420px] object-cover' />
            <button className='absolute top-1/3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center animate-pulse'>+</button>
            <button className='absolute bottom-1/4 right-1/3 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center animate-pulse'>+</button>
          </div>
          <div className='bg-white border border-slate-200 rounded-2xl p-6'>
            <h3 className='font-semibold text-slate-900 mb-4'>Hotspot Interactions (Demo)</h3>
            <div className='space-y-3'>
              <Button className='w-full justify-start' variant='outline'><Play className='h-4 w-4 mr-3' />Ingredients & Benefits</Button>
              <Button className='w-full justify-start' variant='outline'><Play className='h-4 w-4 mr-3' />How to Use (Demo Video)</Button>
              <Button className='w-full justify-start' variant='outline'><Play className='h-4 w-4 mr-3' />Product Story</Button>
            </div>
            <p className='text-xs text-slate-500 mt-4'>Simulated AR experience. Real camera tracking requires configured targets.</p>
          </div>
        </div>
      </main>
    </div>
  )
}



