import drivergirl from "../../assets/images/drivergirl.jpg"
import apple from "../../assets/svg/apple.svg"
import suitdriver from "../../assets/images/suitdriver.png"
import pinkdriver from "../../assets/images/pinkdriver.png"
import shirtdriver from "../../assets/images/shirtdriver.png"
import carman from "../../assets/images/carman.jpg"
import smile from "../../assets/images/backseat.jpg"
// import vroom from "../../assets/images/vroom.png"
import mockup from "../../assets/images/mockup.png"
import passenger from "../../assets/images/passenger.png"
import home from "../../assets/images/Home.png"
import playstore from "../../assets/svg/playstore.svg"
import vector from "../../assets/svg/Vector.svg"
// import { Carousel, IconButton } from "@material-tailwind/react";
import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { Checkbox } from "@material-tailwind/react";



const btn = [
    {
        id:1,
        title: "Download on the",
        store: "App Store",
        icon: apple
    },
    {
        id:2,
        title: "Get it on ",
        store: "GooglePlay",
        icon: playstore
    }
]

const img = [
    {
      id: 1,
      title: 'Free Rides',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:true,
      linkImg:suitdriver,
    },
    {
      id: 2,
      title: 'Updates',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:false,
      linkImg: pinkdriver,
    },
    {
      id: 3,
      title: 'Commission Free',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:true,
      linkImg: shirtdriver
    },
    {
      id: 4,
      title: 'Updates',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:false,
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/s/super-mario-3d-world-plus-bowsers-fury-switch/hero?_a=AJADJWI0',
    },
    {
      id: 5,
      title: 'Updates',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:true,
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0',
    },
    {
      id: 6,
      title: 'Minecraft',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:false,
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
    },
    {
      id: 7,
      title: 'Updates',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:true,
      linkImg: shirtdriver
    },
    {
      id: 8,
      title: 'Unravel Two',
      description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit.',
      brand:false,
      linkImg:
        'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
    },
  ];

export default function index() {
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

    //   const cardstyle = {
    //     backgroundColor: '#000000',
    //   }
    
  return (
    <div className="h-full w-full" >
       <header className="h-[110vh] md:h-[110vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh] bg-neutral">
            <div className="flex justify-center pt-[10%] xl:pt-[8%] 2xl:pt-0 overflow-hidden pb-[5%] w-full h-full">
                <div className="container flex flex-wrap lg:flex-nowrap xl:flex-nowrap w-[90%]">
                    <img src={vector} className="hidden lg:block z-[100] w-[40%] mt-[160%] md:w-[20%] md:mt-[40%] md:ml-[40%] lg:w-[20%]  lg:mt-[40%] lg:ml-[40%] xl:mt-[35%] absolute"/>
                    <div className="flex md:justify-center items-center mt-8 md:mt-0 lg:mt-0 xl:mt-0 w-[100%] md:w-[100%] lg:w-[55%] xl:w-[55%]">
                        <div className=" h-[90%] flex flex-col justify-center w-[100%] md:w-[90%] md:h-[60%] mt-12 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                            <h1 className="text-center lg:text-left"> Safe, Simple and Exciting Way to Ride. </h1>
                            <div className="w-[100%] py-4 ">
                                <p className="text-center lg:text-left">Be one out first 100 drivers to get 3 months of commision
                                    free earnings, when you join our Vroom Family!
                                </p>
                            </div>
                            <div className="flex justify-center lg:justify-between xl:justify-between
                             2xl:justify-between w-full lg:w-[55%] xl:w-[55%] mt-6 md:mt-0 md:py-4 lg:py-4 xl:py-4  ">
                                {btn.map((item)=> {
                                    return(
                                        <div key={item.id} className=" mx-4 lg:mx-0 xl:mx-0 2xl:mx-0 ">
                                            <button  className="bg-black flex w-36 md:w-40 text-white rounded-lg ">
                                                <span className="w-[30%] p-2 flex items-center justify-center">
                                                    <img src={item.icon} width={"30px"}/>
                                                </span>
                                                <span className="w-[60] flex flex-col items-center justify-center">
                                                    <p className="text-[10px] md:text-xm lg:text-xm pt-1 md:pt-0 lg:pt-0 xl:pt-0 md:h-[20px] lg:h-[20px] xl:h-[20px]">{item.title}</p>
                                                    <p className="text-sm font-medium">{item.store}</p>
                                                </span>    
                                            </button>
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
                   <h2>Sign up to Recieve</h2>
                   <p >See what you get once you become a Vroomer</p>
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%]  flex flex-col md:flex-row md:pl-16 lg:pl-14  xl:pl-16 2xl:pl-14 items-center py-4 lg:mx-6 justify-evenly mt-2">
                            <div className="w-[100%] py-1 flex  md:justify-end lg:justify-center xl:justify-end 2x:justify-end xl:mr-2">
                              <button className="rounded-md bg-white border-2 border-gray500 w-full p-2 md:w-32 lg:w-32 xl:w-32 md:p-2">
                                <span className="text-[14px] font-medium md:text-md lg:text-md xl:text-md">Create account</span> 
                              </button>
                            </div>
                            <div className="w-[100%] py-1 md:ml-2">
                                <button className="rounded-md bg-brand600 border-2 border-brand600 w-full p-2 text-white md:w-32 lg:w-32 xl:w-32 md:p-2">
                                  <span className="text-[14px] font-medium">Our Customers</span>
                                </button>
                            </div>
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
                                        <h3 className="font-medium">{item.title}</h3>
                                        <span>{item.description}</span>
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
                    <h4>Our story</h4>
                   <h2>We’re just getting started</h2>
                   <p >We’ve already have over 400 happy Vroomers, making their lives easier here.</p>
                </div>
             </div>
            <div className=" h-[70%]  xl:mt-12" >
                <div className=" flex flex-col lg:flex-row xl:flex-row  w-[100%]">
                   <div className="w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
                    <img src={carman} />
                   </div>
                   <div className="w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] pt-16 lg:p-10 xl:p-10 2xl:p-10">
                    <p className="text-[16px] text-justify">
                        Sagittis et eu at elementum, quis in. Proin praesent volutpat
                         egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                        Lectus id duis vitae porttitor enim gravida morbi.
                        Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
                        Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
                        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                    </p>
                   </div>
                </div>
            </div>
        </div>
      </section>
    
      <section className="h-[120vh] xl:h-[100vh] flex justify-center items-center ">
      <div className="w-[100%] h-[100%]">
             <div className="flex justify-center w-full h-[10%] xl:h-[20%]">
                <div className="w-[90%] flex-col justify-center ">
                    <h4>Get RIdes faster</h4>
                   <h2>How it works</h2>
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
                            <h5>Select your destination</h5>
                        </div>   
                        <div className="text-gray600 font-sm py-2 w-[90%]">
                            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </div>
                        <span>
                        <h5>Learn more</h5> 

                        </span>
                    </span>
                    <span>
                        <div className="py-1">
                            <h5>Request a ride</h5>
                        </div>   
                        <div className="text-gray600 font-sm py-2 w-[90%]">
                            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </div>
                        <span>
                        <h5>Learn more</h5> 

                        </span>
                    </span>
                    <span>
                        <div className="py-1">
                            <h5>Vrooooooom!!</h5>
                        </div>   
                        <div className="text-gray600 font-sm py-2 w-[90%]">
                            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </div>
                        <span>
                        <h5>Learn more</h5> 

                        </span>
                    </span>
                   </div>
                </div>
                <div className="w-[100%] h-[40%] xl:h-[100%] xl:w-[50%] flex xl:block items-center justify-center  ">
                    <img src={home} className="z-[999] object-cover md:hidden :w-48 xl:block xl:mt-[6rem] xl:ml-8 xl:absolute xl:w-[20%] xl:h-[65%]"/>
                    <img src={mockup} className=" ml-[20%] h-[100%] w-[80%] hidden md:block lg:block xl:block"/>
                </div>
            </div>
        </div>
      </section>
       
      <section className="h-[80vh] mt-5 flex justify-center items-center">
        <div className="rounded-xl w-[90%] h-[90%] bg-brand400 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row xl:flex-row w-[90%] h-[100%]">
                <div className="w-[100%] h-[50%]  order-2  lg:w-[50%] lg:h-[100%]  xl:w-[50%] xl:h-[100%] lg:order-1 xl:order-1  flex items-center justify-center lg:justify-start xl:justify-start lg:items-end xl:items-end  ">
                    <img src={passenger} alt="" className="w-[90%] md:w-[34rem] lg:w-[30rem] xl:w-[32rem] object-cover"/>
                </div>
                <div className="w-[100%] h-[50%] order-1 lg:order-2 xl:order-2 lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%]  flex flex-col items-start justify-center">
                    <div className="w-[100%] lg:w-[80%] ">
                        <h2 className="py-4">Join 4,000+ Drivers and Riders on Vroom</h2>
                        <span className="text-[20px] py-4">Get the app and Start riding.</span>
                        <div className="flex justify-between py-4 mx-1 w-[80%]">
                        {btn.map((item)=> {
                                    return(
                                        <div key={item.id}>
                                            <button  className="bg-black flex w-36 md:w-40 text-white rounded-lg ">
                                                <span className="w-[30%] p-2 flex items-center justify-center">
                                                    <img src={item.icon} width={"30px"}/>
                                                </span>
                                                <span className="w-[60] flex flex-col items-center justify-center">
                                                    <p className="text-[10px] md:text-xm lg:text-xm pt-1 md:pt-0 lg:pt-0 xl:pt-0 md:h-[20px] lg:h-[20px] xl:h-[20px]">{item.title}</p>
                                                    <p className="text-sm font-medium">{item.store}</p>
                                                </span>    
                                            </button>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
       <section className="h-[120vh] flex flex-col justify-center items-center">
        <div className="w-[90%] h-[80%] flex flex-col xl:flex-row">
            <div className="w-[100%] xl:w-[50%] flex items-center justify-center lg:justify-start lg:pl-12 xl:justify-start xl:pl-12">
                    <div className="contactform w-[75%] h-[95%]">
                      <h2>Get in touch</h2>
                      <p>Our  team would love to hear from you.</p>
                      <div className="">
                        <form>
                            <div className="name flex justify-between pt-4">
                                <div className="w-[50%] ">
                                    <div className="label py-2">First name</div>
                                    <input placeholder="First name" className="border-2 rounded-lg p-2 w-[95%] px-4 border-gray300  bg-transparent" />
                                </div>
                                <div className="w-[50%]">
                                    <div className="label py-2 px-4">Last name</div>
                                    <div className="flex justify-end">
                                        <input placeholder="First name" className="border-2 rounded-lg p-2 w-[95%] px-4 border-gray300  bg-transparent" />
                                    </div>
                                </div> 
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Email</div>
                                <div className="w-[100%] ">
                                    <input placeholder="you@company.com" className="border-2 rounded-lg p-2 px-4 w-[100%] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Phone Number</div>
                                <div className="w-[100%] ">
                                    <input placeholder="First name" className="border-2 rounded-lg p-2 px-4 w-[100%] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="label py-2">Message</div>
                                <div className="w-[100%] h-[20%]">
                                    <input placeholder="Leave us a message..." className="border-2 rounded-lg pb-12 px-4 w-[100%] h-[100px] border-gray300  bg-transparent" />
                                </div>
                            </div>
                            <div className="flex items-center ">
                                <Checkbox color="indigo"  crossOrigin={undefined} />
                                You agree to our friendly <a href="#"> privacy policy</a>.
                            </div>
                            <div className="btn">
                                <button className="bg-brand600 text-white p-2 w-[100%] rounded-lg">
                                    send a message
                                </button>
                            </div>
                        </form>
                      </div>
                    </div>
            </div>
            <div className="w-[100%] xl:w-[50%]">
                <img src={smile} className="object-cover h-[100%] w-[100%]"/>
            </div>
        </div>
      </section>
     

    </div>
  )
}
