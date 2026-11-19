# **🏆 RM Triunfo Cabos Website**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

## **🖼️ Projeto**
Este projeto é uma implementação do site institucional para a empresa **RM Triunfo Cabos**, desenvolvido com **TypeScript**, **Next.js 14**, **Tailwind CSS**, **HTML**, e **CSS**. O design foi prototipado no **Figma**.

**Nota**: Este projeto foi desenvolvido para uma empresa privada, portanto, alguns detalhes específicos, como processos de email, forçam que em caso de utilização seja necessária a modificação de alguns processos.

## **🚀 Funcionalidades**
- **Responsive Design:** O site é totalmente responsivo e adaptado para diversos dispositivos.
- **Performance:** Utilização de Next.js 14 para otimização de carregamento e melhor performance.
- **Estilização com Tailwind CSS:** Estilos modernos e modulares utilizando Tailwind CSS.

## **🔧 Tecnologias Utilizadas**
- **TypeScript**
- **Next.js 14**
- **Tailwind CSS**
- **HTML5**
- **CSS3**
- **Figma** (para o design)

## **▶️ Como rodar o projeto**

### Pré-requisitos
- [Node.js](https://nodejs.org/) 18.17 ou superior (testado com Node 22)
- [Yarn 1 (classic)](https://classic.yarnpkg.com/) — o projeto usa `yarn.lock` v1

> Se você tiver o Yarn 4+ instalado globalmente, use `npx yarn@1 <comando>` para não converter o lockfile.

### 1. Clonar e instalar as dependências
```bash
git clone https://github.com/Lorenzo-alt/triunfocabos.git
cd triunfocabos
yarn install --frozen-lockfile
```

### 2. Configurar as variáveis de ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# URL base do site (com barra no final) — usada para buscar produtos e serviços na API
SITE_URL=http://localhost:3000/

# String de conexão do MongoDB (Atlas)
MONGODB_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/db-triunfocabos?retryWrites=true&w=majority

# Conta Gmail usada pelo formulário de contato (use uma "senha de app" do Google)
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app
```

> Sem `EMAIL_USER`/`EMAIL_PASS` o site funciona normalmente, mas o envio do formulário de contato falha.

### 3. Rodar em modo de desenvolvimento
```bash
yarn dev
```
Acesse [http://localhost:3000](http://localhost:3000).

### 4. Build de produção
```bash
yarn build
yarn start
```
