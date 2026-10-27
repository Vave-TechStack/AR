'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className='border-b border-slate-200/70 sticky top-0 bg-white/95 backdrop-blur-xl z-[100]'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
        <Link href='/' className='flex items-center'>
          <img src='/VaveAR Tech Logo Banner.png' alt='VaveAR by Vave TechStack' className='h-9 w-auto object-contain' />
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
          <Link href='/about' className='text-[15px] text-slate-700 hover:text-slate-900'>About</Link>
          <Link href='/contact' className='text-[15px] text-slate-700 hover:text-slate-900'>Contact</Link>
          <Link href='/login' className='text-[15px] text-slate-700 hover:text-slate-900'>Login / Demo Dashboard</Link>
        </nav>
        <div className='flex items-center gap-2'>
          <Button className='hidden sm:flex bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/demos'>Experience AR Demos</Link></Button>
          <button className='lg:hidden p-2' onClick={() => setOpen(!open)} aria-label='Menu'>{open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}</button>
        </div>
      </div>
      {open && (
        <div className='lg:hidden border-t border-slate-200 bg-white'>
          <nav className='container mx-auto px-4 py-3 flex flex-col gap-2'>
            <Link href='/' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Home</Link>
            <Link href='/services/wedding-ar' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Wedding Album AR</Link>
            <Link href='/services/visiting-cards' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Smart Visiting Cards</Link>
            <Link href='/services/product-labels' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Product Label AR</Link>
            <Link href='/demos' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Live Demos</Link>
            <Link href='/about' onClick={() => setOpen(false)} className='py-2 text-slate-700'>About</Link>
            <Link href='/contact' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Contact</Link>
            <Link href='/login' onClick={() => setOpen(false)} className='py-2 text-slate-700'>Login / Demo Dashboard</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
