import LandingPageBanner from '@/components/home/LandingPageBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <MaxWidthWrapper
      className='flex flex-col md:flex-row justify-between items-center'
      heightPage
    >
      <div className='left w-full md:w-[60%] flex flex-col justify-evenly space-y-1 md:space-y-5 order-2 flex-1 md:order-1 mt-5 md:mt-0'>
        <b className='text-3xl md:text-5xl text-slate-600'>
          <i>WELCOME TO</i>
        </b>

        <strong className={`${montserrat.className} leading-tight`}>
          <span className=''>
            <span className='text-4xl md:text-5xl'>Dr. </span>
            <span className='text-4xl md:text-5xl'>Madhutmati&apos;s</span>
          </span>

          <br />

          <span className='text-5xl md:text-[4.8rem] text-primary'>
            World of Biology
          </span>
        </strong>

        <p className='leading-10 font-medium'>
          <span>
            <span className='text-2xl md:text-3xl'>Where </span>
            <i className='text-3xl md:text-4xl border-b-2 border-primary'>
              Curiosity{' '}
            </i>
            <span className='text-2xl md:text-3xl'>Meets </span>
            <i className='text-3xl md:text-4xl border-b-2 border-primary'>
              Discovery{' '}
            </i>
          </span>
          <span>
            <span className='text-2xl md:text-3xl'>in the </span>
            <span className='text-2xl md:text-3xl'>World of </span>
            <i className='text-3xl md:text-4xl border-b-2 border-primary inline-block md:inline'>
              BIOLOGY
            </i>
          </span>
          .
        </p>
      </div>
      <LandingPageBanner />
    </MaxWidthWrapper>
  )
}
