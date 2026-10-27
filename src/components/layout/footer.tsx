import Link from 'next/link'

export function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-slate-50'>
      <div className='container mx-auto px-4 py-10 max-w-7xl'>
        <div className='flex items-center justify-between flex-wrap gap-4'>
          <img src='/VaveAR Tech Logo Banner.png' alt='VaveAR by Vave TechStack' className='h-9 w-auto object-contain' />
          <div className='flex gap-6 text-sm text-slate-600 flex-wrap'>
            <Link href='/services/wedding-ar' className='hover:text-slate-900'>Wedding AR</Link>
            <Link href='/services/visiting-cards' className='hover:text-slate-900'>Visiting Cards</Link>
            <Link href='/services/product-labels' className='hover:text-slate-900'>Product Labels</Link>
            <Link href='/demos' className='hover:text-slate-900'>Live Demos</Link>
            <Link href='/contact' className='hover:text-slate-900'>Contact</Link>
          </div>
        </div>
        <div className='mt-6 pt-6 border-t border-slate-200 text-center text-sm text-slate-600'>
          <p>&copy; 2026 Vave TechStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
