import nodemailer from 'nodemailer'

export async function POST(request: Request) {
    const res = await request.json()
    console.log(res)
    let transporter = nodemailer.createTransport({ 
        service: "Gmail",
  host: "smtp.gmail.com",port: 465,
  secure: true,
        auth: { 
           user: 'geraldo.loucura@gmail.com', 
           pass: 'aoww asqs mmam atgv' 
         } 
        });

        const mailOptions = {
            from: 'carlos.loucura@gmail.com', // sender address
            to: 'lorenzo.juliati@gmail.com', // receiver (use array of string for a list)
            subject: 'Subject of your email', // Subject line
            html: '<p>Your html here</p>'// plain text body
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
    return Response.json(null)
}