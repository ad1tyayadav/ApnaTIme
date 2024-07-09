import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Input } from './index'

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState()

    const submit = (e) => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        e.preventDefault();
        setError("")
        if (email && password) {
            navigate("/")
        } else {
            console.error("Please fill in all required fields.");
        }
    }


    return (
        <div
            className='flex mt-20 mb-16 items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-gray-900 text-white rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <br />
                <form onSubmit={handleSubmit(submit)}>
                    <div className='space-y-5'>
                        <Input
                            lable='email'
                            id='email'
                            placeholder='Enter your email'
                            type='email'
                            required
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            lable='Password'
                            id='password'
                            placeholder='Enter Password'
                            type='password'
                            required
                            {...register('password', {
                                required: true
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full bg-orange-400 updtbtn' >
                            Login
                        </Button>
                        <p className="mt-2 text-center text-base text-white/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login