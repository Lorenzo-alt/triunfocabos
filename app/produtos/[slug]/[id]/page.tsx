import FormContato from "@/app/components/FormContato";
import mongoose from "mongoose";
import { Metadata, ResolvingMetadata } from "next";
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

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const res = await fetch(
    process.env.SITE_URL + "api/produto/?id=" + params.id,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  if (check) {
    const data: typeDoc = check;
    return {
      title: data.ProdutoDoc.title + " | RM Triunfo Cabos",
    };
  } else return {};
}

export default async function Page({ params }: Props) {
  const res = await fetch(
    process.env.SITE_URL + "api/produto/?id=" + params.id,
    {
      next: { revalidate: 0 },
    }
  );

  const check = await res.json();

  if (check) {
    const data: typeDoc = check;

    if (data.ProdutoDoc) {
      return (
        <main className="flex flex-col items-center justify-center h-full w-full max-w-[2560px] ">
          <section className="flex flex-col gap-10 p-8 lg:grid grid-cols-2 lg:gap-20 xl:p-20 lg:w-10/12 2xl:w-8/12">
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
              <h1 className="font-bold text-xl md:text-2xl">
                {data.ProdutoDoc.title}
              </h1>
              <div
                className="flex flex-col text-sm md:text-base gap-4 text-justify"
                dangerouslySetInnerHTML={{ __html: data.ProdutoDoc.desc }}
              ></div>
            </div>
          </section>
          <section className="flex flex-col items-center bg-azul-titulo w-full overflow-x-auto ">
            <div className="w-full flex justify-evenly">
            {data.ProdutoDoc.tabela.length !== 0 && (
              <div className="flex flex-col w-max items-start py-10 px-5">
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
                          gridTemplateColumns: `repeat(${
                            item.split(";").length
                          }, minmax(0, 1fr))`,
                        }}
                      >
                        {item.split(";").map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="flex justify-center md:p-3 p-1 max-w-16 md:max-w-36 items-center text-center text-[8px] md:text-sm"
                            >
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            </div>
          </section>
          <FormContato />
        </main>
      );
    }
  } else {
    // redirect("/404");
  }
}
