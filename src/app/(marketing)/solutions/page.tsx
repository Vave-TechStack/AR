import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BookOpen, CreditCard, Layers } from 'lucide-react'

export default function SolutionsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b border-slate-200'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
          <nav className='hidden md:flex items-center gap-6'>
            <Link href='/solutions' className='text-slate-900 font-medium'>Solutions</Link>
            <Link href='/how-it-works' className='text-slate-700 hover:text-slate-900'>How It Works</Link>
            <Link href='/pricing' className='text-slate-700 hover:text-slate-900'>Pricing</Link>
          </nav>
          <Button asChild><Link href='/register'>Get Started</Link></Button>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16 max-w-7xl'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>AR Solutions</h1>
          <p className='text-lg text-slate-600'>Choose the perfect WebAR solution for your use case</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <Link href='/wedding-album-ar' className='p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-white'>
            <BookOpen className='h-12 w-12 mb-4 text-cyan-600' />
            <h2 className='text-2xl font-semibold text-slate-900 mb-2'>Wedding Album AR</h2>
            <p className='text-slate-600 mb-4'>Bring wedding memories to life with interactive AR overlays</p>
            <span className='text-blue-600 font-medium'>Learn More →</span>
          </Link>
          <Link href='/smart-visiting-cards' className='p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-white'>
            <CreditCard className='h-12 w-12 mb-4 text-blue-600' />
            <h2 className='text-2xl font-semibold text-slate-900 mb-2'>Smart Visiting Cards</h2>
            <p className='text-slate-600 mb-4'>Turn business cards into interactive AR experiences</p>
            <span className='text-blue-600 font-medium'>Learn More →</span>
          </Link>
          <Link href='/ar-product-labels' className='p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow bg-white'>
            <Layers className='h-12 w-12 mb-4 text-cyan-600' />
            <h2 className='text-2xl font-semibold text-slate-900 mb-2'>AR Product Labels</h2>
            <p className='text-slate-600 mb-4'>Enhance product packaging with 3D models and animations</p>
            <span className='text-blue-600 font-medium'>Learn More →</span>
          </Link>
        </div>
      </main>
    </div>
  )
}
