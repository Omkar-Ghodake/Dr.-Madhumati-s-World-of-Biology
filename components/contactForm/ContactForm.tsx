'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import ContactFormLogo from './ContactFormLogo'
import { Textarea } from '../ui/textarea'
import { SendHorizonal } from 'lucide-react'
import { submitContactForm } from '@/server-actions/contact'
import emailjs from 'emailjs-com'
import { Resend } from 'resend'

const formSchema = z.object({
  fname: z.string().min(2, {
    message: 'At least 2 characters.',
  }),
  lname: z.string().min(2, {
    message: 'At least 2 characters.',
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
})

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // submitContactForm(values);
    const { fname, lname, email, message } = values

    try {
      return { success: true, message: 'Message sent successfully.' }
    } catch (error) {
      console.log('Emailjs error: ' + JSON.stringify(error))
      return {
        success: false,
        message: 'Failed to send message. Some error occurred.',
      }
    }
  }

  return (
    <div className='h-full shadow-2xl rounded-lg border p-5 flex flex-col items-center space-y-5'>
      <div className='logo flex justify-center items-center space-x-5'>
        <ContactFormLogo />
        <h3 className='text-2xl md:text-xl font-medium text-center h-full flex justify-center items-center'>
          Send Us a Message
        </h3>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col space-y-5'
        >
          <div className='flex items-center justify-between space-x-5'>
            <FormField
              name='fname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder='John' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='lname'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='john.doe@email.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Type your message here...'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit'>
            <span className='text-base'>Send Message</span>{' '}
            <SendHorizonal className='text-sm ml-2' />
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
