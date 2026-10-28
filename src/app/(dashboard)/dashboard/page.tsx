import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, CreditCard, Package, Image, QrCode, BarChart3, Home } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className='min-h-screen bg-slate-50 flex'>
      <aside className='w-64 bg-white border-r border-slate-200 hidden lg:block'>
        <div className='p-6 border-b border-slate-200'>
          <div className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600'></div>
            <span className='text-lg font-bold text-slate-900'>VaveAR Demo</span>
          </div>
          <p className='text-xs text-slate-500 mt-1'>demo@vavear.com</p>
        </div>
        <nav className='p-4 space-y-1'>
          <Link href='/dashboard' className='flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium'><Home className='h-4 w-4' />Overview</Link>
          <Link href='/dashboard/demo-wedding' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'><Heart className='h-4 w-4' />Demo Wedding Projects</Link>
          <Link href='/dashboard/demo-visiting' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'><CreditCard className='h-4 w-4' />Demo Visiting Cards</Link>
          <Link href='/dashboard/demo-product' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'><Package className='h-4 w-4' />Demo Product Labels</Link>
          <Link href='/dashboard/media-gallery' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'><Image className='h-4 w-4' />Demo Media Gallery</Link>
          <Link href='/dashboard/qr-links' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'><QrCode className='h-4 w-4' />QR Links</Link>
          <Link href='/dashboard/analytics' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'><BarChart3 className='h-4 w-4' />Analytics</Link>
          <Link href='/' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg mt-4'>← Back to Site</Link>
          <Link href='/login' className='flex items-center gap-3 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-lg'>Logout</Link>
        </nav>
      </aside>
      <main className='flex-1'>
        <header className='bg-white border-b border-slate-200 px-6 py-4'>
          <h1 className='text-[24px] font-bold text-slate-900'>Demo Dashboard</h1>
          <p className='text-slate-600'>Sample data for demonstration purposes</p>
        </header>
        <div className='p-6'>
          <div className='grid md:grid-cols-4 gap-6 mb-8'>
            <div className='p-6 bg-white rounded-xl border border-slate-200'><Heart className='h-8 w-8 text-rose-600 mb-2' /><p className='text-slate-600 text-sm'>Wedding Projects</p><p className='text-2xl font-bold text-slate-900'>1 (Demo)</p></div>
            <div className='p-6 bg-white rounded-xl border border-slate-200'><CreditCard className='h-8 w-8 text-blue-600 mb-2' /><p className='text-slate-600 text-sm'>Visiting Cards</p><p className='text-2xl font-bold text-slate-900'>1 (Demo)</p></div>
            <div className='p-6 bg-white rounded-xl border border-slate-200'><Package className='h-8 w-8 text-purple-600 mb-2' /><p className='text-slate-600 text-sm'>Product Labels</p><p className='text-2xl font-bold text-slate-900'>1 (Demo)</p></div>
            <div className='p-6 bg-white rounded-xl border border-slate-200'><BarChart3 className='h-8 w-8 text-green-600 mb-2' /><p className='text-slate-600 text-sm'>Demo Scans</p><p className='text-2xl font-bold text-slate-900'>245</p></div>
          </div>
          <div className='bg-white rounded-xl border border-slate-200 p-6'>
            <h2 className='text-lg font-semibold text-slate-900 mb-4'>Demo Projects</h2>
            <div className='space-y-3'>
              <div className='p-4 border border-slate-200 rounded-lg flex items-center justify-between'><div><p className='font-medium text-slate-900'>Priya & Rahul — Wedding Memories</p><p className='text-sm text-slate-600'>30 photo-video mappings</p></div><Button size='sm' asChild><Link href='/dashboard/demo-wedding'>Manage</Link></Button></div>
              <div className='p-4 border border-slate-200 rounded-lg flex items-center justify-between'><div><p className='font-medium text-slate-900'>TechVision Solutions - Visiting Card</p><p className='text-sm text-slate-600'>Smart business card demo</p></div><Button size='sm' asChild><Link href='/dashboard/demo-visiting'>Manage</Link></Button></div>
              <div className='p-4 border border-slate-200 rounded-lg flex items-center justify-between'><div><p className='font-medium text-slate-900'>GlowSkin Naturals - Product Label</p><p className='text-sm text-slate-600'>AR product label demo</p></div><Button size='sm' asChild><Link href='/dashboard/demo-product'>Manage</Link></Button></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

