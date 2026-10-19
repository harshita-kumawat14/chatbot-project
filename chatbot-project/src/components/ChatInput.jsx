import { useState} from 'react'
import{Chatbot} from 'supersimpledev';

export function ChatInput({chatMessages,setChatMessage}){
            const[inputText,setInputText]= useState('');
            function saveInputText(event){
             setInputText(event.target.value) ;
            }
            function sendMesage(){
                const newChat=[
                ...chatMessages,
                {
                    message:inputText,
                    sender:'user',
                    id:crypto.randomUUID()
                }
                ]
                setChatMessage(newChat);
               const response= Chatbot.getResponse(inputText);
               setChatMessage([
                ...newChat,
                {
                    message:response,
                    sender:'robot',
                    id:crypto.randomUUID()
                }
                ]);
                setInputText('');
            }
            return (
                <div className="my-5 mx-2 flex ">
                    <input className="border-2 h-11 w-100 border-gray-400 rounded-xl px-4 py-3 text-lg flex-1"
                        placeholder="Send a message to Chatbot " 
                        size="30" 
                        onChange={saveInputText} 
                        value={inputText}
                    />
                    <button 
                        className="text-white bg-blue-700 w-20 h-11 rounded-xl px-0.5 text-center mx-2  hover:cursor-pointer text-lg"
                        onClick={sendMesage}
                    >Send</button>
                    </div>
            );
        }