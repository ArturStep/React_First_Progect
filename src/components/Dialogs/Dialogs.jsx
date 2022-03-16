import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import MessageForm from "./MessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messagesElement = state.messages.map(message => <Message message={message.message} key={message.id} />)

    let onSendMessageClick = (message) => {
        props.sendMessage(message);
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
                   <MessageForm onSubmit={onSendMessageClick}/>
                </div>
            </div>
        </div>

    )
}

export default Dialogs