import Header from "../components/Header"
import Maincontainer from "../components/Maincontainer"
import Separar from "../components/Containerseparar"
import Separada from "../components/Containerseparada"
import Carregada from "../components/Containercarregada"
import MP from "../components/Containermp"


export default function Home() {
  return (

    <div>
      <Header>SEPARADOR DE CHAPAS</Header>

      <Maincontainer>

        <Separar>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5030 </MP>
        </Separar>

        <hr />

        <Separada>
          <MP> S235JR 3MM AG-2022200051 LASER 5040 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5040 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5040 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5040 </MP>
          <MP> S235JR 3MM AG-2022200051 LASER 5040 </MP>
        </Separada>

        <hr />

        <Carregada>
          <MP> S235JR 3MM AG-2022200051  LASER3030 </MP>
          <MP> S235JR 3MM AG-2022200051  LASER3030 </MP>
          <MP> S235JR 3MM AG-2022200051  LASER3030 </MP>
        </Carregada>

      </Maincontainer>

    </div>

  )
}
