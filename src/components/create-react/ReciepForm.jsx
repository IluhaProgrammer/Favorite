import React, { useState } from 'react'
import { useCreateReciepMutation } from '../../store/api/reciep.api'
import { FormEvent } from 'react'

const ReciepForm = () => {

    const[reciep, setReciep] = useState({
        name: '',
        image: '',
    })

    const [createReciep] = useCreateReciepMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        createReciep(reciep).then(() => {
            setReciep({...reciep, name: '', image: ''})
        })
    }


    return (
        <div className='res' >
            <p>Create your own reciep</p>
            <form onSubmit={handleSubmit} >
            <label>
                <input 
                    type='text' 
                    placeholder='Name of reciep' 
                    value={reciep.name}
                    onChange={e => setReciep({...reciep, name: e.target.value})}
                />
                <input 
                    type='text' 
                    placeholder='Image' 
                    value={reciep.image}
                    onChange={e => setReciep({...reciep, image: e.target.value})}
                />
                <button type='submit' >Add a reciep</button>
            </label>
            </form>
        </div>
    )
}

export default ReciepForm