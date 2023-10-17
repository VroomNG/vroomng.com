import drivergirl from "../../assets/images/drivergirl.jpg"
import apple from "../../assets/svg/apple.svg"
// import suitdriver from "../../assets/images/suitdriver.png"
import pinkdriver from "../../assets/images/pinkdriver.png"
import shirtdriver from "../../assets/images/shirtdriver.png"
import carman from "../../assets/images/carman.jpg"
import smile from "../../assets/images/backseat.jpg"
import vroomer from "../../assets/images/vroomer.jpg"
import mockup from "../../assets/images/mockup.png"
import handsomeguy from "../../assets/images/handsomeguy.jpg"
import home from "../../assets/images/Home.png"
import playstore from "../../assets/svg/playstore.svg"
// import vector from "../../assets/svg/Vector.svg"
// import { Carousel, IconButton } from "@material-tailwind/react";
import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Checkbox } from "@material-tailwind/react";
import Join from "../../Components/Join";
import emailjs from '@emailjs/browser';
// import {useRef} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const btn = [
    {
        id:1,
        title: "Download on the",
        store: "App Store",
        icon: apple,
        link: "https://apps.apple.com/ng/app/vroom-ride/id1551813250"
    },
    {
        id:2,
        title: "Get it on ",
        store: "GooglePlay",
        icon: playstore,
        link: "https://play.google.com/store/apps/details?id=com.vroomtech.vroomdriver"
    }
]

const img = [
    {
        id: 1,
        title: 'Earn and Enjoy on Every Drive',
        description: 'Turn your daily drive into a rewarding experience. Drive with Vroom, earn on every trip, and enjoy the journey with our driver-friendly platform.',
        brand:true,
        linkImg: shirtdriver
      },
    // {
    //   id: 1,
    //   title: 'Reliability Unleashed',
    //   description: 'Navigate your world effortlessly with Vroom. Our user-friendly app makes journey planning a breeze, putting you in control of your travel experience',
    //   brand:true,
    //   linkImg:suitdriver,
    // },
    {
        id: 2,
        title: 'Reliability Unleashed',
        description: 'Navigate your world effortlessly with Vroom. Our user-friendly app makes journey planning a breeze, putting you in control of your travel experience',
        brand:false,
        linkImg: handsomeguy,
      },
    
    {
      id: 3,
      title: 'Safety as Our Priority',
      description: 'Safety is paramount at Vroom. From thorough driver screenings to real-time trip monitoring, we prioritize your well-being every step of the way.',
      brand:true,
      linkImg: vroomer 
    },
    
    // {
    //   id: 6,
    //   title: 'Minecraft',
    //   description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   brand:false,
    //   linkImg:
    //     'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
    // },
    {
        id: 4,
        title: 'Effortless Journey Planning',
        description: 'Navigate your world effortlessly with Vroom. Our user-friendly app makes journey planning a breeze, putting you in control of your travel experience.',
        brand:false,
        linkImg: pinkdriver,
      },
    // {
    //   id: 6,
    //   title: 'Earn and Enjoy on Every Drive',
    //   description: 'Turn your daily drive into a rewarding experience. Drive with Vroom, earn on every trip, and enjoy the journey with our driver-friendly platform.',
    //   brand:false,
    //   linkImg: shirtdriver
    // },
    // {
    //   id: 8,
    //   title: 'Unravel Two',
    //   description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //   brand:false,
    //   linkImg:
    //     'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
    // },
  ];

export default function Index() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    // const getform = useRef();

    //   const sendEmail = () => {
    //   }

      const sendEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault();

        // useEffect(()=>{
        //   let ctx = getform.current
        // },[])
        
        emailjs.sendForm('info@vroom', 
        'template_2t1jlge',
        // getform.current, 
         'W1Sr8ibFIQ75N7lgt')
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
    <div className="h-full w-full" >
       <header className="pattern h-[110vh] md:h-[110vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh]">
            <div className="flex justify-center pt-[10%] xl:pt-[8%] 2xl:pt-0 overflow-hidden pb-[5%] w-full h-full">
                <div className="container flex flex-wrap lg:flex-nowrap xl:flex-nowrap w-[90%]">
                    {/* <img src={vector} className="hidden lg:block z-[100] w-[40%] mt-[160%] md:w-[20%] md:mt-[40%] md:ml-[40%] lg:w-[20%]  lg:mt-[40%] lg:ml-[40%] xl:mt-[35%] absolute"/> */}
                    <div className="flex md:justify-center items-center mt-8 md:mt-0 lg:mt-0 xl:mt-0 w-[100%] md:w-[100%] lg:w-[55%] xl:w-[55%]">
                        <div className=" h-[90%] flex flex-col justify-center w-[100%] md:w-[90%] md:h-[60%] mt-12 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                            <h1 className="max-header text-center lg:text-left"> Safe, Simple and Exciting Way to Ride. </h1>
                            <div className="w-[100%] py-4 ">
                                <p className="text-center lg:text-left">
                                    Whether you're heading out or hitting the road, Vroom is your go-to travel companion. Passengers, enjoy seamless rides with our trusted drivers. Drivers, embark on a rewarding journey with us. Your next adventure awaits!
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-between xl:justify-between
                             2xl:justify-between w-full lg:w-[55%] xl:w-[55%] mt-6 md:mt-0 md:py-4 lg:py-4 xl:py-4  ">
                                {btn.map((item)=> {
                                    return(
                                        <div key={item.id} className=" mx-4 lg:mx-0 xl:mx-0 2xl:mx-0 ">
                                          <a
                                            href={item.link}>
                                                <button  className="bg-black flex w-36 md:w-40 text-white rounded-lg ">
                                                <span className="w-[30%] p-2 flex items-center justify-center">
                                                    <img src={item.icon} width={"30px"}/>
                                                </span>
                                                <span className="w-[60] flex flex-col items-center justify-center">
                                                    <p className="text-[10px] md:text-xm lg:text-xm pt-1 md:pt-0 lg:pt-0 xl:pt-0 md:h-[20px] lg:h-[20px] xl:h-[20px]">{item.title}</p>
                                                    <p className="text-sm font-medium">{item.store}</p>
                                                </span>    
                                            </button></a>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                    <div className=" w-[100%] flex items-center mt-16 md:mt-0 lg:mt-0 xl:mt-0 lg:w-[45%] xl:w-[45%] 2xl:w-[45%] xl:h-[100%]">
                    <img src={drivergirl} className="object-cover lg:h-[36rem] lg:w-[34rem] xl:h-[36rem] xl:w-[34rem] 2xl:h-[38rem] 2xl:w-[34rem] "/>
                    </div>
                </div>
            </div>
      </header>
       <section className="h-[110vh] md:h-[80vh] lg:h-[110vh] xl:h-[110vh] 2xl:h-[110vh] w-full flex justify-center items-center ">
         <div className="w-[90%] h-[90%] md:h-[85%] flex flex-col justify-center">
             <div className="flex flex-col  md:flex-row h-[30%] md:h-[10%] lg:md-h[30%] xl:h-[30%] 2xl:h-[30%]">
                <div className="w-[100%] md:w-[50%] lg:w-[75%] xl:w-[75%] 2xl:w-[75%] ">
                   <h2 className="header-two">Sign up to Recieve</h2>
                   <p >See what you get once you become a Vroomer</p>
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%]  flex flex-col md:flex-row md:pl-16 lg:pl-14  xl:pl-16 2xl:pl-14 items-center py-4 lg:mx-6 justify-evenly mt-2">
                            {/* <div className="w-[100%] py-1 flex  md:justify-end lg:justify-center xl:justify-end 2x:justify-end xl:mr-2">
                              <button className="rounded-md bg-white border-2 border-gray500 w-full p-2 md:w-32 lg:w-32 xl:w-32 md:p-2">
                                <span className="text-[14px] font-medium md:text-md lg:text-md xl:text-md">Create account</span> 
                              </button>
                            </div>
                            <div className="w-[100%] py-1 md:ml-2">
                                <button className="rounded-md bg-brand600 border-2 border-brand600 w-full p-2 text-white md:w-32 lg:w-32 xl:w-32 md:p-2">
                                  <span className="text-[14px] font-medium">Our Customers</span>
                                </button>
                            </div> */}
                </div>
             </div>
            <div className="h-[70%] xl:h-[90%]">
               <Slider {...settings}>
                {
                    img.map((item) => {
                        return(
                            <div className={item.brand==true? "card bg-brand400" : "card bg-brand600"}>
                                <div className=" h-[100%]">
                                    <div className="card-top">
                                        <img src={item.linkImg}/>
                                    </div>
                                    <div className={item.brand==true? "card-bottom bg-brand200" : "card-bottom bg-brand300"}>
                                        <h3 className=" font-small text-[16px] leading-5 pb-2">{item.title}</h3>
                                        <p className="text-[12px] leading-5">{item.description}</p>
                                    </div> 
                                </div>
                            </div>
                        )
                    })
                }
                
               </Slider>
            </div>
         </div>
      </section>

      <section className="h-[110vh] flex justify-center items-center  bg-green-50">
      <div className="w-[90%] h-[90%] flex flex-col  2xl:flex-row">
             <div className="flex h-[20%]">
                <div className="w-[100%] md:w-[75%] lg:w-[75%] xl:w-[75%]">
                    <h4 className="header-four">Our story</h4>
                   <h2 className="header-two">We’re just getting started</h2>
                   <p >We’ve already have over 400 happy Vroomers, making their lives easier here.</p>
                </div>
             </div>
            <div className=" h-[70%]  xl:mt-12" >
                <div className=" flex flex-col lg:flex-row xl:flex-row  w-[100%]">
                   <div className="w-[100%] lg:w-[50%] bg-green-400 xl:w-[50%] 2xl:w-[50%]">
                    <img src={carman} className="object-cover w-[100%] h-[100%]" />
                   </div>
                   <div className="w-[100%] lg:w-[50%] flex-col flex justify-start xl:w-[50%] 2xl:w-[50%] pt-16 lg:p-10 xl:p-10 2xl:p-10">
                        <p className="text-[16px] text-justify  leading-[20px] ">
                            At Vroom, our journey is a testament to the commitment we have for redefining the way we move. Since our inception, we've achieved significant milestones, and we're just getting started:
                            <ul className="bullet-list py-4">
                            <li className="ml-8 py-2">Embracing a vibrant community of passengers and drivers, we've grown together, sharing in the joys of every journey</li>
                            <li className="ml-8 py-2">Our success is powered by cutting-edge technology. From seamless app experiences to smart route optimization, innovation is at our core.</li>
                            <li className="ml-8 py-2">We've built a reputation for trust and reliability. Passengers and drivers alike choose Vroom for journeys that go beyond transportation, they are experiences.</li>
                            </ul>
                            As we look to the future, our commitment to providing exceptional rides, fostering community connections, and embracing the latest in transportation technology remains unwavering. Join us on this exciting journey, because at Vroom, every ride is an opportunity to create lasting memories
                        </p>
                   </div>
                </div>
            </div>
        </div>
      </section>
    
      <section className="h-[120vh] xl:h-[100vh] flex justify-center items-center ">
      <div className="w-[100%] h-[100%]">
             <div className="flex items-center justify-center w-full h-[10%] xl:h-[20%]">
                <div className="w-[90%] flex-col justify-center ">
                    <h4 className="header-four">Get Rides faster</h4>
                   <h2 className="header-two">How it works</h2>
                </div>
             </div>
            <div className=" h-[80%] flex flex-col xl:flex-row" >
                <div className="w-[100%] h-[60%] xl:w-[50%] xl:h-[100%] flex items-center justify-center">
                    <div className="mx-4">
                        <div className="w-1 bg-purple-800 h-[150px]"></div>
                        <div className="w-1 bg-gray-400 h-[150px] "></div>
                        <div className="w-1 bg-gray-400 h-[150px]"></div>
                    </div>
                   <div className=" w-[85%] h-[90%]">
                    <span>
                        <div className="py-1">
                            <h5 className="header-five">Select your destination</h5>
                        </div>   
                        <div className="text-gray600 font-sm py-2 w-[90%]">
                        Choose where you want to go with a simple tap. Enter your destination, and we'll take care of the rest.
                        </div>
                        <span>
                        {/* <h5 className="header-five">Learn more</h5>  */}
                        </span>
                    </span>
                    <span>
                        <div className="py-1">
                            <h5 className="header-five">Request a ride</h5>
                        </div>   
                        <div className="text-gray600 font-sm py-2 w-[90%]">
                        Hit the "Request Ride" button, and we'll connect you with the nearest available driver. Watch your ride approach in real-time on the map
                        </div>
                        <span>
                        {/* <h5 className="header-five">Learn more</h5>  */}

                        </span>
                    </span>
                    <span>
                        <div className="py-1">
                            <h5 className="header-five">Vrooooooom!!</h5>
                        </div>   
                        <div className="text-gray600 font-sm py-2 w-[90%]">
                        Vroooooooom!
                        Once your driver arrives, hop in and experience the thrill of a smooth and safe ride to your destination. Pay seamlessly through the app, and don't forget to rate your experience!
                        Learn more
                        </div>
                        <span>
                        {/* <h5 className="header-five">Learn more</h5>  */}
                        </span>
                    </span>
                   </div>
                </div>
                <div className="w-[100%] h-[40%] xl:h-[100%] xl:w-[50%] flex xl:block items-center justify-center  ">
                    <img src={home} className="z-[999] object-cover md:hidden mt-8  w-48 xl:block xl:mt-[6rem] xl:ml-8 xl:absolute xl:w-[20%] xl:h-[65%]"/>
                    <img src={mockup} className=" ml-[20%] h-[100%] w-[80%] hidden md:block lg:block xl:block"/>
                </div>
            </div>
        </div>
      </section>

     <Join/>  
     
       <section className="h-[100vh] md:h-[70vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh] flex flex-col justify-center items-center">
        <div className="w-[90%] h-[80%] flex flex-col xl:flex-row">
            <div className="w-[100%] h-[100%] md:h-[60%] lg:h-[100%] xl:h-[100%]  xl:w-[50%] flex items-center justify-center ">
                    <div className="contactform w-[100%] h-[95%] lg:w-[75%] xl:w-[75%]">
                      <h2 className="header-two">Get in touch</h2>
                      <p>Our  team would love to hear from you.</p>
                      <div className="">
                      <form
                    //    ref={getform}
                        onSubmit={sendEmail}>
                            <div className="name flex flex-col lg:flex-row xl:flex-row justify-between pt-4">
                                <div className=" w-[100%]xl:w-[50%] ">
                                    <div className="label py-2">First name</div>
                                    <input placeholder="First name" type="text" name="from_name" className="border-2 rounded-lg p-2 w-full lg:w-[95%] xl:w-[95%] px-4 border-gray300  bg-transparent" />
                                </div>
                                <div className=" w-[100%] xl:w-[50%]">
                                    <div className="label py-2 lg:px-4 xl:px-4">Last name</div>
                                    <div className="flex lg:justify-end xl:justify-end">
                                        <input placeholder="Last name" type="text" name="from_lastname" className="border-2 rounded-lg p-2 w-full lg:w-[95%] xl:w-[95%] lg:px-4 xl:px-4 border-gray300  bg-transparent" />
                                    </div>
                                </div> 
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Email</div>
                                <div className="w-[100%] ">
                                    <input placeholder="you@company.com" type="email" name="from_email" className="border-2 rounded-lg p-2 px-4 w-[100%] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Phone Number</div>
                                <div className="w-[100%] ">
                                    <input placeholder="First name" type="phoneNumber" name="from_phonenumber" className="border-2 rounded-lg p-2 px-4 w-[100%] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Message</div>
                                <div className="w-[100%] h-[20%]">
                                    <input placeholder="Leave us a message..." type="message" name="message" className="border-2 rounded-lg pb-12 px-4 w-[100%] h-[100px] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <Checkbox color="indigo"  crossOrigin={undefined} />
                                You agree to our friendly <a href="#"> privacy policy</a>.
                            </div>
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
      </section>
     
      <ToastContainer />
    </div>
  )
}
