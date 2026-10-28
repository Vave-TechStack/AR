import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Page() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='border-b bg-white'>
        <div className='container mx-auto flex h-16 items-center px-4 max-w-7xl'>
          <span className='text-xl font-bold text-slate-900'>VaveAR Admin</span>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8 max-w-7xl'>
        <Link href='/admin' className='flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6'><ArrowLeft className='h-4 w-4' />Back to Admin</Link>
        <h1 className='text-[15px] font-bold text-slate-900 mb-6'>Admin Management</h1>
        <div className='bg-white rounded-lg border border-slate-200 p-6'><p className='text-slate-600'>Demo management interface</p></div>
      </main>
    </div>
  )
}
