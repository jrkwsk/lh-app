import React, {useEffect} from 'react'
import {UserItem} from '../../Users/components/UserItem'
import { useDispatch, useSelector } from "react-redux"
import {fetchUsers} from '../../../store/usersSlice' 


export const UsersList = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers())        
    }, [dispatch])

    return (
        <div className="container">
        <div className="row no-gutters">
            {users.users.map(user => <div className="col-2" key={user.id}>
                <UserItem user={user} />
            </div>)}
        </div>
    </div>
    )
}
