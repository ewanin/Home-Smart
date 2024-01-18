import Dots from '../assets/dots.svg'

const Card = () => {
  return (
    <section className="grid gap-12 sm:gap-16 md:gap-24 lg:gap-32 px-8 overflow-hidden">
        <a href="#" className='p-2 px-6 bg-amber-400 rounded-md shadow-xl hover:shadow-none dark:text-neutral-900 hover:text-neutral-600 mx-auto my-12 flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            <span>Downoad the App</span>
        </a>

        <div aria-labelledby="qualities" className="relative">
            <img src={Dots} alt="Dots" aria-hidden='true' className='hidden lg:block absolute top-1/2 -translate-y-1/2 -left-24 xl:-left-7' />
            <img src={Dots} alt="Dots" aria-hidden='true' className='hidden lg:block absolute top-1/2 -translate-y-1/2 -right-24 xl:-right-7' />
            <h2>
                <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-center justify-center md:justify-between">
                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className="rounded-full border-8 border-amber-400 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Safe</h3>
                        <p>Our products are secure and private out-of-the-box</p>
                    </div>

                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className="rounded-full border-8 border-amber-400 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold">Efficient</h3>
                        <p>Feel good about your wallet and the environment</p>
                    </div>

                    <div className="grid gap-4 justify-items-center text-center md:flex-1">
                        <div className="rounded-full border-8 border-amber-400 p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                          <h3 className="text-3xl font-bold">Proven</h3>
                          <p>Leading the Smart Home world for 10 years</p>
                    </div>
                </div>
            </h2>
        </div>
    </section>
  )
}

export default Card