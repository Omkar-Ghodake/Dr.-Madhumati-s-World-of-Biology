import ContactForm from '@/components/contactForm/ContactForm'
import GoogleMaps from '@/components/googleMaps/GoogleMaps'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ContactUs = () => {
  return (
    <MaxWidthWrapper className='md:overflow-y-hidden md:max-w-[80vw]'>
      <div className='flex flex-col md:flex-row items-center h-full md:space-x-10 space-y-8 md:space-y-0 mt-5 md:mt-0'>
        <div className='flex flex-col justify-between space-y-5 w-full md:w-1/2 h-full pb-3 mt-2 md:mt-0'>
          <h1 className='text-2xl font-medium'>Having Questions?</h1>

          <div className='flex flex-col space-y-4'>
            <h2 className='font-medium'>Contact Us on:</h2>

            <div className='contact-group flex justify-between md:justify-start items-center md:space-x-5'>
              <span>
                <Phone className='' />
              </span>
              <span>+91 72490 87518</span>
              <span className='w-[2px] h-[16px] bg-black'></span>
              <span>+91 78410 87520</span>
            </div>

            <div className='contact-group flex items-center space-x-2 md:space-x-5'>
              <span>
                <Mail />
              </span>
              <span>
                <Link href='mailto:worldofbiology2024@gmail.com'>
                  worldofbiology2024@gmail.com
                </Link>
              </span>
            </div>

            <div className='flex flex-col md:flex-row md:justify-start md:items-center space-x-0 md:space-x-5 space-y-4 md:space-y-0'>
              <div className='contact-group flex justify-start items-center space-x-2 md:space-x-5'>
                <span>
                  <Image
                    src={'/icons/social/youtube.svg'}
                    alt='YouTube'
                    width={30}
                    height={30}
                  />
                </span>
                <span>
                  <Link
                    href='https://www.youtube.com/@dr.madhumatisbiology9147'
                    target='_blank'
                    className='flex items-center hover:text-primary duration-150'
                  >
                    Youtube Channel
                    <ExternalLink className='ml-2' />
                  </Link>
                </span>
              </div>

              <span className='w-[1.4px] h-[20px] bg-black hidden md:block'></span>

              <div className='contact-group flex justify-start items-center space-x-2 md:space-x-5'>
                <span>
                  <Image
                    src={'/icons/social/instagram.svg'}
                    alt='YouTube'
                    width={30}
                    height={30}
                  />
                </span>
                <span>
                  <Link
                    href='https://www.instagram.com/worldofbiology_academy'
                    target='_blank'
                    className='flex items-center hover:text-primary duration-150'
                  >
                    Instagram Page <ExternalLink className='ml-2' />
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-4'>
            <h2 className='font-medium'>Walk to Us:</h2>

            <div className='contact-group flex items-center space-x-5'>
              <span>
                <MapPin />
              </span>
              <span>
                World of Biology, Shop No. 29, C Wing, 1st floor, KK Market
                building, Pune-411043
              </span>
            </div>

            <div className='contact-group flex items-center space-x-5'>
              {/* <iframe src="" frameborder="0"></iframe> */}
              <GoogleMaps />
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center space-y-5 w-full md:w-1/2 h-full pb-3 '>
          <h1 className='text-2xl font-medium text-center'>
            Send Us a Message
          </h1>

          <div className='h-full'>
            <ContactForm />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

export default ContactUs
