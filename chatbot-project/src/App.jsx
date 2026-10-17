import { useState ,useEffect , useRef} from 'react'
import{Chatbot} from 'supersimpledev'
import './App.css'

 function ChatInput({chatMessages,setChatMessage}){
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
        function ChatMessage({message,sender}){
            // const message=props.message;
            // let sender=props.sender;
            // let {message,sender}=props;
            //  if(sender==="robot"){ 
            //     return (
            //     <div>
            //         <img src="rob.jpg" height="50" width="50" />
            //         {message}
               
            //     </div>
            //     );
                    
            //     }
            //     else if(sender==="user"){
            //         return (
            //         <div>
            //           {message}
            //         <img src="user1.png" height="50" width="50" />
            //         </div>
            //         );
            //     }
            return(
                <div className={(sender==='user')?' flex justify-end  mt-4':' flex justify-start mb-1.5 '}> 
               {sender==='robot' && <img className="inline-block max-w-12 max-h-12" src="robot1.webp" />}
               <div className="bg-gray-200 px-3.5 py-3 rounded-xl mx-1.5 max-w-80 ">
                {message}
                </div>
                {sender=='user'&& <img className="inline-block mr-3.5  max-w-12 max-h-12" src="user1.png" height="50" width="50" />}
                
                </div>
            );
        }
        function ChatMessages({chatMessages}){
            const chatMessagesRef=useRef(null);
            useEffect(()=>{
                const containerElem= chatMessagesRef.current;
                if(containerElem){
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            },[chatMessages]);
           
        return ( 
            <div className="grow mt-5 overflow-scroll scrollbar-none scroll-auto" 
            ref={chatMessagesRef}>
                {chatMessages.map((chatMessage)=>{
                  return(
                <ChatMessage 
                    message={chatMessage.message}
                    sender={chatMessage.sender} 
                    key={chatMessage.id} 
                />
                );})
                }
            </div>  
        );
    }
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
