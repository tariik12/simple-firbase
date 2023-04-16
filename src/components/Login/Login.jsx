import React, { useState } from 'react';
import {GoogleAuthProvider,GithubAuthProvider, getAuth, signOut,signInWithPopup} from 'firebase/auth';
import app from '../../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    console.log(user)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const handleGoogleSinIn = () =>{
       signInWithPopup(auth,googleProvider)
       .then(result =>{
        const loginUser = result.user;
        console.log(user)
        setUser(loginUser)
       })
       .catch(error =>{
       
        console.log('error', error.message)
       })
    }
    const handleSingOut = () =>{
        signOut (auth)
        .then(result =>{
            setUser(null)
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })
    }
     const handleGitHubSinIn =() =>{
        signInWithPopup(auth,gitHubProvider)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch(error =>{
            console.log(error)
        })
     }
    return (
        <div>
            {/*user ? logout : sign in */
                user ?
                <button onClick={handleSingOut}>Sing-out</button> :
           <>
             <button onClick={handleGoogleSinIn}>Google Login</button>
            <button onClick={handleGitHubSinIn}>GitHub Login</button>
           </>
            }

            {user && <div>
                <h3>User:{user.displayName}</h3>
                <h3>Email:{user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>

            }
        </div>
    );
};

export default Login;