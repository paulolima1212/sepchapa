import style from '../styles/Containerseparada.module.css'

interface SeparadaProps {
    children: any
}

export default function Separada(props: SeparadaProps){
    return (
        <div className={style.containerseparada}>
            <h1>MP SEPARARADA</h1>
            {props.children}
        </div>
    )
}