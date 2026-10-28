import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white px-4'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-slate-900 mb-4'>404</h1>
        <p className='text-xl text-slate-600 mb-6'>Page not found</p>
        <Button className='bg-gradient-to-r from-cyan-600 to-blue-600' asChild><Link href='/'>Go Home</Link></Button>
      </div>
    </div>
  )
}
