import Partner1 from '../assets/partner1.svg'
import Partner2 from '../assets/partner2.svg'
import Partner3 from '../assets/partner3.svg'
import Partner4 from '../assets/partner4.svg'
import Partner5 from '../assets/partner5.svg'
import Partner6 from '../assets/partner6.svg'
import Partner7 from '../assets/partner7.svg'

const Partners = () => {
  return (
    <section aria-labelledby="partners" className="text-center grid gap-8 place-items-center">
      <div className="grid gap-4">
        <h2 id="partners" className="text-4xl font-bold text-amber-400">Our Partners</h2>
        <p className="w-full max-w-lg">We’ve partnered with hundreds of smart home brands to help you create a smart home that fits your needs and doesn’t lock you in.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-2xl mx-auto">
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner1} alt="Partner1" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner2} alt="Partner1" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner3} alt="Partner1" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner4} alt="Partner1" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner5} alt="Partner1" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner6} alt="Partner1" className="h-16 w-16" />
        </div>
        <div className="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
          <img src={Partner7} alt="Partner1" className="h-16 w-16" />
        </div>
      </div>
    </section>
  )
}

export default Partners