// import { Checkbox } from "@material-tailwind/react";
import Join from "../../Components/Join";
import smile from "../../assets/images/smile.png";
import emailjs from '@emailjs/browser';
import {
    // useRef, 
    useState} from "react";
// import { NotificationManager} from 'react-notifications';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index() {

    const inputRef = document.getElementById("inputRef") as HTMLFormElement;

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    // const [checkbox, setCheckbox] = useState(false);
    // const [errorMsgs, setErrorMsgs] = useState("");
    
      const sendEmail = (e: { preventDefault: () => void; },) => {
     
        e.preventDefault();

        console.log(inputRef)
        // // console.log(inputRef.current)
      
        emailjs.sendForm('info@vroom', 'template_2t1jlge', inputRef,'W1Sr8ibFIQ75N7lgt')
          .then((result) => {
              console.log(result.text);
              console.log('message sent');
              toast.success("Message Delivered");
          }, (error) => {
              console.log(error.text);
              toast.error("Something went wrong, check network and try again!!")
          });
      };

  return (
    <div className="pt-10">
     <section className="h-[120vh] md:h-[70vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh] flex flex-col justify-center items-center">
      <div className="w-[90%] h-[80%] flex flex-col xl:flex-row">
      <div className="w-[100%] h-[100%] md:h-[60%] lg:h-[100%] xl:h-[100%]  xl:w-[50%] flex items-center justify-center ">
                    <div className="contactform w-[100%] h-[95%] lg:w-[75%] xl:w-[75%]">
                      <h2 className="header-two">Get in touch</h2>
                      <p>Our  team would love to hear from you.</p>
                      <div className="">
                      <form 
                        id="inputRef"
                    //   ref={inputRef}
                       onSubmit={sendEmail}>
                            <div className="name flex flex-col lg:flex-row xl:flex-row justify-between pt-4">
                                <div className=" w-[100%]xl:w-[50%] ">
                                    <div className="label py-2">First name</div>
                                    <input placeholder="First name" type="text" name="name"  onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    // errorMsg={errorMsgs.name}
                                     className="border-2 rounded-lg p-2 w-full lg:w-[95%] xl:w-[95%] px-4 border-gray300  bg-transparent" />
                                </div>
                                <div className=" w-[100%] xl:w-[50%]">
                                    <div className="label py-2 lg:px-4 xl:px-4">Last name</div>
                                    <div className="flex lg:justify-end xl:justify-end">
                                        <input placeholder="Last name" type="text" name="lastname"
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastname}
                                        className="border-2 rounded-lg p-2 w-full lg:w-[95%] xl:w-[95%] lg:px-4 xl:px-4 border-gray300  bg-transparent" />
                                    </div>
                                </div> 
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Email</div>
                                <div className="w-[100%] ">
                                    <input placeholder="you@company.com" type="email" name="email" onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    // errorMsg={errorMsgs.email}
                                     className="border-2 rounded-lg p-2 px-4 w-[100%] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Phone Number</div>
                                <div className="w-[100%] ">
                                    <input placeholder="First name" type="phoneNumber" name="number" onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                     className="border-2 rounded-lg p-2 px-4 w-[100%] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Message</div>
                                <div className="w-[100%] h-[20%]">
                                    <input placeholder="Leave us a message..." type="message" name="message" onChange={(e) => setMessage(e.target.value)}
                                     value={message}
                                    className="border-2 rounded-lg pb-12 px-4 w-[100%] h-[100px] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            {/* <div className="flex items-center ">
                                <Checkbox color="indigo"  crossOrigin={checkbox}  onChange={() => setCheckbox(true)} />
                                You agree to our friendly <a href="#"> privacy policy</a>.
                            </div> */}
                            <div className="btn">
                                <button className="bg-brand600 text-white p-2 w-[100%] rounded-lg" type="submit">
                                    send a message
                                </button>
                            </div>
                        </form>
                      </div>
                    </div>
            </div>
          <div className="w-[100%] xl:w-[50%] hidden lg:block xl:block">
              <img src={smile} className="object-cover h-[100%] w-[100%]"/>
          </div>
      </div>
      <ToastContainer />
    </section>
    <Join/>  
   
    </div>
  )
}
