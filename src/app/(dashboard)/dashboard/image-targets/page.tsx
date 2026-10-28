import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Upload } from 'lucide-react'

export default function ImageTargetsPage() {
  const targets = []
  for (let i = 1; i <= 30; i++) { targets.push({ id: i, name: 'Image Target ' + i, status: 'Mapped' }) }
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
          <h1 className='text-[15px] font-bold text-slate-900'>Image Targets</h1>
          <Button><Upload className='h-4 w-4 mr-2' />Upload Targets</Button>
        </div>
        <p className='text-slate-600 mb-6'>Priya & Rahul — Wedding Memories • 30 sample image-target records</p>
        <div className='bg-white rounded-lg border border-slate-200 overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-slate-50 border-b'>
              <tr>
                <th className='text-left p-4 text-sm font-medium text-slate-700'>#</th>
                <th className='text-left p-4 text-sm font-medium text-slate-700'>Image Target</th>
                <th className='text-left p-4 text-sm font-medium text-slate-700'>Status</th>
                <th className='text-left p-4 text-sm font-medium text-slate-700'>Video Mapping</th>
              </tr>
            </thead>
            <tbody>
              {targets.slice(0,10).map(function(t){ return (
                <tr key={t.id} className='border-b'>
                  <td className='p-4 text-slate-600'>{t.id}</td>
                  <td className='p-4 text-slate-900 font-medium'>{t.name}</td>
                  <td className='p-4'><span className='px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full'>Mapped</span></td>
                  <td className='p-4'><Button size='sm' variant='outline' asChild><Link href='/dashboard/video-mapping'>Configure</Link></Button></td>
                </tr>
              )})}
            </tbody>
          </table>
          <div className='p-4 text-center text-slate-600'>Showing 10 of 30 image targets (demo)</div>
        </div>
      </main>
    </div>
  )
}
