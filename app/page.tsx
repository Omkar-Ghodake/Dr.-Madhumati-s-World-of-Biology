import LandingPageBanner from '@/components/home/LandingPageBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Montserrat } from 'next/font/google'
import ContentHead from '@/components/home/ContentHead'
import ContentBody from '@/components/home/ContentBody'
import ContentFooter from '@/components/home/ContentFooter'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <MaxWidthWrapper
      className='flex flex-col md:flex-row justify-between items-center p-1'
      heightPage
    >
      <div className='left w-full md:w-[60%] flex flex-col justify-evenly space-y-1 md:space-y-5 order-2 flex-1 md:order-1 mt-5 md:mt-0'>
        <b className='text-3xl md:text-5xl text-slate-600'>
          <ContentHead />
        </b>

        <strong className={`${montserrat.className} leading-tight`}>
          <ContentBody />
        </strong>

        <p className='leading-10 font-medium'>
          <ContentFooter />
        </p>
      </div>
      <LandingPageBanner />
    </MaxWidthWrapper>
  )
}
