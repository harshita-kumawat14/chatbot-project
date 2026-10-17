import RobotProfile from '../assets/robot1.webp';
import UserProfile from '../assets/user1.png';
export function ChatMessage({message,sender}){
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
               {sender==='robot' && <img className="inline-block max-w-12 max-h-12" src={RobotProfile} />}
               <div className="bg-gray-200 px-3.5 py-3 rounded-xl mx-1.5 max-w-80 ">
                {message}
                </div>
                {sender=='user'&& <img className="inline-block mr-3.5  max-w-12 max-h-12" src={UserProfile} height="50" width="50" />}
                
                </div>
            );
        }