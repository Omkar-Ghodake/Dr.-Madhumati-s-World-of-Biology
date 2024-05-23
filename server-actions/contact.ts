'use client'

import { ServerActionReturnType } from '@/types/dataTypes'
import emailjs from 'emailjs-com'

export const submitContactForm = async ({
  message,
  fname,
  lname,
  email,
}: {
  message: string
  fname: string
  lname: string
  email: string
}): Promise<ServerActionReturnType> => {
  try {
    return { success: true, message: 'Message sent successfully.' }
  } catch (error) {
    console.log('Emailjs error: ' + error)
    return {
      success: false,
      message: 'Failed to send message. Some error occurred.',
    }
  }
}
