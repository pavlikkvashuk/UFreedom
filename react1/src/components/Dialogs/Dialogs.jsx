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

const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Pavlo' },
        { id: 2, name: 'Sweetheart' },
        { id: 3, name: 'Mom' },
        { id: 4, name: 'Nazar' },
        { id: 5, name: 'Bogdan' },
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your project?' },
        { id: 3, message: 'When do you show it us?' },
        { id: 4, message: 'Hru?' },
        { id: 5, message: 'Good Morning!' },
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;