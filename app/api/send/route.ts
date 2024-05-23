import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend('re_gk1rJUg6_KKVYPV4dDWtZA8SVLyB85CTg')

export async function POST() {
  try {
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
