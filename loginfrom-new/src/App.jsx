import { useState } from 'react'
import './App.css'

function App(){
            const [isShowPassword,setShowPassword]=useState(true);
            function showPasswords(){
                if(isShowPassword){
                    setShowPassword(false);
                }
                else{
                    setShowPassword(true);
                }
            }
            return(
                <>
                <h1 
                    className=" font-arial text-2xl mx-2 my-6">
                    Hello ,Welcome to my Website</h1>
                <input 
                    placeholder="Email" 
                    type="email" 
                    className="block mx-2 border-2 px-2 rounded-b-lg rounded-t-lg h-10 w-60  border-gray-400" />
                <div>
                    <input 
                        placeholder="Password" 
                        type={`${isShowPassword ? 'password':'text'}`}
                        className=" mx-2 border-2 border-gray-400 px-2 rounded-b-lg rounded-t-lg h-10 w-60  my-2.5 "/>
                    <button 
                        className=""
                        onClick={showPasswords}>
                        {`${isShowPassword?'show':'hide'}`}
                    </button>
                </div>
                <button 
                    className=" inline-block mx-2 bg-blue-500 px-2  text-white rounded-b-lg rounded-t-lg h-10 w-20 my-2.5 mb-16 ">
                    Login
                </button>
                <button 
                    className=" bg-blue-500 px-2  text-white rounded-b-lg rounded-t-lg h-10 w-20 my-2.5 mb-16">
                    Sign up
                </button>
                </>
            );
            }
       

export default App
