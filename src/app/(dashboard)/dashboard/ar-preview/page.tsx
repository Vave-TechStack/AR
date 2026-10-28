import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Camera } from 'lucide-react'

export default function ARPreviewPage() {
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
        <Link href='/dashboard' className='flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6'><ArrowLeft className='h-4 w-4' />Back to Dashboard</Link>
        <h1 className='text-[1.5rem] font-bold text-slate-900 mb-6'>AR Preview</h1>
        <div className='bg-black rounded-lg aspect-video flex items-center justify-center mb-4'>
          <div className='text-center text-white'>
            <Camera className='h-16 w-16 mx-auto mb-4' />
            <p className='text-lg'>AR Camera View</p>
            <p className='text-sm text-gray-400'>Demo Preview - Normal browser fallback available</p>
          </div>
        </div>
        <div className='bg-white rounded-lg border border-slate-200 p-4'>
          <p className='text-slate-600'>In production, this would use MindAR for image tracking. Fallback content shown for browser without camera support.</p>
        </div>
      </main>
    </div>
  )
}


