'use client'

import { useState } from 'react'
import { X, Play } from 'lucide-react'

export function VideoLightbox({ src, poster, title }: { src: string; poster?: string; title?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)} className='relative group rounded-2xl overflow-hidden shadow-xl'>
        <img src={poster || '/images/indian-wedding-1.jpg'} alt={title || 'Demo video'} className='w-full h-[320px] object-cover' />
        <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all'>
          <div className='w-16 h-16 rounded-full bg-white/90 flex items-center justify-center'><Play className='h-7 w-7 text-rose-600 ml-1' /></div>
        </div>
      </button>
      {open && (
        <div className='fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4' onClick={() => setOpen(false)}>
          <button className='absolute top-4 right-4 text-white'><X className='h-6 w-6' /></button>
          <video src={src} controls autoPlay className='max-w-4xl w-full max-h-[90vh] rounded-lg' onClick={(e) => e.stopPropagation()}></video>
        </div>
      )}
    </>
  )
}
