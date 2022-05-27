import Header from "../components/Header"
import Maincontainer from "../components/Maincontainer"
import Separar from "../components/Containerseparar"
import Separada from "../components/Containerseparada"
import Carregada from "../components/Containercarregada"
import MP from "../components/Containermp"
import Urgencias from "../components/Containerurgencias"
import Agrup from "../core/Agrup"


export default function Home() {



  return (

    <div>
      <Header>SEPARADOR DE CHAPAS</Header>

      <Maincontainer>

        <Urgencias >

        </Urgencias>

        <Separar>

        </Separar>

        <hr />

        <Separada>

        </Separada>

        <hr />

        <Carregada>

        </Carregada>

      </Maincontainer>

    </div>

  )
}
