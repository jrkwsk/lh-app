import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
// import { logUser } from '../../store/userSlice'
import { authReducer, fetchUser, logUser } from '../../store/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'


export const LoginForm = () => {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user)
    const status = useSelector(state => state.status)
    const auth = useSelector(state => state.auth)



    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {email: undefined, password: undefined},

      })
   
    const handleOnsubmit = (data) => {
        dispatch(fetchUser(data))

        console.log("login data: ", data.email, data.password)
        // setSuccess(true)
    }

    console.log("status: ", status)
    console.log("auth: ", auth)

    return (
        <div className="container">
            <div className="row">
{auth.isAuthenticated === false

? 
                <div className="col-8">

                    <h1 className="display-3 m-5">Hello, login here!</h1>
                  

                    <form onSubmit={handleSubmit(handleOnsubmit)}>

                       
                        <div className="form-group row">
                            <label htmlFor="" className="col-2 col-form-label">Email</label>
                            <div className="col-8">
                                <input
                                    type="text" className="form-control" id="" placeholder="Email"
                                    {...register("email", {
                                        required: true
                                    })}
                                ></input>
                                {errors.email && <p>this is required</p>}

                            </div>
                        </div>
                        <div className="form-group row">

                            <label htmlFor="" className="col-2 col-form-label">Password</label>
                            <div className="col-8">
                                <input type="password" className="form-control" id="" placeholder="Password"
                                    {...register("password", {
                                        required: true
                                    })}
                                ></input>
                                {errors.password && <p>this is required</p>}

                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </div>


                    </form>
                </div>
                 : 

                 <div>
                 <div className="alert alert-success" role="alert">
    <strong>Well done!</strong> You successfully logged in!</div>    
                    </div>

                }

        </div>
        </div>
    )

}