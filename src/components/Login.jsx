import { useContext, useState } from "react";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google-logo.svg";

const Login = () => {

    const {login, loginwithGoogle} =useContext(AuthContext);
    const [error, setError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";

    
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Login Successful!!");
            navigate(from, {replace: true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });
        
    }

    //sign up using google account
    const handleRegister = () =>{
        loginwithGoogle().then((result)=>{
            const user = result.user;
            alert("Sign up successfully!")
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });
    }

  return (
    <div>
            <div className="h-screen bg-gradient-to-br from-green-500 to-yellow-300 flex justify-center items-center w-full">
                <form onSubmit={handleLogin}>
                    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl font-semibold text-gray-600">Login</h1>
                            <div>
                            <label htmlFor="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
                            <input id="email" name="email" type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                            <label htmlFor="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
                            <input id="password" name="password" type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        {error ? <p className="text-red-600 text-base">Email or Password is not correct:</p> : ""}
                        <p>If you haven't an account. Please <Link to="/sign-up" className="text-blue-600">SignUp</Link> Here</p>
                    <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Log in</button>
                    <hr />
                    <div className="flex w-full items-center flex-col mt-5 gap-3">
                        <button onClick={handleRegister} className="block"><img src={googleLogo} alt="" className="w-12 h-12 inline-block" />Login with Google</button>
                    </div>

                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login
