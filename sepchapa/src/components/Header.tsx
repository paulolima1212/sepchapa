import style from '../styles/Header.module.css'

interface HeaderProps{
    children: string
}


export default function Header(props: HeaderProps) {
    return (
        <div className={style.header}>
            <header id='header'>{props.children}</header>
        </div>
    )
}