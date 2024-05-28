import  EmailTemplate from '@/components/emailTemplate/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request,res:Response) {
  const {fname,lname,email,message}=await req.json();
  console.log(fname, lname)
  let resData={};
  try{
    resData=await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['spaithane9172@gmail.com'],
      subject: 'Mail from ',
      react: EmailTemplate({fname,lname,email,message}),
    });
    console.log("Response: ",resData);
  }catch(error){
    console.log("error: "+error);
    console.log("Response: ",resData);
  }
  

 return NextResponse.json({status:"OK",
  resData:resData
 });
};
