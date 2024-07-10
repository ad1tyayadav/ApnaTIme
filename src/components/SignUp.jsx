import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, Input } from './index';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        const { name, email, password } = data;
        if (name && email && password) {
            // Here you can implement actual signup logic
            toast.success("Welcome! This is the initial phase of the project");
        } else {
            console.error("Please fill in all required fields.");
        }
    };

    return (
        <div className='flex mt-20 mb-16 items-center justify-center w-full'>
            <div className={`mx-auto w-full max-w-lg bg-gray-900 text-white rounded-xl p-10 border border-black/10`}>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up for an account</h2>
                <br />
                <form onSubmit={handleSubmit(submit)}>
                    <div className="space-y-5">
                        <Input
                            label='Name'
                            id='name'
                            placeholder='Enter your full name'
                            type='text'
                            required
                            {...register('name', { required: true })}
                        />
                        <Input
                            label='Email'
                            id='email'
                            placeholder='Enter your email'
                            type='email'
                            required
                            {...register("email", {
                                required: true,
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: "Email address must be a valid address"
                                }
                            })}
                        />
                        <Input
                            label='Password'
                            id='password'
                            placeholder='Enter Password'
                            type='password'
                            required
                            {...register('password', { required: true })}
                        />
                        <Button
                            type='submit'
                            className='w-full bg-orange-400 updtbtn'
                        >
                            Sign Up
                        </Button>
                        <ToastContainer />
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
    );
}

export default Signup;
