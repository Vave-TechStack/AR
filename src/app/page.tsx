import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, CreditCard, Package, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <section className='container mx-auto px-4 py-16 lg:py-24 max-w-7xl'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-[clamp(2rem,5vw,3.75rem)] font-bold text-slate-900 mb-6 leading-[1.08]'>Your Memories Deserve More Than a <span className='bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent'>Photograph.</span></h1>
              <p className='text-[17px] text-slate-600 mb-8 leading-relaxed'>Printed photos, visiting cards and product labels become interactive digital experiences.</p>
              <div className='flex flex-col sm:flex-row gap-3'>
                <Button size='lg' className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/demos'>Experience AR Demos <ArrowRight className='ml-2 h-4 w-4' /></Link></Button>
                <Button size='lg' variant='outline' asChild><Link href='/services/wedding-ar'>Explore Our Services</Link></Button>
              </div>
            </div>
            <div><img src='/images/hero-wedding-album.jpg' alt='Wedding album AR' className='w-full h-[420px] object-cover rounded-2xl shadow-xl' /></div>
          </div>
        </section>
        <section className='container mx-auto px-4 py-16 max-w-7xl'>
          <div className='text-center mb-12'><h2 className='text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-slate-900 mb-3'>Interactive Experience Showcase</h2></div>
          <div className='grid md:grid-cols-3 gap-6'>
            <Link href='/services/wedding-ar' className='group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all'><div className='relative h-56'><img src='/images/wedding-1.jpg' alt='Wedding AR' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' /><div className='absolute inset-0 bg-black/30 flex items-center justify-center'><Heart className='h-9 w-9 text-white' /></div></div><div className='p-5'><h3 className='text-lg font-semibold text-slate-900 mb-1'>Wedding Album AR</h3><p className='text-[15px] text-slate-600'>Photo-to-video memories</p></div></Link>
            <Link href='/services/visiting-cards' className='group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all'><div className='relative h-56'><img src='/images/business-card.jpg' alt='Visiting card' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' /><div className='absolute inset-0 bg-black/30 flex items-center justify-center'><CreditCard className='h-9 w-9 text-white' /></div></div><div className='p-5'><h3 className='text-lg font-semibold text-slate-900 mb-1'>Smart Visiting Cards</h3><p className='text-[15px] text-slate-600'>Interactive digital profiles</p></div></Link>
            <Link href='/services/product-labels' className='group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all'><div className='relative h-56'><img src='/images/product-label.jpg' alt='Product label' className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' /><div className='absolute inset-0 bg-black/30 flex items-center justify-center'><Package className='h-9 w-9 text-white' /></div></div><div className='p-5'><h3 className='text-lg font-semibold text-slate-900 mb-1'>AR Product Labels</h3><p className='text-[15px] text-slate-600'>3D & video previews</p></div></Link>
          </div>
        </section>
      </main>
    </div>
  )
}
