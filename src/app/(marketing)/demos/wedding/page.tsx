import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Camera, Play, Heart, X, Pause, Volume2 } from 'lucide-react'

export default function WeddingDemoPage() {
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
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full mb-4'><Heart className='h-4 w-4 text-rose-600' /><span className='text-sm font-medium text-rose-700'>Wedding Photo-to-Video AR Demo</span></div>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>Interactive Wedding Photo Demo</h1>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>Select a photo below to play its matching video. Camera AR available with image tracking.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-6 mb-10'>
          <div className='group cursor-pointer border-2 border-slate-200 rounded-xl overflow-hidden hover:border-rose-400 transition-all'>
            <div className='relative h-64'>
              <img src='/images/wedding-1.jpg' alt='Wedding photo 1' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all'><Play className='h-12 w-12 text-white' /></div>
            </div>
            <div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>Wedding Moment 1</p></div>
          </div>
          <div className='group cursor-pointer border-2 border-slate-200 rounded-xl overflow-hidden hover:border-rose-400 transition-all'>
            <div className='relative h-64'>
              <img src='/images/wedding-2.jpg' alt='Wedding photo 2' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all'><Play className='h-12 w-12 text-white' /></div>
            </div>
            <div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>Wedding Moment 2</p></div>
          </div>
          <div className='group cursor-pointer border-2 border-slate-200 rounded-xl overflow-hidden hover:border-rose-400 transition-all'>
            <div className='relative h-64'>
              <img src='/images/wedding-3.jpg' alt='Wedding photo 3' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all'><Play className='h-12 w-12 text-white' /></div>
            </div>
            <div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>Wedding Moment 3</p></div>
          </div>
        </div>
        <div className='grid lg:grid-cols-2 gap-8 mb-8'>
          <div className='border border-slate-200 rounded-2xl overflow-hidden shadow-lg'>
            <div className='p-4 bg-slate-900 text-white flex items-center justify-between'><p className='font-medium'>Sample Video Player</p></div>
            <video src='/videos/wedding-sample-1.mp4' controls className='w-full h-80 bg-black'></video>
            <div className='p-4 bg-white'><p className='text-sm text-slate-600'>Play/pause, mute, replay, fullscreen available via controls</p></div>
          </div>
          <div className='border border-slate-200 rounded-2xl overflow-hidden shadow-lg'>
            <div className='h-80 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center'>
              <div className='text-center text-white'><Camera className='h-16 w-16 mx-auto mb-4' /><p className='text-lg mb-2'>Camera AR Mode</p><p className='text-sm text-slate-300 px-4'>MindAR image tracking - requires camera & registered target</p></div>
            </div>
            <div className='p-4 bg-white'><Button variant='outline' className='w-full'><Camera className='h-4 w-4 mr-2' />Start Camera AR</Button><p className='text-xs text-slate-500 mt-2'>Honest fallback: sample video mode works without camera</p></div>
          </div>
        </div>
      </main>
    </div>
  )
}
