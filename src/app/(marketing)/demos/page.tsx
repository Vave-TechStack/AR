import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, CreditCard, Package, Camera } from 'lucide-react'

export default function DemosPage() {
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
            <Link href='/demos' className='text-slate-900 font-medium'>Live Demos</Link>
            <Link href='/how-it-works' className='text-slate-700 hover:text-slate-900 font-medium'>How It Works</Link>
            <Link href='/pricing' className='text-slate-700 hover:text-slate-900 font-medium'>Pricing</Link>
            <Link href='/about' className='text-slate-700 hover:text-slate-900 font-medium'>About</Link>
            <Link href='/contact' className='text-slate-700 hover:text-slate-900 font-medium'>Contact</Link>
          </nav>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' asChild><Link href='/login'>Login</Link></Button>
            <Button className='bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700' asChild><Link href='/contact'>Get a Quote</Link></Button>
          </div>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>Live AR Demos</h1>
          <p className='text-lg text-slate-600 max-w-2xl mx-auto'>Try our working WebAR demos. Sample mode works in any browser - camera AR requires device support.</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <Link href='/demos/wedding' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white'>
            <div className='h-56 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100 flex items-center justify-center relative'>
              <Heart className='h-16 w-16 text-rose-600 group-hover:scale-110 transition-transform' />
              <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700'>Wedding AR</div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>Wedding Photo-to-Video AR</h2>
              <p className='text-slate-600 mb-4'>Scan printed wedding photos to reveal video memories</p>
              <span className='text-blue-600 font-medium group-hover:underline'>Try Demo →</span>
            </div>
          </Link>
          <Link href='/demos/visiting-card' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white'>
            <div className='h-56 bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 flex items-center justify-center relative'>
              <CreditCard className='h-16 w-16 text-blue-600 group-hover:scale-110 transition-transform' />
              <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700'>Visiting Card</div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>Smart Visiting Card AR</h2>
              <p className='text-slate-600 mb-4'>Interactive business card with video, links and contact</p>
              <span className='text-blue-600 font-medium group-hover:underline'>Try Demo →</span>
            </div>
          </Link>
          <Link href='/demos/product-label' className='group border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white'>
            <div className='h-56 bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-100 flex items-center justify-center relative'>
              <Package className='h-16 w-16 text-purple-600 group-hover:scale-110 transition-transform' />
              <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700'>Product Label</div>
            </div>
            <div className='p-6'>
              <h2 className='text-xl font-semibold text-slate-900 mb-2'>AR Product Label</h2>
              <p className='text-slate-600 mb-4'>Bring product packaging to life with 3D and video</p>
              <span className='text-blue-600 font-medium group-hover:underline'>Try Demo →</span>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
