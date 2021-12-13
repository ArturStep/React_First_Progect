import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' +s.active}>
                    Artur
                </div>
                <div className={s.dialog}>
                    Polina
                </div>
                <div className={s.dialog}>
                    Artem
                </div>
                <div className={s.dialog}>
                    Eugene
                </div>
                <div className={s.dialog}>
                    Kristina
                </div>
                <div className={s.dialog}>
                    Roma
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>

    )
}

export default Dialogs