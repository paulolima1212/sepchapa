import style from '../styles/Maincontainer.module.css'

interface MaincontainerProps{
    children: any
}

export default function Maincontainer(props: MaincontainerProps) {
    return (
        <div className={style.maincontainer}>
            {props.children}
        </div>
    )
}