import Link from 'next/link'
import { Users, FolderOpen, Image, QrCode, BarChart3 } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <header className='border-b bg-white'>
        <div className='container mx-auto flex h-16 items-center gap-6 px-4 max-w-7xl'>
          <span className='text-xl font-bold text-slate-900'>VaveAR Admin</span>
          <nav className='hidden lg:flex items-center gap-4 text-sm'>
            <Link href='/admin' className='text-slate-900 font-medium'>Overview</Link>
            <Link href='/admin/customers' className='text-slate-600 hover:text-slate-900'>Customers</Link>
            <Link href='/admin/wedding-projects' className='text-slate-600 hover:text-slate-900'>Wedding Projects</Link>
            <Link href='/admin/media-management' className='text-slate-600 hover:text-slate-900'>Media Management</Link>
            <Link href='/admin/ar-targets' className='text-slate-600 hover:text-slate-900'>AR Targets</Link>
            <Link href='/admin/qr-links' className='text-slate-600 hover:text-slate-900'>QR Links</Link>
            <Link href='/admin/templates' className='text-slate-600 hover:text-slate-900'>Templates</Link>
            <Link href='/admin/storage-usage' className='text-slate-600 hover:text-slate-900'>Storage Usage</Link>
            <Link href='/admin/subscriptions' className='text-slate-600 hover:text-slate-900'>Subscriptions</Link>
            <Link href='/admin/payments' className='text-slate-600 hover:text-slate-900'>Payments</Link>
            <Link href='/admin/support' className='text-slate-600 hover:text-slate-900'>Support</Link>
            <Link href='/admin/audit' className='text-slate-600 hover:text-slate-900'>Audit Logs</Link>
            <Link href='/admin/settings' className='text-slate-600 hover:text-slate-900'>Settings</Link>
          </nav>
        </div>
      </header>
      <main className='container mx-auto px-4 py-8 max-w-7xl'>
        <h1 className='text-[2rem] font-bold text-slate-900 mb-8'>Admin Dashboard</h1>
        <div className='grid md:grid-cols-5 gap-4 mb-8'>
          <div className='p-4 bg-white rounded-lg border border-slate-200'><Users className='h-5 w-5 text-slate-400 mb-2' /><p className='text-slate-600 text-sm'>Customers</p><p className='text-2xl font-bold text-slate-900'>12</p></div>
          <div className='p-4 bg-white rounded-lg border border-slate-200'><FolderOpen className='h-5 w-5 text-slate-400 mb-2' /><p className='text-slate-600 text-sm'>Projects</p><p className='text-2xl font-bold text-slate-900'>15</p></div>
          <div className='p-4 bg-white rounded-lg border border-slate-200'><Image className='h-5 w-5 text-slate-400 mb-2' /><p className='text-slate-600 text-sm'>AR Targets</p><p className='text-2xl font-bold text-slate-900'>450</p></div>
          <div className='p-4 bg-white rounded-lg border border-slate-200'><QrCode className='h-5 w-5 text-slate-400 mb-2' /><p className='text-slate-600 text-sm'>QR Links</p><p className='text-2xl font-bold text-slate-900'>15</p></div>
          <div className='p-4 bg-white rounded-lg border border-slate-200'><BarChart3 className='h-5 w-5 text-slate-400 mb-2' /><p className='text-slate-600 text-sm'>Total Scans</p><p className='text-2xl font-bold text-slate-900'>3,245</p></div>
        </div>
        <div className='bg-white rounded-lg border border-slate-200 p-6'>
          <h2 className='text-xl font-semibold text-slate-900 mb-4'>Demo Data</h2>
          <p className='text-slate-600'>Wedding project: Priya & Rahul — Wedding Memories • 30 image targets • Smart visiting card demo • Product label demo</p>
        </div>
      </main>
    </div>
  )
}



