import type { NextApiRequest, NextApiResponse } from 'next';
import  EmailTemplate from '@/components/emailTemplate/EmailTemplate';
import { Resend } from 'resend';
import { OK } from 'zod';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request,res:Response) {
  const {fname,lname,email,message}=await req.json();
  console.log(fname, lname)
   resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['spaithane9172@gmail.com'],
    subject: 'Mail from ',
    react: EmailTemplate({fname,lname,email,message}),
  });

 return NextResponse.json({status:"OK"});
};
