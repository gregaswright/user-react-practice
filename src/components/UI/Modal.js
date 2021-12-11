import React from "react";

import Card from './Card'
import Button from './Button'

import classes from './Modal.module.css'

const Modal = (props) => {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.errorHandler}/>
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
        </div>
    )
}

export default Modal