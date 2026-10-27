import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, CreditCard, Package, Camera, Play, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-50'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <nav className='hidden lg:flex items-center gap-6'>
            <Link href='/services/wedding-ar' className='text-slate-700 hover:text-slate-900 font-medium'>Services</Link>
            <Link href='/demos' className='text-slate-700 hover:text-slate-900 font-medium'>Live Demos</Link>
            <Link href='/how-it-works' className='text-slate-700 hover:text-slate-900 font-medium'>How It Works</Link>
            <Link href='/about' className='text-slate-700 hover:text-slate-900 font-medium'>About</Link>
            <Link href='/contact' className='text-slate-700 hover:text-slate-900 font-medium'>Contact</Link>
          </nav>
          <Button className='bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600' asChild><Link href='/demos'>Explore Live Demos</Link></Button>
        </div>
      </header>
      <main>
        <section className='container mx-auto px-4 py-16 max-w-7xl'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight'>Bring Moments to Life with <span className='bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 bg-clip-text text-transparent'>WebAR</span></h1>
              <p className='text-xl text-slate-600 mb-8'>Premium WebAR agency - Wedding albums, smart visiting cards and product labels come alive in the browser.</p>
              <Button size='lg' className='bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600' asChild><Link href='/demos/wedding'>Try Wedding AR Demo <ArrowRight className='ml-2 h-4 w-4' /></Link></Button>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-3xl opacity-20'></div>
              <div className='relative bg-white rounded-3xl p-4 shadow-2xl border border-slate-200'>
                <img src='/images/wedding-1.jpg' alt='Wedding photo with AR preview' className='w-full h-80 object-cover rounded-2xl' />
                <div className='absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg'><Play className='h-8 w-8 text-rose-600' /></div>
              </div>
            </div>
          </div>
        </section>
        <section className='container mx-auto px-4 py-16 max-w-7xl'>
          <div className='text-center mb-12'><h2 className='text-4xl font-bold text-slate-900 mb-4'>Interactive Demos</h2></div>
          <div className='grid md:grid-cols-3 gap-6'>
            <Link href='/demos/wedding' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all'><div className='relative h-48'><img src='/images/wedding-2.jpg' alt='Wedding AR' className='w-full h-full object-cover' /><div className='absolute inset-0 bg-black/30 flex items-center justify-center'><Heart className='h-10 w-10 text-white' /></div></div><div className='p-4'><h3 className='font-semibold text-slate-900 mb-1'>Wedding Photo-to-Video AR</h3><p className='text-sm text-slate-600'>Play matching videos</p></div></Link>
            <Link href='/demos/visiting-card' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all'><div className='relative h-48'><img src='/images/business-card.jpg' alt='Visiting card' className='w-full h-full object-cover' /><div className='absolute inset-0 bg-black/30 flex items-center justify-center'><CreditCard className='h-10 w-10 text-white' /></div></div><div className='p-4'><h3 className='font-semibold text-slate-900 mb-1'>Smart Visiting Card</h3><p className='text-sm text-slate-600'>Interactive business card</p></div></Link>
            <Link href='/demos/product-label' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all'><div className='relative h-48'><img src='/images/product-label.jpg' alt='Product label' className='w-full h-full object-cover' /><div className='absolute inset-0 bg-black/30 flex items-center justify-center'><Package className='h-10 w-10 text-white' /></div></div><div className='p-4'><h3 className='font-semibold text-slate-900 mb-1'>AR Product Label</h3><p className='text-sm text-slate-600'>3D & video preview</p></div></Link>
          </div>
        </section>
      </main>
      <footer className='border-t border-slate-200 py-8'><div className='container mx-auto px-4 text-center text-slate-600'><p>&copy; 2026 Vave TechStack. All rights reserved.</p></div></footer>
    </div>
  )
}
