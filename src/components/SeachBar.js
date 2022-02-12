const SeachBar = () => {
  return (
    <>
      <input type="text" className='px-6 py-3 rounded-full md:block hidden bg-gray-800 text-white' placeholder='Search' />
      <div className='rounded bg-gray-800 w-[35px] h-[35px] md:hidden block'>
        <h3 className='text-white text-xl text-center pt-1'>E</h3>
      </div>
    </>
  )
}

export default SeachBar