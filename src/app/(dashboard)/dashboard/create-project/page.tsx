import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function CreateProjectPage() {
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
        <h1 className='text-[15px] font-bold text-slate-900 mb-6'>Create Project</h1>
        <form className='bg-white rounded-lg border border-slate-200 p-6 space-y-4'>
          <div>
            <label className='block text-sm font-medium text-slate-700 mb-1'>Project Name</label>
            <input type='text' className='w-full px-3 py-2 border border-slate-300 rounded-md' placeholder='e.g., My Wedding Album' />
          </div>
          <div>
            <label className='block text-sm font-medium text-slate-700 mb-1'>Project Type</label>
            <select className='w-full px-3 py-2 border border-slate-300 rounded-md'>
              <option>Wedding Album AR</option>
              <option>Smart Visiting Cards</option>
              <option>AR Product Labels</option>
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-slate-700 mb-1'>Description</label>
            <textarea rows={4} className='w-full px-3 py-2 border border-slate-300 rounded-md'></textarea>
          </div>
          <Button type='submit'>Create Project</Button>
        </form>
      </main>
    </div>
  )
}
