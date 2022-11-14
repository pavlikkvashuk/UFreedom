import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>

}
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Pavlo' id='1' />
                <DialogItem name='Sweetheart' id='2' />
                <DialogItem name='Mom' id='3' />
                <DialogItem name='Nazar' id='4' />
                <DialogItem name='Bogdan' id='5' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is your project?' />
                <Message message='When do you show it us?' />
                <Message message='Hru?' />
                <Message message='Good Morning!' />
            </div>
        </div>
    )
}

export default Dialogs;