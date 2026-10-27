export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={'flex items-center gap-2 ' + className}>
      <div className='h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600' />
      <span className='text-xl font-bold text-slate-900'>VaveAR <span className='text-sm font-normal text-slate-600'>by Vave TechStack</span></span>
    </div>
  )
}
