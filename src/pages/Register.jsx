import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const login = (e) => {
        e.preventDefault()
        navigate('/login', { replace: true })
    }
    return (
        <div className='Register Login'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h1>Register</h1>
                        <form onSubmit={login} >
                            <input required type="text" className="form-control mb-3" placeholder='Ism' />
                            <input required type="number" className="form-control mb-3" placeholder='Telefon raqam' />
                            <input required type="password" className="form-control mb-3" placeholder='Parol' />
                            <button className="btn btn-outline-dark btn-block ms-auto mt-3">Ro'yhatdan o'tish </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register