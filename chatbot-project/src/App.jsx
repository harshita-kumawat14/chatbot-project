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
            const [chatMessages,setChatMessage]= useState(JSON.parse(localStorage.getItem('messages'))||[{
                message:'hello chatbot',
                sender: 'user',
                id:'id1'
            }]);
            useEffect(()=>{
                Chatbot.addResponses({
                    "i love you":"i love you too ,it means alot to me,Thank you",
                    "youtube":youtube
                })
            })
            useEffect(()=>{
                localStorage.setItem('messages',JSON.stringify(chatMessages))
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
