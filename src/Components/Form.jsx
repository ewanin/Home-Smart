import Lamp from '../assets/lamp.png'
import App from '../assets/app.svg'

const Form = () => {
  return (
    <section aria-labelledby="contact" className="container mx-auto px-8 overflow-hidden">
        <div className="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
            <div className="md:flex-1 md:max-w-sm relative">
                <img src={Lamp} alt="Lamp" className="mx-auto" />
                <a href="#" className='p-2 px-6 bg-amber-400 rounded-md shadow-xl hover:shadow-none dark:text-neutral-900 hover:text-neutral-600 mx-auto md:mb-12 mt-12 flex gap-2 w-max'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    <span>Downoad the App</span>
                </a>
                <img src={App} alt="App" width={240} className='hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs' />
                <div className='absolute -bottom-18 left-1/2 -translate-x-1/2 -z-10 aspect-square md:border-8 border-amber-400 rounded-full md:w-72 lg:w-96'></div>
            </div>
            <form action="" className="realtive border-2 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 2-full">
                <h2 id='contact' className='text-3xl font-bold'>Let's Connect</h2>
                <div className='relative'>
                    <input type="text" id='name' className='peer form-input w-full border-2 border-amber-400 rounded-md focus:ring-3 dark:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent' placeholder='Your Name' />
                    <label htmlFor="name" className='text-neutral-500 text-[12px] py-1 uppercase absolute -top-4 left-2 -translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 transition-all '>Your Name</label>
                </div>

                <div className='relative'>
                    <input type="email" id='email' className='peer form-input w-full border-2 border-amber-400 rounded-md focus:ring-3 dark:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent' placeholder='Your Email' />
                    <label htmlFor="email" className='text-neutral-500 text-[12px] py-1 uppercase absolute -top-4 left-2 -translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 transition-all '>Your Email</label>
                </div>

                <div className='relative'>
                    <textarea name="content" id="content" cols="20" rows="5" className='peer form-textarea resize-none w-full border-2 border-amber-400 rounded-md focus:ring-3 dark:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent' placeholder='How can we help?'></textarea>
                    <label htmlFor="content" className='text-neutral-500 text-[12px] py-1 uppercase absolute -top-3 left-2 -translate-y-1/2 peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 transition-all '>How can we help?</label>
                </div>

                <a href="#" className='p-2 px-6 font-semibold bg-amber-400 w-max rounded-md shadow-xl hover:shadow-none dark:text-neutral-900 hover:text-neutral-600 flex gap-2'>
                    Submit
                </a>
            </form>
        </div>
    </section>
  )
}

export default Form
