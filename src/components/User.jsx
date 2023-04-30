import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from '../store/user/userActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const User = () => {

    const {isLoading, error, user} = useTypedSelector(state => state.user)
    
    console.log(isLoading, error, user)

    const dispath = useDispatch()

    return (
        <div className='user' >
            <button onClick={() => dispath(getUserById(1))} >
                Get user
            </button>
            {
                isLoading
                        ? <div>
                            <h2>Loading...</h2>
                        </div> 
                        : error 
                            ? <div>ПРоизошла оишбка</div>

                            : <div>
                                   <h1>User: {user.name}</h1>
                            </div>
            }
         
        </div>
    );
};

export default User;