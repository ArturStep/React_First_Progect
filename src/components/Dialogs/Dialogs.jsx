import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        debugger;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea onChange={onMessageChange} ref={ newMessageElement } value={props.dialogsPage.newMessageText}></textarea>
            </div>
            <div>
                <button onClick={ addMessage }>Add post</button>
            </div>
        </div>

    )
}

export default Dialogs