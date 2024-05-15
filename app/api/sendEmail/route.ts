import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const res = await request.json()
    console.log(res)
    let transporter = nodemailer.createTransport({ 
        service: "titan",
  host: "smtp.titan.email",port: 465,
  secure: true,
        auth: { 
           user: 'rm@triunfocabos.com.br', 
           pass: '123@Rmtriunfo' 
         } 
        });

        const mailOptions = {
            from: 'rm@triunfocabos.com.br', // sender address
            to: 'rm@triunfocabos.com.br', // receiver (use array of string for a list)
            subject: 'TESTE EMAIL SITE', // Subject line
            html: '<p>TESTE EMAIL SITE</p>'// plain text body
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
    return Response.json(null)
}