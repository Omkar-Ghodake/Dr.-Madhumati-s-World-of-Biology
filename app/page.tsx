import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { Montserrat, Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <MaxWidthWrapper className='flex flex-col md:flex-row justify-between items-center'>
      <div className='left w-full md:w-3/5 flex flex-col justify-center space-y-1 md:space-y-5 order-2 flex-1 md:order-1'>
        <b className='text-2xl md:text-5xl text-slate-600'>
          <i>WELCOME TO</i>
        </b>

        <strong className={`${montserrat.className} leading-tight`}>
          <span className=''>
            <span className='text-2xl md:text-5xl'>Dr. </span>
            <br />
            <span className='text-3xl md:text-[5.2rem]'>
              <span className='text-primary'>Madhu</span>
              <span>mati&apos;s</span>
            </span>
          </span>

          <br />

          <span className='text-2xl md:text-5xl'>
            <span className='text-primary'>World of </span>
            <span>Biology</span>
          </span>
        </strong>

        <p className='leading-10 font-medium'>
          <span>
            <span className='text-xl md:text-3xl'>Where </span>
            <i className='text-2xl md:text-4xl border-b-2 border-primary'>
              Curiosity{' '}
            </i>
            <span className='text-xl md:text-3xl'>Meets </span>
            <i className='text-2xl md:text-4xl border-b-2 border-primary'>
              Discovery{' '}
            </i>
          </span>
          <span>
            <span className='text-xl md:text-3xl'>in the </span>
            <i className='text-2xl md:text-4xl border-b-2 border-primary inline-block md:inline'>
              World of BIOLOGY
            </i>
          </span>
          .
        </p>
      </div>

      <div className='right flex justify-center items-center w-full md:w-2/5 order-1 md:order-2'>
        <div className='relative w-[10rem] md:w-[37rem] h-[10rem] md:h-[37rem]'>
          <Image
            src={'/landing_page_banner.svg'}
            alt=''
            fill
            objectFit='cover'
          />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
