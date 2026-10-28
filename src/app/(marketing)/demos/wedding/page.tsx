import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { VideoLightbox } from '@/components/ui/video-lightbox'
import { BeforeAfter } from '@/components/ui/before-after'
import { Heart, Camera } from 'lucide-react'

export default function WeddingDemoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <main className='container mx-auto px-4 py-12 max-w-6xl'>
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full mb-4'><Heart className='h-4 w-4 text-rose-600' /><span className='text-sm font-medium text-rose-700'>Wedding Photo-to-Video AR Demo</span></div>
          <h1 className='text-[2rem] font-bold text-slate-900 mb-4'>From Printed Photo to Living Memory</h1>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>Compare, play and experience the transformation</p>
        </div>
        <div className='mb-12'>
          <BeforeAfter before='/images/indian-wedding-1.jpg' after='/images/indian-wedding-2.jpg' />
        </div>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div>
            <h2 className='text-[2rem] font-bold text-slate-900 mb-4'>Sample Video Preview</h2>
            <VideoLightbox src='/videos/wedding-sample-1.mp4' poster='/images/indian-wedding-3.jpg' title='Wedding Memory' />
          </div>
          <div className='border border-slate-200 rounded-2xl overflow-hidden shadow-lg'>
            <div className='h-80 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center'>
              <div className='text-center text-white'><Camera className='h-16 w-16 mx-auto mb-4' /><p className='text-lg mb-2'>Camera AR Mode</p><p className='text-sm text-slate-300 px-4'>Image tracking simulator - requires registered target & camera permission</p></div>
            </div>
            <div className='p-4 bg-white'><Button variant='outline' className='w-full'><Camera className='h-4 w-4 mr-2' />Start Camera AR (Simulated)</Button></div>
          </div>
        </div>
      </main>
    </div>
  )
}



