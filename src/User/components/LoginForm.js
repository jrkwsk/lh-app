import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { inputNickname, inputEmail, inputPassword } from '../../store/rootSlice'

export const LoginForm = () => {
    const dispatch = useDispatch()
    const nickname = useSelector(state => state.nickname)
    const password = useSelector(state => state.password)
    const email = useSelector(state => state.email)

    const { register, handleSubmit } = useForm({ defaultValues: { nickname: nickname } })

    const handleOnsubmit = (data) => {
        dispatch(inputNickname(data.nickname))
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
                            <label htmlFor="nickname" className="col-2 col-form-label">Nickname</label>
                            <div className="col-8">
                                <input type="text" className="form-control" id="" placeholder="Nickname"
                                ></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-2 col-form-label">Email</label>
                            <div className="col-8">
                                <input type="text" className="form-control" id="" placeholder="Email"></input>
                            </div>
                        </div>
                        <div className="form-group row">

                            <label htmlFor="" className="col-2 col-form-label">Password</label>
                            <div className="col-8">
                                <input type="password" className="form-control" id="" placeholder="Password"></input>
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-8">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>


                    </form>
                </div></div>
        </div>
    )

}