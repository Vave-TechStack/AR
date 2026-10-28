import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, QrCode } from 'lucide-react'

export default function QRCodesPage() {
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
        <Link href='/dashboard/my-weddings' className='flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6'><ArrowLeft className='h-4 w-4' />Back to Project</Link>
        <div className='flex items-center justify-between mb-6'>
          <h1 className='text-[2rem] font-bold text-slate-900'>QR Codes</h1>
          <Button>Generate QR Code</Button>
        </div>
        <div className='bg-white rounded-lg border border-slate-200 p-6'>
          <div className='flex items-start gap-6'>
            <div className='w-48 h-48 bg-slate-100 rounded-lg flex items-center justify-center'>
              <QrCode className='h-24 w-24 text-slate-400' />
            </div>
            <div className='flex-1'>
              <h2 className='text-[2rem] font-semibold text-slate-900 mb-2'>Priya & Rahul — Wedding Memories</h2>
              <p className='text-slate-600 mb-4'>Destination: /experience/WED-PR-001</p>
              <p className='text-sm text-slate-500 mb-4'>Dynamic QR - destination can be changed without regenerating</p>
              <div className='flex gap-2'>
                <Button size='sm' variant='outline'>Copy Link</Button>
                <Button size='sm' variant='outline' asChild><Link href='/experience/WED-PR-001'>Preview</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}



