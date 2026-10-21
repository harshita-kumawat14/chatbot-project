import { useState ,useEffect} from 'react';
import { ChatInput } from './components/ChatInput';
import{Chatbot} from 'supersimpledev';
import ChatMessages from './components/ChatMessages';

import './App.css'
function youtube(){
    return(
        <a href='https://www.youtube.com/'>youtube. click here</a>
    );
}
function App(){ 
            const [chatMessages,setChatMessage]= useState([]);
            useEffect(()=>{
                Chatbot.addResponses({
                    "i love you":"i love you too ,it means alot to me,Thank you",
                    "youtube":youtube
                })
            })
            return(                                                                                       
            <div className="max-w-xl mx-auto h-dvh flex flex-col ">
            {chatMessages.length===0&&(
                <p className="text-center">Welcome to the chatbot project! send a message using the textbox below.</p>
            )}
            <ChatMessages 
            chatMessages={chatMessages}
             />
             <ChatInput 
            chatMessages={chatMessages}
            setChatMessage={setChatMessage}

/>
            </div>
        );}
export default App
