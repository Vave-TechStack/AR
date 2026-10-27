import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CreditCard, Video, Globe, MessageCircle, Mail, UserPlus, Camera } from 'lucide-react'

export default function VisitingCardDemoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <Button asChild><Link href='/demos'>Back to Demos</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-12 max-w-5xl'>
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4'>
            <CreditCard className='h-4 w-4 text-blue-600' />
            <span className='text-sm font-medium text-blue-700'>Smart Visiting Card Demo</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>TechVision Solutions</h1>
          <p className='text-lg text-slate-600'>Rajesh Kumar - Business Development Manager</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='border border-slate-200 rounded-2xl overflow-hidden shadow-xl'>
            <div className='relative h-64'>
              <img src='/images/business-card.jpg' alt='Business card mockup' className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end'>
                <div className='p-4 text-white'>
                  <p className='font-bold text-lg'>TechVision Solutions</p>
                  <p className='text-sm'>AR-Enabled Business Card</p>
                </div>
              </div>
            </div>
            <div className='p-4 bg-white'><Button className='w-full bg-gradient-to-r from-blue-600 to-cyan-600'><Camera className='h-4 w-4 mr-2' />Scan Card AR</Button></div>
          </div>
          <div className='space-y-3'>
            <Button className='w-full justify-start' variant='outline'><Video className='h-4 w-4 mr-3' />Play Intro Video (Demo)</Button>
            <Button className='w-full justify-start' variant='outline'><Globe className='h-4 w-4 mr-3' />Visit Website (Demo)</Button>
            <Button className='w-full justify-start' variant='outline'><MessageCircle className='h-4 w-4 mr-3' />WhatsApp (Demo)</Button>
            <Button className='w-full justify-start' variant='outline'><Mail className='h-4 w-4 mr-3' />Send Email (Demo)</Button>
            <Button className='w-full justify-start' variant='outline'><UserPlus className='h-4 w-4 mr-3' />Save Contact (Demo)</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
