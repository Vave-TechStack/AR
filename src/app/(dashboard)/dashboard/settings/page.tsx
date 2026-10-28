import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SettingsPage() {
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
      <main className='container mx-auto px-4 py-8 max-w-2xl'>
        <Link href='/dashboard' className='flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6'><ArrowLeft className='h-4 w-4' />Back to Dashboard</Link>
        <h1 className='text-[15px] font-bold text-slate-900 mb-6'>Settings</h1>
        <div className='bg-white rounded-lg border border-slate-200 p-6'>
          <h2 className='text-[15px] font-semibold text-slate-900 mb-4'>Account Settings</h2>
          <Button variant='outline'>Change Password</Button>
        </div>
      </main>
    </div>
  )
}
