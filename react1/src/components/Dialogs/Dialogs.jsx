import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={Math.random()} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} key={Math.random()} />)
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick} className='button' type="button" >Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;