import style from '../styles/Containermp.module.css'

interface MPProps{
    children: any
}


export default function MP(props: MPProps) {
    return (

        <div className={style.containermp}>
            <label className={style.labelmp}>
                <input type="checkbox" className={style.mpseprada} id="mpseprada" />
                <input type="checkbox" className={style.mpcarregada} id="mpcarregada"/>
                {props.children}
                <input type="button" value="i" className={style.mpinfo} id="mpinfo" />
            </label>
        </div>
    )
}