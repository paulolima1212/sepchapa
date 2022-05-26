import style from '../styles/Containercarregada.module.css'

interface CarregadaProps {
    children: any
}

export default function Carregada(props: CarregadaProps){
    return (
        <div className={style.containercarregada}>
            <h1>MP CARREGADA</h1>
            {props.children}
        </div>
    )
}