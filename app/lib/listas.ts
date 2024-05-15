export const listaDeTiposDeProdutos = [
  {
    nome: "CABOS DE AÇO",
    foto: "/produtos/cabos-de-aco/cabos-de-aco.jpg",
  },
  {
    nome: "ACESSÓRIOS CABOS DE AÇO",
    foto: "/produtos/acessorios-cabos/acessorios-cabos.webp",
  },
  {
    nome: "CORRENTES | ACESSÓRIOS",
    foto: "/produtos/acessorios-correntes/acessorios-correntes.png",
  },
  {
    nome: "LAÇOS DE CABO DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACOS-DE-CABO-DE-ACO.png",
  },
  {
    nome: "CINTAS DE POLIÉSTER | ELEVAÇÃO",
    foto: "/produtos/cintas-poliester-elevacao/cintas-poliester.png",
  },
  {
    nome: "CINTAS DE POLIÉSTER | AMARRAÇÃO",
    foto: "/produtos/cintas-poliester-elevacao/cintas-poliester.png",
  },
  {
    nome: "EQUIPAMENTOS",
    foto: "/produtos/equipamentos/equipamentos.png",
  },
];

export const checkList = (link: string) => {
  switch (link) {
    case "cabos-de-aco":
      return listaDeCabosDeAço;
    case "acessorios-cabos-de-aco":
      return listaDeAcessoriosCabosDeAço;
    case "correntes-%7C-acessorios":
      return listaDeAcessoriosCorrentes;
    case "lacos-de-cabo-de-aco":
      return listaDeLacosDeCabos;
    case "cintas-de-poliester-%7C-elevacao":
      return listaDeCintasElevacao;
    case "cintas-de-poliester-%7C-amarracao":
      return listaDeCintasAmarracao;
    case "equipamentos":
      return listaDeEquipamentos;
  }
};

const listaDeCabosDeAço = [
  {
    nome: "CABO DE AÇO 6X25+AF POLIDO",
    foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X1925 AF.svg",
  },
  {
    nome: "CABO DE AÇO 6X25+AA POLIDO",
    foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X1925 AA.svg",
  },
  {
    nome: "CABO DE AÇO 8X19+AF POLIDO",
    foto: "/produtos/cabos-de-aco/CABO DE AÇO 8X19 AF.svg",
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
    nome: "CABO DE AÇO 6×19+AF GALVANIZADO",
    foto: "/produtos/cabos-de-aco/CABO-DE-ACO-6X19+AF-GALVANIZADO.svg",
  },
  {
    nome: "CABO DE AÇO 6×19+AA GALVANIZADO",
    foto: "/produtos/cabos-de-aco/CABO-DE-ACO-6X19+AA-GALVANIZADO.svg",
  },
  {
    nome: "CABO DE AÇO 6×7+AF GALVANIZADO",
    foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X7 AF.svg",
  },
  {
    nome: "CABO DE AÇO 6×7+AA GALVANIZADO",
    foto: "/produtos/cabos-de-aco/AÇO POLIDO 6X7 AA.svg",
  },
  {
    nome: "CABO DE AÇO POLIDO 19X7 NÃO ROTATIVO",
    foto: "/produtos/cabos-de-aco/AÇO POLIDO 19X7.svg",
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
  {
    nome: "GANCHO OLHAL PARA CABO",
    foto: "/produtos/acessorios-cabos/GANCHO-OLHAL.webp",
  },
  {
    nome: "GANCHO HASTE PARA CABO",
    foto: "/produtos/acessorios-cabos/GANCHO-HASTE.webp",
  },
  {
    nome: "GANCHO GIRATÓRIO PARA CABO",
    foto: "/produtos/acessorios-cabos/GANCHO-GIRATORIO.webp",
  },
  {
    nome: "PRENSA CABOS",
    foto: "/produtos/acessorios-cabos/PRENSA-CABOS.webp",
  },
  {
    nome: "MANILHA RETA PINO ALLOY",
    foto: "/produtos/acessorios-cabos/MANILHA-RETA-PINO-ALLOY.png",
  },
  {
    nome: "MANILHA RETA",
    foto: "/produtos/acessorios-cabos/MANILHA-RETA.png",
  },
  {
    nome: "MANILHA CURVA ALLOY",
    foto: "/produtos/acessorios-cabos/MANILHA-CURVA-ALLOY.png",
  },
  {
    nome: "MANILHA CURVA",
    foto: "/produtos/acessorios-cabos/MANILHA-CURVA.png",
  },
  {
    nome: "ALICATE PRENSA CABOS",
    foto: "/produtos/acessorios-cabos/ALICATE-PRENSA-CABOS.webp",
  },
  {
    nome: "ANEL MASTER",
    foto: "/produtos/acessorios-cabos/ANEL-MASTER.png",
  },
  {
    nome: "ANELÃO",
    foto: "/produtos/acessorios-cabos/ANELAO.png",
  },
  {
    nome: "SOQUETE ABERTO",
    foto: "/produtos/acessorios-cabos/SOQUETE-ABERTO.webp",
  },
  {
    nome: "SOQUETE FECHADO",
    foto: "/produtos/acessorios-cabos/SOQUETE-FECHADO.webp",
  },
  {
    nome: "SOQUETE CUNHA",
    foto: "/produtos/acessorios-cabos/SOQUETE-CUNHA.webp",
  },
  {
    nome: "PARAFUSO OLHAL",
    foto: "/produtos/acessorios-cabos/PARAFUSO-OLHAL.png",
  },
  {
    nome: "PORCA OLHAL",
    foto: "/produtos/acessorios-cabos/PORCA-OLHAL.png",
  },
  {
    nome: "GRAMPO LEVE",
    foto: "/produtos/acessorios-cabos/GRAMPO-LEVE.webp",
  },
  {
    nome: "GRAMPO PESADO",
    foto: "/produtos/acessorios-cabos/GRAMPO-PESADO.webp",
  },
  {
    nome: "TIRANTE",
    foto: "/produtos/acessorios-cabos/TIRANTE.webp",
  },
  {
    nome: "ESTICADOR GANCHO X OLHAL",
    foto: "/produtos/acessorios-cabos/ESTICADOR-GANCHO-X-OLHAL.png",
  },
  {
    nome: "ESTICADOR MANILHA X OLHAL",
    foto: "/produtos/acessorios-cabos/ESTICADOR-MANILHA-X-OLHAL.png",
  },
  {
    nome: "ESTICADOR OLHAL X OLHAL",
    foto: "/produtos/acessorios-cabos/ESTICADOR-OLHAL-X-OLHAL.png",
  },
  {
    nome: "ESTICADOR MANILHA X MANILHA",
    foto: "/produtos/acessorios-cabos/ESTICADOR-MANILHA-X-MANILHA.png",
  },
  {
    nome: "MOSQUETÃO",
    foto: "/produtos/acessorios-cabos/MOSQUETAO.png",
  },
  {
    nome: "PEGA CHAPA HORIZONTAL",
    foto: "/produtos/acessorios-cabos/PEGA-CHAPA-HORIZONTAL.webp",
  },
  {
    nome: "PEGA CHAPA VERTICAL",
    foto: "/produtos/acessorios-cabos/PEGA-CHAPA-VERTICAL.png",
  },
  {
    nome: "PETESCA COM OLHAL",
    foto: "/produtos/acessorios-cabos/PETESCA-COM-OLHAL.png",
  },
  {
    nome: "PETESCA COM GANCHO",
    foto: "/produtos/acessorios-cabos/PETESCA-COM-GANCHO.png",
  },
  {
    nome: "SAPATILHA",
    foto: "/produtos/acessorios-cabos/SAPATILHA.png",
  },
];

const listaDeAcessoriosCorrentes = [
  {
    nome: "ELO DE LIGAÇÃO",
    foto: "/produtos/acessorios-correntes/ELO-DE-LIGACAO.png",
  },
  {
    nome: "GANCHO OLHAL",
    foto: "/produtos/acessorios-correntes/GANCHO-OLHAL.png",
  },
  {
    nome: "GANCHO CLEVIS",
    foto: "/produtos/acessorios-correntes/GANCHO-CLEVIS.png",
  },
  {
    nome: "GANCHO OLHAL COM ENCURTADOR",
    foto: "/produtos/acessorios-correntes/GANCHO-OLHAL-COM-ENCURTADOR.png",
  },
  {
    nome: "GANCHO CLÉVIS COM ENCURTADOR",
    foto: "/produtos/acessorios-correntes/GANCHO-CLEVIS-COM-ENCURTADOR.png",
  },
  {
    nome: "GANCHO OLHAL AUTOMÁTICO",
    foto: "/produtos/acessorios-correntes/GANCHO-OLHAL-AUTOMATICO.png",
  },
  {
    nome: "GANCHO CLÉVIS AUTOMÁTICO",
    foto: "/produtos/acessorios-correntes/GANCHO-CLEVIS-AUTOMATICO.png",
  },
  {
    nome: "GANCHO GIRATÓRIO AUTOMÁTICO",
    foto: "/produtos/acessorios-correntes/GANCHO-GIRATORIO-AUTOMATICO.png",
  },
  {
    nome: "GANCHO OLHAL DE FUNDIÇÃO",
    foto: "/produtos/acessorios-correntes/GANCHO-OLHAL-DE-FUNDICAO.png",
  },
  {
    nome: "TENSIONADOR DE CORRENTE TIPO CATRACA",
    foto: "/produtos/acessorios-correntes/TENSIONADOR-DE-CORRENTE-TIPO-CATRACA.png",
  },
  {
    nome: "TENSIONADOR DE CORRENTE TIPO ALAVANCA",
    foto: "/produtos/acessorios-correntes/TENSIONADOR-DE-CORRENTE-TIPO-ALAVANCA.png",
  },
  {
    nome: "ANEL DE CARGA",
    foto: "/produtos/acessorios-correntes/ANEL-DE-CARGA.png",
  },
  {
    nome: "ANEL MASTER",
    foto: "/produtos/acessorios-cabos/ANEL-MASTER.png",
  },
  {
    nome: "ANEL DE CARGA COM ENCURTADOR",
    foto: "/produtos/acessorios-correntes/ANEL-DE-CARGA-COM-ENCURTADOR.webp",
  },
  {
    nome: "ANEL DE CARGA COM DOIS ENCURTADORES",
    foto: "/produtos/acessorios-correntes/ANEL-DE-CARGA-COM-DOIS-ENCURTADORES.png",
  },
  {
    nome: "ELO DE LIGAÇÃO CG",
    foto: "/produtos/acessorios-correntes/ELO-DE-LIGACAO-CG.webp",
  },
  {
    nome: "ELO DE LIGAÇÃO CGD",
    foto: "/produtos/acessorios-correntes/ELO-DE-LIGACAO-CGD.webp",
  },
  {
    nome: "ELO DE LIGAÇÃO CL",
    foto: "/produtos/acessorios-correntes/ELO-DE-LIGACAO-CL.webp",
  },
  {
    nome: "ENCURTADOR MIG",
    foto: "/produtos/acessorios-correntes/ENCURTADOR-MIG.jpg",
  },
  {
    nome: "OLHAL DE ELEVAÇÃO",
    foto: "/produtos/acessorios-correntes/OLHAL-DE-ELEVACAO.png",
  },
  {
    nome: "LINGAS DE CORRENTE GRAU 8",
    foto: "/produtos/acessorios-correntes/LINGAS-DE-CORRENTE-GRAU-8.png",
  },
  {
    nome: "LINGAS DE CORRENTE GRAU 10",
    foto: "/produtos/acessorios-correntes/LINGAS-DE-CORRENTE-GRAU-10.webp",
  },
];
const listaDeLacosDeCabos = [
  {
    nome: "LAÇOS TIPO RM, RM8, RM11 - ALMA DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACOS-TIPO-RM-RM8-RM11---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇOS TIPO RM, RM8, RM11 - ALMA DE FIBRA",
    foto: "/produtos/lacos-de-cabos/LACOS-TIPO-RM-RM8-RM11---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇO TIPO RM2 - ALMA DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-RM2---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇO TIPO RM2 - ALMA DE FIBRA",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-RM2---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇO TIPO RM3 - ALMA DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-RM3---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇO TIPO RM3 - ALMA DE FIBRA",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-RM3---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇO TIPO RM4 - ALMA DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-RM4---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇO TIPO RM4 - ALMA DE FIBRA",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-RM4---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇOS TIPO RM5 E RM6 - ALMA DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACOS-TIPO-RM5-E-RM6---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇOS TIPO RM5 E RM6 - ALMA DE FIBRA",
    foto: "/produtos/lacos-de-cabos/LACOS-TIPO-RM5-E-RM6---ALMA-DE-FIBRA.svg",
  },
  {
    nome: "LAÇOS TIPO RM7 E RM9 - ALMA DE AÇO",
    foto: "/produtos/lacos-de-cabos/LACOS-TIPO-RM7-E-RM9---ALMA-DE-ACO.svg",
  },
  {
    nome: "LAÇOS TIPO RM7 E RM9 - ALMA DE FIBRA",
    foto: "/produtos/lacos-de-cabos/LACOS-TIPO-RM7-E-RM9---ALMA-DE-FIBRA.svg",
  },
  {
    nome: "LAÇO TIPO GROMMET - ALMA AÇO",
    foto: "/produtos/lacos-de-cabos/LACO-TIPO-GROMMET---ALMA-ACO.svg",
  },
  {
    nome: "CAMISA DE PUXAMENTO (1 OLHAL OU CONEXAO DIRETA)",
    foto: "/produtos/lacos-de-cabos/CAMISA-DE-PUXAMENTO-(1-OLHAL-OU-CONEXAO-DIRETA).svg",
  },
];

const listaDeCintasElevacao = [
  {
    nome: "CINTA DE POLIÉSTER TIPO REDONDA",
    foto: "/produtos/cintas-poliester-elevacao/CINTA-DE-POLIESTER-TIPO-REDONDA.svg",
  },
  {
    nome: "CINTA DE POLIÉSTER TIPO SLING",
    foto: "/produtos/cintas-poliester-elevacao/CINTA-DE-POLIESTER-TIPO-SLING.svg",
  },
  {
    nome: "CINTA DE POLIÉSTER TIPO FLAT(steel)",
    foto: "/produtos/cintas-poliester-elevacao/CINTA-DE-POLIESTER-TIPO-FLAT(steel).svg",
  },
  {
    nome: "CINTA DE POLIÉSTER TIPO BAG(band)",
    foto: "/produtos/cintas-poliester-elevacao/CINTA-DE-POLIESTER-TIPO-BAG(band).svg",
  },
];

const listaDeCintasAmarracao = [
  {
    nome: "CINTA DE POLIÉSTER PARA AMARRAÇÃO DE CARGAS",
    foto: "/produtos/cintas-poliester-amarracao/CINTA-DE-POLIESTER-PARA-AMARRACAO-DE-CARGAS.svg",
  },
];

const listaDeEquipamentos = [
  {
    nome: "LEVANTADOR MAGNÉTICO",
    foto: "/produtos/equipamentos/LEVANTADOR-MAGNETICO.png",
  },
  {
    nome: "GUINCHO DE ALAVANCA TIRFOR",
    foto: "/produtos/equipamentos/GUINCHO-DE-ALAVANCA-TIRFOR.png",
  },
  {
    nome: "GANCHO PATOLA",
    foto: "/produtos/equipamentos/GANCHO-PATOLA.svg",
  },
  {
    nome: "GANCHO TIPO C",
    foto: "/produtos/equipamentos/GANCHO-TIPO-C.svg",
  },
  {
    nome: "LUBRIFICANTES PARA CABOS DE AÇO",
    foto: "/produtos/equipamentos/LUBRIFICANTES-PARA-CABOS-DE-ACO.svg",
  },
  {
    nome: "BALANCIN DE TRAVESSA",
    foto: "/produtos/equipamentos/BALANCIN-DE-TRAVESSA.png",
  },
  {
    nome: "TALHA DE CORRENTE",
    foto: "/produtos/equipamentos/TALHA-DE-CORRENTE.png",
  },
];
