import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logUser } from '../../store/userSlice'


export const LoginForm = () => {
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user)


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {email: undefined, password: undefined},
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
      })

   
    const handleOnsubmit = (data) => {
        dispatch(logUser(data))
        console.log("login data: ", data)
        // setSuccess(true)
    }

    return (
        <div className="container">
            <div className="row">
{success === false 
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
                                        pattern: /\b[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z0-9]+)+/i,
                                        required: true
                                    })}
                                ></input>
                                {errors.email && <p>Are you shure? It is not a valid email format</p>}

                            </div>
                        </div>
                        <div className="form-group row">

                            <label htmlFor="" className="col-2 col-form-label">Password</label>
                            <div className="col-8">
                                <input type="password" className="form-control" id="" placeholder="Password"
                                    {...register("password", {
                                        // pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                                        required: true
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