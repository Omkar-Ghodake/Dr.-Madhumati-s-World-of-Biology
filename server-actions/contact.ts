'use server'

import { ServerActionReturnType } from '@/types/dataTypes'
import { SMTPClient } from 'emailjs'

export const submitContactForm = ({
  message,
  fname,
  lname,
  email,
}: {
  message: string
  fname: string
  lname: string
  email: string
}): ServerActionReturnType => {
  try {
    const client = new SMTPClient({
      user: process.env.EMAILJS_USER,
      password: process.env.EMAILJS_PASSWORD,
      host: 'smtp.gmail.com',
      ssl: true,
    })

    client.send(
      {
        text: message,
        from: ``,
        to: 'omkarghodake78@gmail.com',
        subject: 'Message from World of Biology',
      },
      (error, message) => {
        console.log(error || message)
      }
    )

    return { success: true, message: 'Message sent successfully.' }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send message. Some error occurred.',
    }
  }
}
