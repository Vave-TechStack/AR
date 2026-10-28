import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'

export default function VisitingCardsServicePage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <img src='/brand/vavear-icon.svg' alt='VaveAR' className='h-8 w-8' />
            <img src='/brand/vavear-logo.svg' alt='VaveAR' className='h-6 hidden sm:block' />
          </Link>
          <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/demos/visiting-card'>Try Demo</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-12 max-w-7xl'>
        <div className='mb-10'><div className='inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-3'><CreditCard className='h-4 w-4 text-blue-600' /><span className='text-sm text-blue-700'>Smart Visiting Cards</span></div>
          <h1 className='text-[1.5rem] font-bold text-slate-900 mb-3'>Interactive AR Business Cards</h1>
          <p className='text-[17px] text-slate-600 max-w-2xl'>Video intro, website, contact and actions in one scan.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-4 mb-10'>
          <div className='rounded-xl overflow-hidden border border-slate-200'><img src='/images/business-card.jpg' alt='Visiting card sample' className='w-full h-56 object-cover' /><div className='p-3 bg-white'><p className='text-sm font-medium text-slate-900'>TechVision Solutions</p></div></div>
          <div className='rounded-xl overflow-hidden border border-slate-200 bg-gradient-to-br from-blue-600 to-cyan-600 p-6 text-white'><p className='font-bold text-lg mb-1'>Digital Profile</p><p className='text-sm opacity-90'>Video • Website • Contact</p></div>
          <div className='rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-6'><p className='font-semibold text-slate-900 mb-2'>Actions</p><p className='text-sm text-slate-600'>WhatsApp, Email, Save Contact</p></div>
        </div>
      </main>
    </div>
  )
}


