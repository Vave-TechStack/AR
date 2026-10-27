'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, ScanLine } from 'lucide-react'

export function AnimatedHero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30'></div>
      <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl'></div>
      <div className='container relative mx-auto px-4 py-20 lg:py-28 max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <div className='inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full mb-6'><ScanLine className='h-4 w-4 text-cyan-600' /><span className='text-sm font-medium text-cyan-700'>WebAR Studio</span></div>
            <h1 className='text-[clamp(2.5rem,7vw,5rem)] font-bold text-slate-900 mb-6 leading-[1.05] tracking-tight'>Your Memories Deserve More Than a <span className='bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>Photograph.</span></h1>
            <p className='text-xl text-slate-600 mb-10 leading-relaxed max-w-xl'>Printed photos, premium visiting cards and product labels become interactive digital experiences - video, links and content right in your browser.</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button size='lg' className='bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 h-14 shadow-xl shadow-cyan-500/25' asChild><Link href='/demos'>Experience AR Demos <ArrowRight className='ml-2 h-5 w-5' /></Link></Button>
              <Button size='lg' variant='outline' className='text-lg px-8 h-14' asChild><Link href='/services/wedding-ar'>Explore Services</Link></Button>
            </div>
          </div>
          <div className='relative'>
            <div className='relative rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)]'>
              <img src='/images/hero-wedding-album.jpg' alt='Premium wedding album with AR experience' className='w-full h-[520px] object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 flex items-center justify-between'>
                <div className='bg-white/95 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg'><div className='w-2 h-2 rounded-full bg-green-500'></div><span className='text-sm font-medium'>Live Demo Available</span></div>
                <Link href='/demos/wedding' className='w-14 h-14 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 transition-transform'><Play className='h-6 w-6 text-rose-600 ml-0.5' /></Link>
              </div>
            </div>
            <div className='absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 hidden lg:block'><img src='/images/indian-wedding-1.jpg' alt='Wedding photo' className='w-40 h-28 object-cover rounded-lg' /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
