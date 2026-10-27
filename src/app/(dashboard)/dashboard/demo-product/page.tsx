import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Page() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='bg-white border-b border-slate-200 px-6 py-4'>
        <div className='flex items-center gap-4'>
          <Link href='/dashboard'><ArrowLeft className='h-5 w-5 text-slate-600' /></Link>
          <h1 className='text-xl font-bold text-slate-900'>Demo Page</h1>
        </div>
      </header>
      <main className='p-6'>
        <div className='bg-white rounded-xl border border-slate-200 p-6'><p className='text-slate-600'>Demo content - sample data</p></div>
      </main>
    </div>
  )
}
