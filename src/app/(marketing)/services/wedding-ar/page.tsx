import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Camera, Play } from 'lucide-react'

export default function WeddingARServicePage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <img src='/brand/vavear-icon.svg' alt='VaveAR' className='h-8 w-8' />
            <img src='/brand/vavear-logo.svg' alt='VaveAR' className='h-6 hidden sm:block' />
          </Link>
          <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/demos/wedding'>Try Demo</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-12 max-w-7xl'>
        <div className='mb-10'><div className='inline-flex items-center gap-2 px-3 py-1.5 bg-rose-50 rounded-full mb-3'><Heart className='h-4 w-4 text-rose-600' /><span className='text-sm text-rose-700'>Wedding Album AR</span></div>
          <h1 className='text-[clamp(1.75rem,5vw,2rem)] font-bold text-slate-900 mb-3'>Wedding Photo-to-Video AR</h1>
          <p className='text-[17px] text-slate-600 max-w-2xl'>Bring printed wedding photos to life with video memories.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-4 mb-10'>
          <div className='rounded-xl overflow-hidden border border-slate-200'><img src='/images/wedding-1.jpg' alt='Wedding sample 1' className='w-full h-56 object-cover' /><div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>Sample 1</p></div></div>
          <div className='rounded-xl overflow-hidden border border-slate-200'><img src='/images/wedding-2.jpg' alt='Wedding sample 2' className='w-full h-56 object-cover' /><div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>Sample 2</p></div></div>
          <div className='rounded-xl overflow-hidden border border-slate-200'><img src='/images/wedding-3.jpg' alt='Wedding sample 3' className='w-full h-56 object-cover' /><div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>Sample 3</p></div></div>
        </div>
        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='border border-slate-200 rounded-xl overflow-hidden'><video src='/videos/wedding-sample-1.mp4' controls className='w-full h-72 bg-black'></video><div className='p-3 bg-white'><p className='text-sm text-slate-600'>Playable sample video</p></div></div>
          <div className='border border-slate-200 rounded-xl p-6 bg-slate-50'><Camera className='h-8 w-8 text-slate-700 mb-3' /><h3 className='text-lg font-semibold text-slate-900 mb-2'>Camera AR</h3><p className='text-[15px] text-slate-600 mb-4'>MindAR image tracking entry point with honest fallback if not configured.</p><Button variant='outline' asChild><Link href='/demos/wedding'>Open Demo</Link></Button></div>
        </div>
      </main>
    </div>
  )
}
