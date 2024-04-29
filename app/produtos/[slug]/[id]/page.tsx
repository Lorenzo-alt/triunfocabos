import FormContato from "@/app/components/FormContato";
import mongoose from "mongoose";
import Image from "next/image";
import { redirect } from "next/navigation";

type typeDoc = {
  ProdutoDoc: {
    _id: mongoose.Types.ObjectId;
    linkId: string;
    imgPath: string;
    title: string;
    desc: string;
    tabela: string[];
  };
};

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    process.env.SITE_URL + "api/produto/?id=" + params.id,
    {
      next: { revalidate: 0 },
    }
  );

  const data: typeDoc = await res.json();

  if (data.ProdutoDoc) {
    return (
      <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px] ">
        <section className="grid grid-cols-2 gap-20 p-20 w-8/12">
          <div className="bg-white rounded-[10px] flex h-max p-10 xl:p-20">
            <Image
              src={data.ProdutoDoc.imgPath}
              alt="aaa"
              width={1920}
              height={1080}
              className="w-full h-[150px] md:h-[200px] lg:h-[240px] xl:h-[280px] 2xl:h-[300px] object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-2xl">{data.ProdutoDoc.title}</h1>
            <div
              className="flex flex-col gap-4 text-justify"
              dangerouslySetInnerHTML={{ __html: data.ProdutoDoc.desc }}
            ></div>
          </div>
        </section>
        {data.ProdutoDoc.tabela.length !== 0 && (
          <section className="flex flex-col bg-azul-titulo w-full items-center py-10">
            <div className="w-max rounded-[10px] shadow-[0px_0px_30.0px_rgba(13,19,22,1)] shadow-azul-principal">
              {data.ProdutoDoc.tabela.map((item, index) => {

                return (
                  <div
                    key={index}
                    className={"grid"}
                    style={{
                      backgroundColor: index === 0 ? "#e9e75f" : "white",
                      borderRadius:
                        index === 0
                          ? "10px 10px 0% 0%"
                          : index === data.ProdutoDoc.tabela.length - 1
                          ? "0% 0% 10px 10px"
                          : "0%",
                        gridTemplateColumns: `repeat(${item.split(";").length}, minmax(0, 1fr))`
                    }}
                  >
                    {item.split(";").map((item, index) => {
                      return (
                        <div key={index} className="flex justify-center p-3 max-w-52 items-center text-center">
                          {item}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </section>
        )}
        <FormContato />
      </main>
    );
  } else {
    // redirect("/404");
  }
}
