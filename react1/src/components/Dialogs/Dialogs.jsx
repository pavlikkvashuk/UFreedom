import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={Math.random()} />);

    let messagesElements = props.messages.map(m => <Message message={m.message} key={Math.random()} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={s.messages}>

                {messagesElements}
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className='button' type="button" ><span>Add message</span></button>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;