import React, {useState} from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import Modal from '../UI/Modal'

import classes from './NewUser.module.css'

const NewUser = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const localNameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const localAgeChangeHandler = (event) => {
        setAge(event.target.value)
    }
    
    const localSubmitHandler = (event) => {
        event.preventDefault()
        if (name.trim().length === 0) {
            setError({
                title: "Name Error",
                message: "Field must have a name"
            });
            return;
        }
        if (age.trim().length < 1) {
            setError({
                title: "Age Error",
                message: "Age must be greater then zero"
            });
            return;
        }
       
        let user = {
            id: Math.random().toString(),
            name: name,
            age: age,
        }

        props.addUserObject(user)

        setName('')
        setAge('')
    }

    const errorHandler = () => {
        setError()
    }

    return (
        <div>
        {error && <Modal title={error.title} message={error.message} errorHandler={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={localSubmitHandler}>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' value={name} onChange={localNameChangeHandler} />
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type='number' value={age} onChange={localAgeChangeHandler} />
                <Button type={'submit'}>Create User</Button>
            </form>
        </Card>
        </div>
    )
}

export default NewUser