import { useForm } from 'react-hook-form'
import { Button, Input } from './index'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            navigate("/")
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className='flex mt-4 mb-2 items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-900 text-white rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <br />
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label='Name'
                            placeholder='Enter your full name'
                            type='text'
                            {...register('name', {
                                required: true
                            })}
                        />
                        <Input
                            label='Email'
                            placeholder='Enter your email'
                            type='email'
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label='Password'
                            placeholder='Enter Password'
                            type='password'
                            {...register('password', {
                                required: true
                            })}
                        />
                        <Button
                            type='submit'
                            className='w-full bg-orange-400 updtbtn'
                        >
                            Sign Up
                        </Button>
                        <p className="mt-2 text-center text-base text-white/60">
                            Already have an account?&nbsp;
                            <Link
                                to="/login"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup