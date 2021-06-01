import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { inputEmail, inputPassword } from '../../store/userSlice'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const password = useSelector(state => state.user.password)
    const email = useSelector(state => state.user.email)


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ defaultValues: { email: email, password: password } })

    const handleOnsubmit = (data) => {
        dispatch(inputEmail(data.email))
        dispatch(inputPassword(data.password))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1 className="display-3 m-5">Hello, login here!</h1>

                    <form onSubmit={handleSubmit(handleOnsubmit)}>

                        <div className="form-group row">
                            <label htmlFor="" className="col-2 col-form-label">Email</label>
                            <div className="col-8">
                                <input
                                    type="text" className="form-control" id="" placeholder="Email"
                                    {...register("email", {
                                        pattern: /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i
                                    })}
                                ></input>
                                {errors.email && <p>This is not a valid email format</p>}

                            </div>
                        </div>
                        <div className="form-group row">

                            <label htmlFor="" className="col-2 col-form-label">Password</label>
                            <div className="col-8">
                                <input type="password" className="form-control" id="" placeholder="Password"
                                    {...register("password", {
                                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i
                                    })}
                                ></input>
                                {errors.password && <p>Must contain minimum 7 characters, at least one letter and one number</p>}

                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary">Log in</button>
                            </div>
                        </div>


                    </form>
                </div></div>
        </div >
    )

}