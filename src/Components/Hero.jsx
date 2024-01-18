import Couch from '../assets/couch.png'
import App from '../assets/app.svg'

const Hero = () => {
  return (
    <section className='realtive pt-16 md:pt-24 lg:pt-48'>
        <div className="absolute inset-0 bottom-8 md:bottom-24 xl:bottom-32 -z-10 bg-gradient-to-b from-amber-400 to-amber-600"></div>
        <div className='container mx-auto grid grid-rows-1 place-items-end px-2'>
            <img src={Couch} alt="Couch" className='row-start-1 row-end-2 col-start-1 col-end-2 mx-auto' />
            <img src={App} alt="App" className='row-start-1 row-end-2 col-start-1 col-end-2 mx-auto w-40 sm:w-52 md:w-62 lg:w-72' />
        </div>
    </section>
  )
}

export default Hero