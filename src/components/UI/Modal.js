import React, {Fragment} from "react";
import ReactDOM from 'react-dom'

import Card from './Card'
import Button from './Button'

import classes from './Modal.module.css'

const ModalBackdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.errorHandler}/>
    )
}

const ModelOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header>
                <h1>{props.title}</h1>
            </header>
            <div>
                <p>{props.message}</p>
            </div>
            <footer>
                <Button type="click" onClick={props.errorHandler}>Okay</Button>
            </footer>
        </Card>   
    )
}

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <ModalBackdrop errorHandler={props.errorHandler}/>,
                document.getElementById('modal-backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModelOverlay 
                title={props.title}
                message={props.message}
                errorHandler={props.errorHandler}/>,
                document.getElementById('modal-overlay-root')
            )}
        </Fragment>
    )
}

export default Modal