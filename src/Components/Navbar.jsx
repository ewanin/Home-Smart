import Logo from '../assets/logo.svg'

const Navbar = () => {


    // const navBtn = document.querySelector('#menu');
    // const menuBar = document.querySelector('[role="menubar"]');

    // navBtn.addEventListener('click', () => {
    //     const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    //     navBtn.setAttribute('aria-expanded', !isExpanded);
    //     menuBar.classList.toggle('hidden');
    //     menuBar.classList.toggle('flex');
    // })


  return (
    <section>
        <nav className="mx-auto p-4 bg-amber-400">
            <div className="container mx-auto flex items-center justify-between">
                <a href="/" className="lg:absolute lg:left-[40%]  lg:top-9 z-50" aria-label="Go to homepage">
                    <img src={Logo} alt="Logo" width={200} className='w-48 md:w-64 lg:w-72' />
                </a>

                <button id='menu' className='lg:hidden text-neutral-900 hover:text-neutral-600' /*aria-expanded='false' aria-label='Open Menu'*/ > 
                    <svg xmlns='https://wwww.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth="2">
                        <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
                    </svg>
                </button>

                <div role='menubar' className='hidden flex-col gap-4 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center text-lg p-6 items-center lg:flex lg:flex-row lg:static lg:shadow-none lg:justify-between lg:w-full'>
                    <a href="/" role='menuitem' className='p-2 px-6 rounded-sm dark:text-neutral-900 hover:text-neutral-600'>Home</a>
                    <a href="/" role='menuitem' className='p-2 px-6 rounded-sm dark:text-neutral-900 hover:text-neutral-600 lg:mr-auto'>Contact</a>
                    <a href="/" role='menuitem' className='p-2 px-6 rounded-sm dark:text-neutral-900 hover:text-neutral-600'>Login</a>
                    <a href="/" role='menuitem' className='p-2 px-6 bg-teal-900 rounded-md shadow-xl hover:shadow-none dark:text-neutral-900 text-white hover:text-neutral-600'>Sign Up</a>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default Navbar