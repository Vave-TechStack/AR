import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className='border-b border-slate-200/70 sticky top-0 bg-white/95 backdrop-blur-xl z-50'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
        <Link href='/' className='flex items-center gap-2'>
          <img src='/brand/vavear-icon.svg' alt='VaveAR' className='h-8 w-8' />
          <img src='/brand/vavear-logo.svg' alt='VaveAR by Vave TechStack' className='h-6 hidden sm:block' />
        </Link>
        <nav className='hidden lg:flex items-center gap-7'>
          <Link href='/' className='text-[15px] text-slate-700 hover:text-slate-900'>Home</Link>
          <div className='relative group'>
            <button className='text-[15px] text-slate-700 hover:text-slate-900'>Services ▾</button>
            <div className='absolute hidden group-hover:block top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-lg'>
              <Link href='/services/wedding-ar' className='block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50'>Wedding Album AR</Link>
              <Link href='/services/visiting-cards' className='block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50'>Smart Visiting Cards</Link>
              <Link href='/services/product-labels' className='block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50'>Product Label AR</Link>
            </div>
          </div>
          <Link href='/demos' className='text-[15px] text-slate-700 hover:text-slate-900'>Live Demos</Link>
          <Link href='/how-it-works' className='text-[15px] text-slate-700 hover:text-slate-900'>How It Works</Link>
          <Link href='/about' className='text-[15px] text-slate-700 hover:text-slate-900'>About</Link>
          <Link href='/contact' className='text-[15px] text-slate-700 hover:text-slate-900'>Contact</Link>
          <Link href='/login' className='text-[15px] text-slate-700 hover:text-slate-900'>Login / Demo Dashboard</Link>
        </nav>
        <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/demos'>Experience AR Demos</Link></Button>
      </div>
    </header>
  )
}
