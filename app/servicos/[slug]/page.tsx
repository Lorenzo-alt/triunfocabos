import mongoose from "mongoose";

type typeDoc = {
    ServicoDoc: {
      _id: mongoose.Types.ObjectId;
      linkId: string;
      title: string;
      desc: string;
    };
  };

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    process.env.SITE_URL + "api/servico/?id=" + params.slug,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  

  if (check) {
    
    const data: typeDoc = check;

    if (data.ServicoDoc) {
        
      return <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px]">
      <section className="bg-azul-titulo w-full">
        <div className="bg-fundo-header bg-cover bg-center h-[210px] md:h-[260px] lg:h-[330px] xl:h-[380px] 2xl:h-[420px] flex items-center justify-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mono text-center text-white font-bold px-2 drop-shadow-[2px_0px_0px_rgba(173,173,173,1)] w-7/12">
            {data.ServicoDoc.title}
          </h1>
        </div>
      </section>
      <section>
        <div className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl p-8 md:px-14 lg:p-10 2xl:p-14 lg:px-32 xl:px-44 2xl:px-60 text-justify flex flex-col gap-10" dangerouslySetInnerHTML={{ __html: data.ServicoDoc.desc }}>
        </div>
      </section>
      <section className="px-3 md:px-20 lg:px-40 xl:px-72 2xl:px-96 lg:py-2 flex flex-col gap-5 lg:gap-7 xl:gap-10 mb-8">
        <div className="bg-white rounded-[5px] lg:rounded-[10px] p-4 lg:px-8 xl:px-10 2xl:px-24 py-6 text-center font-bold flex flex-col gap-2 lg:gap-4 xl:gap-6 shadow-[4px_4px_0px_rgb(0,0,0,0.25)] lg:shadow-[6px_6px_0px_rgb(0,0,0,0.25)]">
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            Quando se trata de elevar seus projetos, confie na RM Triunfo Cabos para fornecer produtos certificados, atendimento personalizado e compromisso inabalável com a qualidade!
          </p>
        </div>
      </section>
    </main>
    }
  }
}
