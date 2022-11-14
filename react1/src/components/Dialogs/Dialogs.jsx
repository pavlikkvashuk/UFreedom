import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                   <NavLink to='/dialogs/1'>Pavlo</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/2'>Sweethurt</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/3'>Iryna</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/4'>Nazar</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/5'>Bogdan</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your project?</div>
                <div className={s.message}>When do you show it us?</div>
                <div className={s.message}>Hru?</div>
                <div className={s.message}>Good Morning!</div>
            </div>
        </div>
    )
}

export default Dialogs;