import Link from 'next/link'
import { ArrowLeft, HardDrive } from 'lucide-react'

export default function StorageUsagePage() {
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
        <h1 className='text-[1.5rem] font-bold text-slate-900 mb-6'>Storage Usage</h1>
        <div className='bg-white rounded-lg border border-slate-200 p-6 mb-6'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-[1.5rem] font-semibold text-slate-900 flex items-center gap-2'><HardDrive className='h-5 w-5' />Storage</h2>
            <p className='text-slate-600'>45 MB / 100 MB used (Free Plan)</p>
          </div>
          <div className='w-full bg-slate-200 rounded-full h-2'><div className='bg-blue-600 h-2 rounded-full' style={{width: '45%'}}></div></div>
        </div>
      </main>
    </div>
  )
}


