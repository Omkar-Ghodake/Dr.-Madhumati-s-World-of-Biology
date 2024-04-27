import { Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='body-font'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <Link
          href={'/'}
          className='flex title-font font-medium items-center md:justify-start justify-center'
        >
          <Image src={'/logo.jpg'} alt='' width={50} height={50} />
          <span className='ml-3 text-xl'>
            Dr. Madhumati&apos;s World of Biology
          </span>
        </Link>
        <p className='text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2024 Dr. Madhumati Maskar
          {/* <a
            href='https://twitter.com/knyttneve'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            @knyttneve
          </a> */}
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start'>
          <Link
            href={'mailto:worldofbiology2024@gmail.com'}
            className=''
            target='_blank'
          >
            {/* <Image
              src={'/icons/social/mail.svg'}
              alt=''
              width={25}
              height={25}
            /> */}
            <Mail />
          </Link>

          <Link
            href={'https://www.instagram.com/worldofbiology_academy'}
            className='ml-3'
            target='_blank'
          >
            <Image
              src={'/icons/social/instagram.svg'}
              alt=''
              width={25}
              height={25}
            />
          </Link>

          <Link
            href={'https://www.youtube.com/@dr.madhumatisbiology9147'}
            className='ml-3'
            target='_blank'
          >
            <Image
              src={'/icons/social/youtube.svg'}
              alt=''
              width={25}
              height={25}
            />
          </Link>
          {/* <Link href={''} className='ml-3'>
            <svg
              fill='currentColor'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              stroke-width='0'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path
                stroke='none'
                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
              ></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </Link> */}
        </span>
      </div>
    </footer>
  )
}

export default Footer
