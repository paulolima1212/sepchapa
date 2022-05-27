import style from '../styles/Containerseparar.module.css'

interface SepararProps{
    children: any
}

export default function Separar(props: SepararProps){
    return (
        <div className={style.containerseparar}>
            <h1>MP À SEPARAR</h1>
            {props.children}
        </div>
    )
}