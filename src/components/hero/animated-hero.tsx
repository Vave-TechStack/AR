'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, ScanLine } from 'lucide-react'

export function AnimatedHero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-white via-cyan-50/20 to-blue-50/30'></div>
      <div className='absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl'></div>
      <div className='container relative mx-auto px-4 py-6 lg:py-12 max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='max-w-2xl'>
            <div className='inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-50 border border-cyan-100 rounded-full mb-6 text-xs font-medium text-cyan-600 uppercase tracking-wider'>
              <ScanLine className='h-3 w-3' />
              <span>WebAR Studio</span>
            </div>
            <h1 className='text-[2rem] font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight'>Your Memories Deserve More Than{' '}
              <span className='bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent'>
                a Photograph
              </span>
            </h1>
            <p className='text-lg text-slate-600 mb-10 leading-relaxed max-w-xl'>Turn printed photos, visiting cards and product labels into interactive WebAR experiences — video, links and content, right in your browser.</p>
            <div className='flex flex-col sm:flex-row gap-3'>
              <Button size='lg' className='bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 shadow-xl shadow-cyan-500/25 px-8 py-4 text-base font-medium rounded-xl transition-all' asChild>
                <Link href='/demos'>Experience AR Demos <ArrowRight className='ml-2 h-5 w-5' /></Link>
              </Button>
              <Button size='lg' variant='outline' className='border border-slate-200 bg-white hover:bg-slate-50 px-8 py-4 text-base font-medium text-slate-700 rounded-xl transition-all' asChild>
                <Link href='/services/wedding-ar'>Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className='relative'>
            <div className='relative rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-slate-200/50'>
              <img src='/images/hero-wedding-album.jpg' alt='Premium wedding album with AR experience' className='w-full h-[520px] object-cover' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 flex items-center justify-between'>
                <div className='bg-white border border-slate-200 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg'><div className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' /><span className='text-sm font-medium text-slate-700'>Live Demo Available</span></div>
                <Link href='/demos/wedding' className='w-14 h-14 rounded-full bg-white border border-slate-200 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 transition-transform'><Play className='h-6 w-6 text-rose-600 ml-0.5' /></Link>
              </div>
            </div>
            <div className='absolute -top-4 -left-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 hidden lg:block'><img src='/images/indian-wedding-1.jpg' alt='Wedding photo' className='w-40 h-28 object-cover rounded-lg' /></div>
          </div>
        </div>
      </div>
    </section>
  )
}
