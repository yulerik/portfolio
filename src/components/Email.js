import React, { useState } from 'react'

export default function Email() {

    const initInputs = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const contentClass = `h-screen col-start-2 col-end-13 flex flex-col justify-between`
    const formClass = `grid grid-cols-2 grid-rows-4 items-center w-1/2 h-1/2 mb-5`
    const spanClass = `relative z-0 mb-6 w-full group`
    const inputClass = `block py-2.5 px-0 w-full text-sm text-slate bg-transparent border-0 border-b-2 border-slate appearance-none focus:outline-none focus:ring-0 focus:border-accent peer`
    const labelClass = `absolute text-sm text-slate duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`
    const btnClass = `btn btn-accent btn-outline row-start-4 row-end-5 col-start-1 col-end-3`

    return (
        <div className={contentClass}>
            <h1>Contact Me</h1>
            <form className={formClass} >
                <span className={`${spanClass} row-start-1 row-end-2 col-start-1 col-end-2`}>
                    <input
                        className={`${inputClass}`}
                        type='text'
                        name='name'
                        placeholder=' '
                        value={inputs.name}
                        onChange={handleChange}
                        required
                    >
                    </input>
                    <label className={`${labelClass}`} for='name'>Name</label>
                </span>
                <span className={`${spanClass} row-start-1 row-end-2 col-start-2 col-end-3`}>
                    <input
                        className={`${inputClass}`}
                        type='email'
                        name='email'
                        placeholder=' '
                        value={inputs.email}
                        onChange={handleChange}
                        required
                    >
                    </input>
                    <label className={`${labelClass}`} for='email'>Email</label>
                </span>
                <span className={`${spanClass} row-start-2 row-end-3 col-start-1 col-end-3`}>
                    <input
                        className={`${inputClass} row-start-2 row-end-3 col-start-1 col-end-3`}
                        type='text'
                        name='subject'
                        placeholder=' '
                        value={inputs.subject}
                        onChange={handleChange}
                        required
                    >
                    </input>
                    <label className={`${labelClass}`} for='subject'>Subject</label>
                </span>
                <span className={`${spanClass} row-start-3 row-end-4 col-start-1 col-end-3`}>
                    <input
                        className={`${inputClass} row-start-3 row-end-4 col-start-1 col-end-3`}
                        type='text'
                        name='message'
                        placeholder=' '
                        value={inputs.message}
                        onChange={handleChange}
                        required
                    >
                    </input>
                    <label className={`${labelClass}`} for='message'>Message</label>
                </span>
                <button className={btnClass} >Send Email</button>
            </form>
        </div>
    )
}