import PopUpAd from '@/components/advertisements/PopUpAd'
import ContentBody from '@/components/home/ContentBody'
import ContentFooter from '@/components/home/ContentFooter'
import ContentHead from '@/components/home/ContentHead'
import LandingPageBanner from '@/components/home/LandingPageBanner'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import homeAdBanner from '@/public/ads/home_ad_banner.jpg'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function Home() {
  return (
    <MaxWidthWrapper
      className='md:max-w-[85vw] flex flex-col md:flex-row justify-between items-center p-1'
      heightPage
    >
      <div className='left w-full md:w-1/2 flex flex-col justify-evenly space-y-1 md:space-y-5 order-2 flex-1 md:order-1 md:mt-0 text-center'>
        <b className='text-3xl md:text-5xl text-slate-600'>
          <ContentHead />
        </b>

        <strong className={`${montserrat.className} leading-tight md:mb-0`}>
          <ContentBody />
        </strong>

        {/* <br className='md:hidden' />
        <br className='md:hidden' />
        <br className='md:hidden' /> */}

        <div className='leading-10 font-medium'>
          <ContentFooter />
        </div>
      </div>

      <LandingPageBanner />

      <PopUpAd
        adImgSrc={homeAdBanner}
        redirectTo='/admissions'
        redirectionText="Get Admissions' info"
      />
    </MaxWidthWrapper>
  )
}
