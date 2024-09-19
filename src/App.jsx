/* eslint-disable react/no-children-prop */
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import Section from "./components/section/Section";
import { Card } from "./components/Card/card";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: "Inter",Arial, Helvetica, sans-serif;
    color: #d4d4d4;
}
&::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }

  /* Cor do trilho da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Estilo do indicador da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
    border: 2px solid transparent;
  }

  /* Mudança de cor do indicador ao passar o mouse */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
body {
  display: flex;
  justify-content: center;
 // background-color: #101638;
  background-color: #111;
}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
`;

const LanguageBallons = styled.div`
  margin-top: 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: #2c2c2c;
  padding: 3px 10px;
  border-radius: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main
          style={{
            backgroundColor: "transparent",
            flex: "2.5",
            paddingTop: "6rem",
            paddingBottom: "6rem",
          }}
        >
          <Section id="about">
            Minha jornada na programação começou com um interesse em tecnologia
            e jogos. Inicialmente, foi uma curiosidade superficial, mas logo sez
            nti anecessidade de me aprofundar para entender melhor o que estava
            por trás disso. Então, ingressei na faculdade de Análise e
            Desenvolvimento deSistemas, onde me apaixonei pela área. Após
            concluir o curso, dei meusprimeiros passos no mercado de trabalho,
            transformando essa paixão emcarreira.Minha jornada na programação
            começou com um interesse em tecnologia e jogos. Inicialmente, foi
            uma curiosidade superficial, mas logo sez nti anecessidade de me
            aprofundar para entender melhor o que estava por trás disso. Então,
            ingressei na faculdade de Análise e Desenvolvimento deSistemas, onde
            me apaixonei pela área. Após concluir o curso, dei meusprimeiros
            passos no mercado de trabalho, transformando essa paixão
            emcarreira.Minha jornada na programação começou com um interesse em
            tecnologia e jogos. Inicialmente, foi uma curiosidade superficial,
            mas logo sez nti anecessidade de me aprofundar para entender melhor
            o que estava por trás disso. Então, ingressei na faculdade de
            Análise e Desenvolvimento deSistemas, onde me apaixonei pela área.
            Após concluir o curso, dei meusprimeiros passos no mercado de
            trabalho, transformando essa paixão emcarreira.Minha jornada na
            programação começou com um interesse em tecnologia e jogos.
            Inicialmente, foi uma curiosidade superficial, mas logo sez nti
            anecessidade de me aprofundar para entender melhor o que estava por
            trás disso. Então, ingressei na faculdade de Análise e
            Desenvolvimento deSistemas, onde me apaixonei pela área. Após
            concluir o curso, dei meusprimeiros passos no mercado de trabalho,
            transformando essa paixão emcarreira.Minha jornada na programação
            começou com um interesse em tecnologia e jogos. Inicialmente, foi
            uma curiosidade superficial, mas logo sez nti anecessidade de me
            aprofundar para entender melhor o que estava por trás disso. Então,
            ingressei na faculdade de Análise e Desenvolvimento deSistemas, onde
            me apaixonei pela área. Após concluir o curso, dei meusprimeiros
            passos no mercado de trabalho, transformando essa paixão
            emcarreira.Minha jornada na programação começou com um interesse em
            tecnologia e jogos. Inicialmente, foi uma curiosidade superficial,
            mas logo sez nti anecessidade de me aprofundar para entender melhor
            o que estava por trás disso. Então, ingressei na faculdade de
            Análise e Desenvolvimento deSistemas, onde me apaixonei pela área.
            Após concluir o curso, dei meusprimeiros passos no mercado de
            trabalho, transformando essa paixão emcarreira.Minha jornada na
            programação começou com um interesse em tecnologia e jogos.
            Inicialmente, foi uma curiosidade superficial, mas logo sez nti
            anecessidade de me aprofundar para entender melhor o que estava por
            trás disso. Então, ingressei na faculdade de Análise e
            Desenvolvimento deSistemas, onde me apaixonei pela área. Após
            concluir o curso, dei meusprimeiros passos no mercado de trabalho,
            transformando essa paixão emcarreira.Minha jornada na programação
            começou com um interesse em tecnologia e jogos. Inicialmente, foi
            uma curiosidade superficial, mas logo sez nti anecessidade de me
            aprofundar para entender melhor o que estava por trás disso. Então,
            ingressei na faculdade de Análise e Desenvolvimento deSistemas, onde
            me apaixonei pela área. Após concluir o curso, dei meusprimeiros
            passos no mercado de trabalho, transformando essa paixão
            emcarreira.Minha jornada na programação começou com um interesse em
            tecnologia e jogos. Inicialmente, foi uma curiosidade superficial,
            mas logo sez nti anecessidade de me aprofundar para entender melhor
            o que estava por trás disso. Então, ingressei na faculdade de
            Análise e Desenvolvimento deSistemas, onde me apaixonei pela área.
            Após concluir o curso, dei meusprimeiros passos no mercado de
            trabalho, transformando essa paixão emcarreira.Minha jornada na
            programação começou com um interesse em tecnologia e jogos.
            Inicialmente, foi uma curiosidade superficial, mas logo sez nti
            anecessidade de me aprofundar para entender melhor o que estava por
            trás disso. Então, ingressei na faculdade de Análise e
            Desenvolvimento deSistemas, onde me apaixonei pela área. Após
            concluir o curso, dei meusprimeiros passos no mercado de trabalho,
            transformando essa paixão emcarreira.
          </Section>
          <Section
            id="experience"
            children={
              "Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web.Enquanto estava na universidade, foquei no desenvolvimento front-end, onde aprofundei meus estudos em tecnologias como React e suas bibliotecas. Além do conteúdo acadêmico, investi em cursos complementares para expandir meus conhecimentos em JavaScript, HTML, CSS, e frameworks como React.js. Esses estudos me permitiram criar projetos mais robustos, tanto para as disciplinas quanto para meu portfólio, aplicando boas práticas e explorando componentes reutilizáveis, gestão de estados e estilização com ferramentas como styled-components. Essa dedicação me preparou para enfrentar desafios do mercado de trabalho com uma base sólida em desenvolvimento web."
            }
          />
          <Section id="projects">
            <Card
              id="projects"
              date="May - Dec 2000"
              title="Lorem ipsum dolor sit amet elit sed"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
            >
              <LanguageBallons>HTML</LanguageBallons>
              <LanguageBallons>CSS</LanguageBallons>
              <LanguageBallons>JavaScript</LanguageBallons>
            </Card>
            <Card
              id="projects"
              date="May - Dec 2000"
              title="Lorem ipsum dolor sit amet elit sed"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
            >
              <LanguageBallons>HTML</LanguageBallons>
              <LanguageBallons>CSS</LanguageBallons>
              <LanguageBallons>JavaScript</LanguageBallons>
            </Card>
            <Card
              id="projects"
              date="May - Dec 2000"
              title="Lorem ipsum dolor sit amet elit sed"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
            >
              <LanguageBallons>HTML</LanguageBallons>
              <LanguageBallons>CSS</LanguageBallons>
              <LanguageBallons>JavaScript</LanguageBallons>
            </Card>
            <Card
              id="projects"
              date="May - Dec 2000"
              title="Lorem ipsum dolor sit amet elit sed"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt."
            >
              <LanguageBallons>HTML</LanguageBallons>
              <LanguageBallons>CSS</LanguageBallons>
              <LanguageBallons>JavaScript</LanguageBallons>
            </Card>
          </Section>
        </main>
      </Wrapper>
    </>
  );
}

export default App;
