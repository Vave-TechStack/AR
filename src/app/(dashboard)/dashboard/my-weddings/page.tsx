import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function MyWeddingsPage() {
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
        <h1 className='text-[2rem] font-bold text-slate-900 mb-6'>My Weddings/Projects</h1>
        <div className='bg-white rounded-lg border border-slate-200 p-6'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <h2 className='text-[2rem] font-semibold text-slate-900'>Priya & Rahul — Wedding Memories</h2>
              <p className='text-slate-600'>Wedding Album AR • Status: Published</p>
            </div>
            <div className='flex gap-2'>
              <Button variant='outline' size='sm' asChild><Link href='/dashboard/image-targets'>Image Targets (30)</Link></Button>
              <Button variant='outline' size='sm' asChild><Link href='/dashboard/video-mapping'>Video Mapping</Link></Button>
              <Button size='sm' asChild><Link href='/dashboard/qr-codes'>QR Codes</Link></Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}



