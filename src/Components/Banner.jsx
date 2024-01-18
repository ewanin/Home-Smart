import Table from '../assets/table.png'

const Banner = () => {
  return (
    <section aria-labelledby="home" className="relative  overflow-hidden px-8 pt-20">
        <div className="flex flex-wrap-reverse gap-8 justify-center">
            <div className="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
                <div className="flex flex-wrap flex-col items-start gap-2">
                    <h2 className="text-4xl font-bold">Relax, you're home!</h2>
                    <p className="max-w-md">All our supported hardware includes traditional inputs so you can integrate our products into your house in a way that’s best for everyone.</p>
                </div>
                <a href="#" className='p-2 px-6 bg-amber-400 rounded-md shadow-xl hover:shadow-none dark:text-neutral-900 hover:text-neutral-600 flex gap-2'>
                    Sign Up
                </a>
            </div>
            <img src={Table} alt="Table" />
        </div>

        <div className='absolute -bottom-6 -right-32 -z-10 aspect-square md:border-8 border-amber-400 rounded-full md:w-64 lg:w-96 xl:max-w-lg'></div>
        <div className='bg-teal-900 h-24 xl:h-48 -mx-8 mt-12 xl:mt-0 xl:absolute w-screen -bottom-8 -z-10'></div>
    </section>
  )
}

export default Banner