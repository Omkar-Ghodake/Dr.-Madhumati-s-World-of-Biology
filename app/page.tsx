import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'
import { Montserrat, Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <MaxWidthWrapper className='flex justify-between items-center'>
      <div className='left w-3/5 flex flex-col justify-center space-y-5'>
        <b className='text-5xl text-slate-600'>
          <i>WELCOME TO</i>
        </b>

        <strong className={`${montserrat.className} leading-tight`}>
          <span className=''>
            <span className='text-5xl'>Dr. </span>
            <br />
            <span className='text-[5.2rem]'>
              <span className='text-primary'>Madhu</span>
              <span>mati&apos;s</span>
            </span>
          </span>

          <br />

          <span className='text-5xl'>
            <span className='text-primary'>World of </span>
            <span>Biology</span>
          </span>
        </strong>

        <p className='leading-10 font-medium'>
          <span>
            <span className='text-3xl'>Where </span>
            <i className='text-4xl border-b-2 border-primary'>Curiosity </i>
            <span className='text-3xl'>Meets </span>
            <i className='text-4xl border-b-2 border-primary'>Discovery </i>
          </span>
          <br />
          <span>
            <span className='text-3xl'>in the </span>
            <i className='text-4xl border-b-2 border-primary'>
              World of BIOLOGY
            </i>
          </span>
          .
        </p>
      </div>

      <div className='right flex justify-center items-center w-2/5'>
        <div className='relative h-[37rem] w-[37rem]'>
          <Image src={'/landing_page_banner.svg'} alt='' fill />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
