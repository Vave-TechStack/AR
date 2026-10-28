import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-50 px-4'>
      <div className='w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-slate-200'>
        <Link href='/' className='inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6'><ArrowLeft className='h-4 w-4' />Back to Website</Link>
        <div className='text-center mb-6'>
          <img src='/VaveAR Tech Logo Banner.png' alt='VaveAR' className='h-10 mx-auto mb-4 object-contain' />
          <h1 className='text-[1.5rem] font-bold text-slate-900 mb-2'>Demo Login</h1>
          <p className='text-slate-600'>Use sample credentials for demo access</p>
        </div>
        <div className='mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200'>
          <p className='text-sm text-blue-900 font-medium mb-1'>Demo Credentials:</p>
          <p className='text-xs text-blue-800'>Email: demo@vavear.com</p>
          <p className='text-xs text-blue-800'>Password: VaveARDemo123!</p>
        </div>
        <form className='space-y-4'>
          <div><label className='block text-sm font-medium text-slate-700 mb-1'>Email</label><input type='email' className='w-full px-3 py-2 border border-slate-300 rounded-lg' defaultValue='demo@vavear.com' required /></div>
          <div><label className='block text-sm font-medium text-slate-700 mb-1'>Password</label><input type='password' className='w-full px-3 py-2 border border-slate-300 rounded-lg' defaultValue='VaveARDemo123!' required /></div>
          <Button className='w-full bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/dashboard'>Login to Demo Dashboard</Link></Button>
        </form>
      </div>
    </div>
  )
}


