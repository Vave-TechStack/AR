import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Play, Smartphone, Heart, CreditCard, Package } from 'lucide-react'

export default function DemosPage() {
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <section className='container mx-auto px-4 py-16 lg:py-24 max-w-7xl'>
          <div className='text-center mb-16'>
            <h1 className='text-[clamp(2.25rem,6vw,4rem)] font-bold text-slate-900 mb-4 leading-tight'>Bring Celebrations to Life with <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>WebAR</span></h1>
            <p className='text-lg md:text-xl text-slate-600 max-w-2xl mx-auto'>Real wedding memories, premium visiting cards and interactive product labels come alive in your browser.</p>
          </div>
          <div className='space-y-16'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='relative'>
                <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                  <img src='/images/indian-wedding-1.jpg' alt='Indian wedding couple' className='w-full h-[420px] object-cover' />
                  <div className='absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg'><Heart className='h-4 w-4 text-rose-600' /><span className='text-sm font-medium'>Wedding Memories</span></div>
                </div>
                <div className='absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-3 hidden md:block'><img src='/images/indian-wedding-2.jpg' alt='Wedding photo' className='w-32 h-24 object-cover rounded-lg' /></div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-4'><Heart className='h-5 w-5 text-rose-600' /><span className='text-sm font-medium text-rose-700'>Wedding Photo-to-Video AR</span></div>
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Printed Photos That Play Video Memories</h2>
                <p className='text-lg text-slate-600 mb-6'>Scan a printed wedding photo to reveal heartfelt video messages, rituals and candid moments.</p>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <Button size='lg' className='bg-gradient-to-r from-rose-600 to-pink-600' asChild><Link href='/demos/wedding'>Try Wedding Demo</Link></Button>
                  <Button size='lg' variant='outline' asChild><Link href='/services/wedding-ar'>View Service</Link></Button>
                </div>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='order-2 lg:order-1'>
                <div className='flex items-center gap-2 mb-4'><CreditCard className='h-5 w-5 text-blue-600' /><span className='text-sm font-medium text-blue-700'>Smart Visiting Card AR</span></div>
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Your Card Becomes Your Digital Profile</h2>
                <p className='text-lg text-slate-600 mb-6'>Premium business cards reveal video introductions, website, contact details and instant actions on scan.</p>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <Button size='lg' className='bg-gradient-to-r from-blue-600 to-cyan-600' asChild><Link href='/demos/visiting-card'>Try Visiting Card Demo</Link></Button>
                  <Button size='lg' variant='outline' asChild><Link href='/services/visiting-cards'>View Service</Link></Button>
                </div>
              </div>
              <div className='order-1 lg:order-2 relative'>
                <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                  <img src='/images/business-card-premium.jpg' alt='Premium business card' className='w-full h-[420px] object-cover' />
                  <div className='absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg'><Smartphone className='h-4 w-4 text-blue-600' /><span className='text-sm font-medium'>Interactive Profile</span></div>
                </div>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
              <div className='relative'>
                <div className='relative rounded-3xl overflow-hidden shadow-2xl'>
                  <img src='/images/skincare-bottle.jpg' alt='Premium skincare bottle' className='w-full h-[420px] object-cover' />
                  <div className='absolute bottom-4 left-4 bg-white/95 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg'><Package className='h-4 w-4 text-purple-600' /><span className='text-sm font-medium'>AR Product Label</span></div>
                </div>
              </div>
              <div>
                <div className='flex items-center gap-2 mb-4'><Package className='h-5 w-5 text-purple-600' /><span className='text-sm font-medium text-purple-700'>AR Product Label</span></div>
                <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>Packaging That Tells a Story</h2>
                <p className='text-lg text-slate-600 mb-6'>Scan product labels to reveal 3D visuals, usage demos, offers and engaging content.</p>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <Button size='lg' className='bg-gradient-to-r from-purple-600 to-pink-600' asChild><Link href='/demos/product-label'>Try Product Label Demo</Link></Button>
                  <Button size='lg' variant='outline' asChild><Link href='/services/product-labels'>View Service</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
