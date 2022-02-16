import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElement = state.messages.map(message => <Message message={message.message} key={message.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let value = e.target.value
        props.updateNewMessageBody(value);
    }

    if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea  value={newMessageBody}
                                    placeholder={'Enter your message'}
                                    onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs