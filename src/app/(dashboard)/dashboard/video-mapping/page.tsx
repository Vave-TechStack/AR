import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function VideoMappingPage() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='border-b bg-white'>
        <div className='container mx-auto flex h-16 items-center px-4 max-w-7xl'>
          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </div>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8 max-w-7xl'>
        <Link href='/dashboard/image-targets' className='flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6'><ArrowLeft className='h-4 w-4' />Back to Image Targets</Link>
        <h1 className='text-3xl font-bold text-slate-900 mb-6'>Video Mapping</h1>
        <p className='text-slate-600 mb-6'>Associate each registered image target with its video/content. Demo shows labelled previews.</p>
        <div className='bg-white rounded-lg border border-slate-200 p-6'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='p-4 border border-slate-200 rounded-lg'>
              <h3 className='font-semibold text-slate-900 mb-2'>Image Target 1 → Video 1</h3>
              <div className='aspect-video bg-slate-100 rounded mb-2 flex items-center justify-center'>
                <p className='text-slate-500 text-sm'>Demo Preview</p>
              </div>
              <p className='text-xs text-slate-500'>Wedding Memory Clip</p>
            </div>
            <div className='p-4 border border-slate-200 rounded-lg'>
              <h3 className='font-semibold text-slate-900 mb-2'>Image Target 2 → Video 2</h3>
              <div className='aspect-video bg-slate-100 rounded mb-2 flex items-center justify-center'>
                <p className='text-slate-500 text-sm'>Demo Preview</p>
              </div>
              <p className='text-xs text-slate-500'>Ceremony Highlights</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
