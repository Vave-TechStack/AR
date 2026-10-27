'use client'

import { useState } from 'react'

export function BeforeAfter({ before, after, labelBefore = 'Printed Photo', labelAfter = 'Video Memory' }: { before: string; after: string; labelBefore?: string; labelAfter?: string }) {
  const [pos, setPos] = useState(50)
  return (
    <div className='relative w-full h-[420px] rounded-2xl overflow-hidden select-none'>
      <img src={before} alt={labelBefore} className='absolute inset-0 w-full h-full object-cover' />
      <div className='absolute inset-0 overflow-hidden' style={{ clipPath: 'inset(0 ' + (100 - pos) + '% 0 0)' }}>
        <img src={after} alt={labelAfter} className='w-full h-full object-cover' />
      </div>
      <input type='range' min='0' max='100' value={pos} onChange={(e) => setPos(Number(e.target.value))} className='absolute bottom-4 left-1/2 -translate-x-1/2 w-2/3' />
      <div className='absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs'>{labelBefore}</div>
      <div className='absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs'>{labelAfter}</div>
    </div>
  )
}
