import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from '../../store/userSlice'

export const RegisterForm = () => {
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user)


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const handleOnsubmit = (data) => {
        dispatch(registerUser(data))
        console.log(data)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <h1 className="display-3 m-5">Hello, register here!</h1>

                    <form onSubmit={handleSubmit(handleOnsubmit)}>

                        <div className="form-group row">
                            <label htmlFor="nickname" className="col-2 col-form-label">Nickname</label>
                            <div className="col-8">
                                <input
                                    type="text" className="form-control" id="" placeholder="Nickname"
                                    {...register("nickname", {
                                        minLength: 7
                                    })}
                                ></input>

                                {errors.nickname && <p>Your nickname is less than 7 characters</p>}

                            </div>
                        </div>
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
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </div>


                    </form>
                </div></div>
        </div >
    )

}