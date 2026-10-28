import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedHero } from '@/components/hero/animated-hero'
import { Heart, CreditCard, Package, ArrowRight } from 'lucide-react'

export default function MarketingHome() {
  return (
    <div className='min-h-screen bg-white'>
      <main>
        <AnimatedHero />
        <section className='container mx-auto px-4 py-20 max-w-7xl'>
          <div className='text-center mb-16'>
            <h2 className='text-[15px] font-bold text-slate-900 mb-4'>A Photo Is Only The Beginning</h2>
            <p className='text-xl text-slate-600 max-w-2xl mx-auto'>Three immersive ways to bring your printed media to life</p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <Link href='/services/wedding-ar' className='group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all'>
              <img src='/images/indian-wedding-1.jpg' alt='Wedding AR' className='w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent'><div className='absolute bottom-8 left-6 right-6 text-white'><Heart className='h-9 w-9 mb-3' /><h3 className='text-[15px] font-bold mb-2'>Wedding Photo-to-Video AR</h3><p className='text-white/90 mb-4'>Relive haldi, sangeet & wedding moments</p><span className='inline-flex items-center text-white font-medium'>Explore <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' /></span></div></div>
            </Link>
            <Link href='/services/visiting-cards' className='group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all'>
              <img src='/images/business-card-premium.jpg' alt='Visiting card AR' className='w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent'><div className='absolute bottom-8 left-6 right-6 text-white'><CreditCard className='h-9 w-9 mb-3' /><h3 className='text-[15px] font-bold mb-2'>Smart Visiting Cards</h3><p className='text-white/90 mb-4'>Video profile in one scan</p><span className='inline-flex items-center text-white font-medium'>Explore <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' /></span></div></div>
            </Link>
            <Link href='/services/product-labels' className='group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all'>
              <img src='/images/skincare-bottle.jpg' alt='Product label AR' className='w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent'><div className='absolute bottom-8 left-6 right-6 text-white'><Package className='h-9 w-9 mb-3' /><h3 className='text-[15px] font-bold mb-2'>AR Product Labels</h3><p className='text-white/90 mb-4'>3D & video on packaging</p><span className='inline-flex items-center text-white font-medium'>Explore <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' /></span></div></div>
            </Link>
          </div>
        </section>
        <section className='bg-gradient-to-r from-cyan-600 to-blue-600 py-16 text-center text-white'>
          <div className='container mx-auto px-4'><h2 className='text-[15px] font-bold mb-4'>Ready to Bring Your Media to Life?</h2><p className='text-xl opacity-90 mb-8'>Experience our live AR demos today</p><Button size='lg' variant='secondary' asChild><Link href='/demos'>Explore Live Demos</Link></Button></div>
        </section>
      </main>
    </div>
  )
}
