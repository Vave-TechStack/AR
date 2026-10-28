import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen } from 'lucide-react'

export default function WeddingAlbumARPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <Button asChild><Link href='/register'>Get Started</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='max-w-3xl mx-auto text-center mb-12'>
          <BookOpen className='h-16 w-16 mx-auto mb-4 text-cyan-600' />
          <h1 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Wedding Album AR</h1>
          <p className='text-lg text-slate-600'>Bring wedding memories to life with interactive augmented reality experiences</p>
        </div>
        <div className='bg-slate-50 rounded-xl p-8 mb-12'>
          <h2 className='text-2xl font-semibold text-slate-900 mb-4'>Demo: Priya & Rahul — Wedding Memories</h2>
          <p className='text-slate-600 mb-6'>Scan the target image to reveal video memories from the wedding album</p>
          <div className='aspect-video bg-white rounded-lg border flex items-center justify-center'>
            <p className='text-slate-500'>AR Preview - Demo Sample</p>
          </div>
        </div>
        <div className='text-center'>
          <Button size='lg' asChild><Link href='/register'>Create Your Wedding Album AR</Link></Button>
        </div>
      </main>
    </div>
  )
}
