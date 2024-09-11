import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Header } from "./components/header/Header";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: "Inter",Arial, Helvetica, sans-serif;
    color: #e2e8f0;
}

body {
  display: flex;
  justify-content: center;
  background-color: #101638;
}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 1000px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <main style={{ backgroundColor: "transparent", flex: "1" }}>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Quam gravida
          inceptos faucibus lacus habitasse sapien fames eleifend faucibus. Id
          amet fringilla nec scelerisque nascetur netus turpis. Ipsum rutrum
          efficitur erat viverra scelerisque. Leo metus fringilla proin nec at
          maximus. Sociosqu aliquam nullam litora nulla cras. Ridiculus mattis
          porttitor ultrices et libero feugiat dignissim. Est fusce finibus
          nisl, bibendum facilisis dolor pretium. Pharetra adipiscing hac velit
          habitant morbi maecenas tristique. Taciti lacinia aliquam rutrum ad
          massa imperdiet ultricies. Finibus penatibus dictumst ad integer
          volutpat lacus. Consequat cubilia suscipit tellus luctus pretium eget
          a. Class aenean metus, maecenas rhoncus ridiculus neque aliquet sapien
          est. Afusce nisl id efficitur habitant odio laoreet rutrum. Eu turpis
          per aenean per; sollicitudin integer lacinia. Imperdiet consequat at
          venenatis; etiam orci duis. Massa suspendisse mattis ac lacus mus
          facilisi. Vitae parturient finibus iaculis phasellus vehicula
          maecenas. Sapien velit cras dignissim nisl lobortis mattis. Vitae
          iaculis ac dui consequat id, euismod taciti. Potenti fusce euismod
          euismod aptent porta nec volutpat luctus. Sit augue lacus nulla;
          euismod velit dolor. Neque natoque dapibus eleifend proin mollis!
          Vulputate tempus vestibulum aenean conubia penatibus lectus imperdiet.
          Sagittis id sed iaculis aptent a porttitor venenatis ut mattis. Leo
          condimentum magnis himenaeos, convallis ac eget fermentum. Proin
          viverra est malesuada semper malesuada enim ex blandit nulla. Blandit
          fringilla lacinia eleifend vivamus nascetur suscipit morbi fringilla
          ligula. Torquent eros euismod non lectus vitae curae class praesent.
          Nullam eros dictumst adipiscing vitae ipsum class. Vel primis egestas
          volutpat natoque imperdiet posuere. Feugiat etiam elit sem efficitur
          nec risus, et cras. Nunc leo risus habitant leo felis orci egestas
          tempus. Efficitur hac semper facilisis magna euismod; metus velit
          lorem. Efficitur nulla accumsan molestie congue lacus. Sociosqu cras
          eros mollis hac parturient ipsum class. Amet feugiat fusce habitant
          quis elementum odio viverra. Hac adipiscing morbi dis netus volutpat
          odio. Ridiculus feugiat placerat euismod auctor dictum luctus ipsum
          integer. Eleifend dis quisque vitae quam habitasse taciti blandit a
          phasellus. Tempus cursus vivamus; praesent pharetra maximus tellus
          aenean. Auctor curae sem erat ac eu leo porttitor. Parturient in
          feugiat metus donec aliquet lacinia. Est elementum commodo dapibus
          quis ornare. Urna facilisis ipsum gravida congue vestibulum. Quisque
          inceptos nunc feugiat bibendum est nullam. Ridiculus adipiscing
          interdum non quis placerat laoreet posuere. Rhoncus cubilia ultrices
          justo potenti elementum penatibus lectus iaculis. Curae amet sem
          semper, dignissim sem sociosqu. Auctor felis augue sodales ex
          sollicitudin. Fames dignissim nam; sociosqu lorem nulla nulla cubilia
          natoque scelerisque. Accumsan cursus diam arcu odio scelerisque nibh
          dolor. Viverra ornare etiam magnis taciti eu. Vestibulum placerat
          inceptos ultrices leo fermentum. Mus justo phasellus velit finibus
          hendrerit non. Mattis penatibus mattis amet sollicitudin viverra nisl
          nullam bibendum. Adipiscing sed pharetra aliquet elit eleifend
          pulvinar imperdiet habitasse adipiscing. Accumsan maecenas phasellus
          diam elit vehicula. Nulla volutpat tempor potenti, elit elit penatibus
          accumsan. Vivamus vel metus tellus suspendisse aliquet ullamcorper
          tempus turpis inceptos. Aenean elit in vulputate leo euismod
          vestibulum. Magna mollis sollicitudin porttitor vel est tincidunt
          tellus. Sodales magnis integer risus velit duis euismod platea.
          Interdum quam nec semper interdum velit phasellus auctor natoque. Orci
          dictumst tortor ut massa rutrum leo curae. Eros vivamus lobortis
          inceptos conubia lorem leo ut tristique donec. Dignissim ex metus
          integer etiam vulputate. Habitasse dapibus facilisi dolor luctus ante
          taciti pellentesque sollicitudin! Ultrices sodales sed integer posuere
          maximus natoque non. Diam molestie turpis tempus efficitur morbi
          vestibulum. Dolor velit elit inceptos ad ad odio. Curae vivamus
          finibus integer consectetur et mauris aliquam. Tortor tortor eros
          mollis cursus taciti praesent. Sollicitudin augue duis parturient
          litora condimentum fames in scelerisque. Porta aenean velit conubia
          sapien viverra venenatis commodo dignissim. Leo habitant ante tempor
          aptent feugiat vestibulum. Sit varius primis ultricies urna lacus
          potenti netus. Augue cubilia ridiculus fusce proin curabitur eleifend
          pretium lacinia pulvinar. Augue mattis auctor netus habitant bibendum
          aliquet faucibus. Amaecenas massa blandit penatibus turpis et integer
          euismod. Bibendum ridiculus tincidunt arcu aliquam arcu. Elementum
          viverra erat leo phasellus non dapibus mattis. Semper ac curabitur
          lacinia himenaeos nascetur nam nulla in sodales. Ad adipiscing netus
          volutpat aliquet phasellus mattis dignissim euismod. Dis fermentum
          massa aptent ante imperdiet litora magnis dolor at! Natoque commodo
          rhoncus hac praesent posuere tincidunt. Id ligula maecenas nunc diam
          platea platea nisl ligula. Habitasse conubia dis ultrices accumsan
          ante. Convallis praesent pharetra pellentesque pretium penatibus. Duis
          euismod blandit, nascetur purus class aenean. Fusce dolor amet vel
          morbi penatibus, mauris nibh est. Morbi varius blandit velit, metus
          non inceptos per. Massa cubilia vivamus habitant accumsan malesuada
          parturient curabitur facilisis vitae. Ex sagittis at orci mauris sit.
          Fusce semper magna inceptos nec tincidunt. Per imperdiet purus dapibus
          libero praesent fringilla. Magna class vivamus ut dolor euismod
          lobortis, neque tortor. Auctor tempor ipsum inceptos vehicula
          habitasse. Hendrerit mollis ultrices tellus ornare egestas eu libero
          ridiculus. Bibendum interdum mollis adipiscing hendrerit curae. Magnis
          montes condimentum aenean purus netus egestas habitant. Primis fusce
          sodales elit ipsum class turpis. Ac nascetur aptent; diam penatibus
          sollicitudin platea est. Erat conubia penatibus nullam nisl ornare
          sit. Aliquam lobortis nunc lobortis posuere vulputate. Rhoncus gravida
          lacus vestibulum lacus at. Magnis netus scelerisque class tempus in
          vulputate. Justo nostra aliquam hendrerit quisque odio blandit.
          Rhoncus bibendum scelerisque; phasellus praesent aptent conubia.
          Himenaeos adipiscing et vestibulum netus condimentum congue imperdiet.
          Tempor elit curae praesent facilisis laoreet pellentesque. Ac mauris
          fames velit sem nibh? Ullamcorper convallis fermentum eu vitae
          penatibus primis pharetra parturient vehicula. Suscipit cubilia nostra
          taciti imperdiet dignissim vulputate iaculis porttitor. Luctus quisque
          vestibulum tellus molestie enim habitant. Etiam venenatis mi tempor
          velit ac risus purus. Lacinia leo nunc quis elit torquent. Habitant
          phasellus euismod sed; volutpat pharetra penatibus. Duis torquent
          pretium sapien scelerisque imperdiet pretium elit. Congue purus
          vivamus facilisi; duis odio venenatis netus hac amet? Sit purus
          sociosqu habitasse eros quam faucibus. Lacinia id convallis elit
          scelerisque tristique in faucibus habitant? Pretium dolor vestibulum
          in curabitur nec blandit id tellus. Ultricies interdum condimentum
          consectetur nibh commodo laoreet nibh elementum taciti. Curae dapibus
          dignissim aliquam; molestie parturient integer. Habitasse pellentesque
          rutrum tempor; nam urna suscipit consectetur accumsan. Mollis nisl
          feugiat rutrum efficitur orci dapibus convallis urna. Finibus platea
          tristique rutrum aliquet ipsum aliquam eu ullamcorper erat. Nunc ut
          accumsan inceptos; proin in condimentum. Amauris nisi enim primis
          commodo. Condimentum odio turpis torquent laoreet, mattis blandit
          pharetra. Fringilla pretium laoreet luctus diam accumsan efficitur
          curabitur ipsum suscipit! Vivamus sollicitudin cubilia cras eleifend
          litora sem libero leo. Aliquam aliquet purus massa conubia sem. Risus
          varius ut duis habitasse mi cubilia penatibus tellus feugiat. In ex
          vel dictumst netus porta arcu. Vestibulum purus primis lectus nascetur
          porttitor ornare enim ultricies. Litora taciti fringilla vel nascetur
          quam dolor sollicitudin arcu quam. Mauris mi adipiscing neque molestie
          ipsum rutrum gravida magnis. Elit praesent vehicula sagittis
          suspendisse luctus velit eleifend. Egestas suspendisse faucibus nam;
          quisque fermentum rhoncus. Ante velit cras sagittis neque hac posuere
          volutpat nisi nisl. Convallis nunc fames habitant nisl lacus montes
          primis id accumsan. Mattis suscipit nisl mattis cursus integer varius
          a. Ipsum nostra turpis massa fames taciti vitae. Aliquam rutrum
          iaculis curae dis tellus. Porttitor magnis vulputate nam pellentesque,
          fames turpis consequat. Nunc luctus eros habitant velit auctor
          molestie felis. Leo nam tempus at viverra egestas tortor consectetur
          aenean congue. Nunc taciti proin diam ante dis. Fringilla platea eros
          dictum senectus parturient. Accumsan magnis magna mollis; nibh
          tincidunt nascetur suscipit lacinia? Lacinia ac hac non in nullam leo.
          At natoque integer interdum odio fermentum maximus curae. Molestie
          eleifend lacus gravida inceptos fermentum vehicula. Apharetra sagittis
          interdum, porttitor commodo sit himenaeos. Condimentum nascetur purus
          fames netus porta diam. Eget ante facilisi platea malesuada vulputate
          neque. Condimentum dolor nostra etiam, tellus venenatis ipsum eros.
          Himenaeos mi curae suscipit posuere volutpat. Habitant dignissim a
          neque praesent quisque. Auctor arcu ac ad blandit lacinia. Suspendisse
          gravida turpis ornare consectetur aenean. Sociosqu sapien erat
          torquent platea risus phasellus turpis. Potenti fringilla dignissim
          finibus, metus dictum convallis. Nisi euismod finibus ex donec massa
          lobortis.
        </main>
      </Wrapper>
    </>
  );
}

export default App;
