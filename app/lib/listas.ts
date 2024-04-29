export const listaDeTiposDeProdutos = [
    {
        nome: "CABOS DE AÇO",
        foto: "/produtos/cabos-de-aco/AÇO POLIDO 19X7.svg",
      },
      {
        nome: "ACESSÓRIOS CABOS DE AÇO",
        foto: "/produtos/AÇO POLIDO 19X7.svg",
      },
]

export const checkList = (link: string) => {
    switch (link) {
        case 'cabos-de-aco': return listaDeCabosDeAço
        case 'acessorios-cabos-de-aco': return listaDeAcessoriosCabosDeAço
    }
}

const listaDeCabosDeAço = [
    {
      nome: "CABO DE AÇO POLIDO 19X7 NÃO ROTATIVO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 19X7.svg",
    },
    {
      nome: "CABO DE AÇO 6×7+AA POLIDO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X7 AA.svg",
    },
    {
      nome: "CABO DE AÇO 6×7+AF GALVANIZADO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X7 AF.svg",
    },
    {
      nome: "CABO DE AÇO 6X25+AF POLIDO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X1925 AF.svg",
    },
    {
      nome: "CABO DE AÇO 6X25+AA POLIDO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X1925 AA.svg",
    },
    {
      nome: "CABO DE AÇO 6X36/41+AF POLIDO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X3641 AF.svg",
    },
    {
      nome: "CABO DE AÇO 6X36/41+AA POLIDO",
      foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X3641 AA.svg",
    },
    {
      nome: "CABO DE AÇO 8X19+AF POLIDO",
      foto: "/produtos/cabos-de-aco/CABO DE AÇO 8X19 AF.svg",
    },
    
    {
      nome: "CABO DE AÇO 35×7 ERGOFLEX PLUS",
      foto: "/produtos/cabos-de-aco/ergoflex-plus.svg",
    },
    {
      nome: "CABO DE AÇO 35×7 ERGOFLEX",
      foto: "/produtos/cabos-de-aco/ergoflex.svg",
    },
    {
      nome: "CABO DE AÇO MINEPAC",
      foto: "/produtos/cabos-de-aco/MINEPAC.svg",
    },
    {
      nome: "CABO DE AÇO POWERPAC EXTRA",
      foto: "/produtos/cabos-de-aco/POWERPAC-EXTRA.svg",
    },
    {
      nome: "CABO DE AÇO POWERPAC",
      foto: "/produtos/cabos-de-aco/POWERPAC.svg",
    },
    {
      nome: "CABO DE AÇO PROPAC",
      foto: "/produtos/cabos-de-aco/PROPAC.svg",
    },
  ];

  const listaDeAcessoriosCabosDeAço = [
    {
      nome: "GANCHO CORREDIÇO PARA CABO",
      foto: "/produtos/acessorios-cabos/GANCHO-CORREDICO.webp",
    },
  ];

  