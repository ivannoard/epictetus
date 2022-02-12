function App() {
  return (
    <>
      <div>
        <div className='container mx-auto bg-slate-400 flex items-center justify-between py-6'>

          <div className="hamburger md:hidden">
            <div className='rounded bg-gray-800 w-[35px] h-[35px] mr-3'>
              <h3 className='text-white text-xl text-center pt-1'>E</h3>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='logo flex items-center mr-6'>
              <div className='rounded bg-gray-800 w-[35px] h-[35px] mr-3'>
                <h3 className='text-white text-xl text-center pt-1'>E</h3>
              </div>
              <h3 className='text-xl'>Epictus</h3>
            </div>
            <nav>
              <ul className='md:flex items-center gap-4 hidden'>
                <li><a href="#"></a>UI Design</li>
                <li><a href="#"></a>Front-End</li>
                <li><a href="#"></a>Back-End</li>
                <li><a href="#"></a>Lainnya</li>
                <li><a href="#"></a></li>
              </ul>
            </nav>
          </div>

          <div>
            <input type="text" className='px-6 py-3 rounded-full md:block hidden bg-gray-800 text-white' placeholder='Search' />
            <div className='rounded bg-gray-800 w-[35px] h-[35px] md:hidden block'>
              <h3 className='text-white text-xl text-center pt-1'>E</h3>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
