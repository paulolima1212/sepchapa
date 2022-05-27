import style from '../styles/Containerurgencias.module.css'

interface UrgenciasProps {
    children: any
}

export default function Urgencias(props: UrgenciasProps){
    return (
        <div className={style.containerurgencias}>
            <h1>URGÊNCIAS</h1>
            {props.children}
        </div>
    )
}