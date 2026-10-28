import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CreditCard, Video, Globe, MessageCircle, Mail, UserPlus } from 'lucide-react'

export default function VisitingCardDemoPage() {
  return (
    <div className='min-h-screen bg-white'>
      <main className='container mx-auto px-4 py-12 max-w-5xl'>
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-4'><CreditCard className='h-4 w-4 text-blue-600' /><span className='text-sm font-medium text-blue-700'>Smart Visiting Card Demo</span></div>
          <h1 className='text-[2rem] font-bold text-slate-900 mb-4'>Flip to Reveal Your Digital Profile</h1>
          <p className='text-lg text-slate-600'>Fictional demo data only</p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='[perspective:1000px]'><div className='relative h-64 transition-transform duration-700 hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]'>
            <div className='absolute inset-0 [backface-visibility:hidden]'><img src='/images/business-card-premium.jpg' alt='Business card front' className='w-full h-full object-cover rounded-2xl' /></div>
            <div className='absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white flex flex-col justify-center'><p className='font-bold text-xl mb-2'>TechVision Solutions</p><p className='text-sm opacity-90'>Rajesh Kumar • BD Manager</p><p className='text-xs mt-4 opacity-80'>AR Digital Profile</p></div>
          </div></div>
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



