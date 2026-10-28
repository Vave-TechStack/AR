import Link from 'next/link'

export default function FeaturesPage() {
  return (
    <div className='min-h-screen bg-white'>
      <header className='border-b'>
        <div className='container mx-auto flex h-16 items-center px-4'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600'></div>
            <span className='text-xl font-bold text-slate-900'>VaveAR</span>
          </Link>
        </div>
      </header>
      <main className='container mx-auto px-4 py-16'>
        <h1 className='text-[24px] font-bold text-slate-900 mb-4'>Features</h1>
        <p className='text-slate-600'>Image tracking, QR codes, 3D models, analytics.</p>
      </main>
    </div>
  )
}

