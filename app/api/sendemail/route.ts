import nodemailer from 'nodemailer'
import toast from 'react-hot-toast';

type typeMensagem = {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
};

export async function POST(request: Request) {
    const res: typeMensagem = await request.json()
    const htmlMsg = `<div style="background-color:#17232B;padding:20px;display:flex;flex-direction:column;gap:1rem;border-radius:0.375rem;max-width:32rem"><h1 style="color:#F6F6F6;font-weight:700;text-align:center">Você Recebeu uma Mensagem!</h1><div style="display:flex;flex-direction:column;gap:0.25rem;padding:16px;border-radius:0.375rem;align-items:center;justify-content:center;background-color:#DEDEDE"><div style="display:flex;gap:1.5rem"><div style="display:flex;gap:0.25rem; align-items: center;"><strong>Nome:</strong> <p>${res.nome}</p></div><div style="display:flex;gap:0.25rem; align-items: center;"><strong>Telefone:</strong> <p>${res.telefone}</p></div></div><div style="display:flex;gap:0.25rem; align-items: center;"><strong>Email:</strong><p>${res.email}</p></div><div><p><strong>Mensagem:</strong> ${res.mensagem}</p></div></div></div>`
    let transporter = nodemailer.createTransport({
      service: 'titan',
      host: 'smtp.titan.email',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    const mailOptions = {
      from: 'rm@triunfocabos.com.br', // sender address
      to: 'rm@triunfocabos.com.br', // receiver (use array of string for a list)
      subject: 'SITE | Você Recebeu uma Mensagem!', // Subject line
      html: htmlMsg, // plain text body
    };
  
    try {
      const info = await transporter.sendMail(mailOptions);
      
      return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (err) {
      return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
    }
  }