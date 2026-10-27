export default function ExperiencePage({ params }: { params: { code: string } }) {
  const code = params.code;
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        <h1 className='text-3xl font-bold mb-4'>VaveAR Experience</h1>
        <p className='text-gray-300 mb-4'>Loading WebAR experience...</p>
        <p className='text-xs text-gray-500 mb-6'>Experience Code: {code}</p>
        <div className='bg-gray-900 rounded-lg p-6 mb-4'>
          <p className='text-sm text-gray-400'>Normal browser fallback - Demo content</p>
        </div>
        <p className='text-xs text-gray-600'>Image tracking requires camera access. This is a demo preview.</p>
      </div>
    </div>
  )
}
