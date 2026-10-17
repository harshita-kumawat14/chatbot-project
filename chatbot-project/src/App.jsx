import { useState } from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'
function App(){ 
            const [chatMessages,setChatMessage]= useState([]);
            
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
