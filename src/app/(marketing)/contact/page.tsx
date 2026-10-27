import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/contact'>Get a Quote</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16 max-w-2xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>Request a Quote</h1>
        <p className='text-lg text-slate-600 mb-8'>Tell us about your project. This is a demo form.</p>
        <form className='space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div><label className='block text-sm font-medium text-slate-700 mb-1'>Name *</label><input type='text' className='w-full px-3 py-2 border border-slate-300 rounded-lg' required /></div>
            <div><label className='block text-sm font-medium text-slate-700 mb-1'>Business/Company</label><input type='text' className='w-full px-3 py-2 border border-slate-300 rounded-lg' /></div>
          </div>
          <div className='grid md:grid-cols-2 gap-4'>
            <div><label className='block text-sm font-medium text-slate-700 mb-1'>Email *</label><input type='email' className='w-full px-3 py-2 border border-slate-300 rounded-lg' required /></div>
            <div><label className='block text-sm font-medium text-slate-700 mb-1'>Phone</label><input type='tel' className='w-full px-3 py-2 border border-slate-300 rounded-lg' /></div>
          </div>
          <div><label className='block text-sm font-medium text-slate-700 mb-1'>Service *</label>
            <select className='w-full px-3 py-2 border border-slate-300 rounded-lg' required>
              <option value=''>Select a service</option>
              <option>Wedding Photo-to-Video AR</option>
              <option>Smart Visiting Cards</option>
              <option>AR Product Labels</option>
              <option>Other</option>
            </select>
          </div>
          <div><label className='block text-sm font-medium text-slate-700 mb-1'>Requirements</label>
            <textarea rows={4} className='w-full px-3 py-2 border border-slate-300 rounded-lg'></textarea>
          </div>
          <Button className='bg-gradient-to-r from-cyan-600 to-blue-600'>Send Request (Demo)</Button>
          <p className='text-xs text-slate-500'>Demo-only form - no backend/email integration configured</p>
        </form>
      </main>
    </div>
  )
}
