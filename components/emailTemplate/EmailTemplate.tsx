import React from 'react'
import { Html, Container, Tailwind, Body } from '@react-email/components'

export default function EmailTemplate({
  fname,
  lname,
  email,
  message,
}: {
  fname: string
  lname: string
  email: string
  message: string
}) {
  return (
    <Html lang='en'>
      <Tailwind>
        <Body>
          <Container>
            <h1 className='text-center font-bold'>
              <span className=''>
                <span className='text-4xl '>Dr. </span>
                <span className='text-4xl '>Madhutmati&apos;s</span>
              </span>

              <br className='' />

              <span className='text-5xl text-primary drop-shadow-xl'>
                World of Biology
              </span>
            </h1>

            <div className='border-[1px] border-black shadow-xl p-5 bg-gray-100'>
              <label htmlFor='for' className='font-bold mb-3 text-[1.2rem]'>
                Name
              </label>
              <p className=' mb-5 ' id='for'>
                {fname + ' ' + lname}
              </p>
              <label htmlFor='for' className='font-bold mb-3 text-[1.2rem]'>
                Email
              </label>
              <p id='for'>
                <a href={`mailto:${email}`} className=' mb-5'>
                  {email}
                </a>
              </p>
              <label htmlFor='for' className='font-bold mb-3 text-[1.2rem]'>
                Message
              </label>
              <p className=' mb-5' id='for'>
                {message}
              </p>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
