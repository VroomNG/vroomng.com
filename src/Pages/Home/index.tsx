import drivergirl from "../../assets/images/drivergirl.jpg"
import apple from "../../assets/svg/apple.svg"
import suitdriver from "../../assets/images/suitdriver.png"
import pinkdriver from "../../assets/images/pinkdriver.png"
import shirtdriver from "../../assets/images/shirtdriver.png"
import playstore from "../../assets/svg/playstore.svg"
import vector from "../../assets/svg/Vector.svg"
// import { Carousel, IconButton } from "@material-tailwind/react";
import Slider from "react-slick"
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';



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
        dots: true,
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
              dots: true,
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
    
  return (
    <div className="h-full w-full bg-white " >
       <header className="h-[120vh] bg-neutral">
            <div className="flex justify-center pt-[10%] pb-[5%] w-full h-full" >
                <div className="container flex flex-wrap md:flex-nowrap lg:flex-nowrap xl:flex-nowrap w-[90%]">
                    <img src={vector} className="z-[100] w-[40%] mt-[160%] md:w-[20%] md:mt-[30%] md:ml-[40%] lg:w-[20%]  lg:mt-[30%] lg:ml-[40%] absolute"/>
                    <div className="flex justify-center items-center mt-8 md:mt-0 lg:mt-0 xl:mt-0  w-[100%]  md:w-[55%] lg:w-[55%] xl:w-[55%]">
                        <div className=" h-[60%] w-[90%]">
                            <h1> Safe, Simple and Exciting Way to Ride. </h1>
                            <div className="w-[90%] py-4">
                                <p className="text-center md:text-left lg:text-left xl:text-left">Be one out first 100 drivers to get 3 months of commision
                                    free earnings, when you join our Vroom Family!
                                </p>
                            </div>
                            <div className="flex w-[100%] md:w-[55%] lg:w-[55%] xl:w-[55%] justify-between py-4 ml-2 ">
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
                    <div className=" w-[100%] mt-16 md:mt-0 lg:mt-0 xl:mt-0 md:w-[45%] lg:w-[45%] xl:w-[45%]">
                        <img src={drivergirl} className="h-[100%] w-[100%] " /> 
                    </div>
                </div>
            </div>
      </header>
      
      <section className="h-[120vh] w-full flex justify-center items-center">
         <div className="w-[90%] h-[85%]">
             <div className="flex">
                <div className="w-[50%] md:w-[75%] lg:w-[75%] xl:w-[75%]">
                   <h2>Sign up to Recieve</h2>
                   <p >See what you get once you become a Vroomer</p>
                </div>
                <div className="w-[50%] md:w-[25%] lg:w-[25%] xl:w-[25%] flex items-center justify-around">
                   <button className="rounded-md bg-white border-2 border-brand600 md:w-32 lg:w-32 xl:w-32 md:p-2">
                    <span className="text-[12px] md:text-md lg:text-md xl:text-md">our Customers</span> 
                   </button>
                   <button className="rounded-md bg-brand600 border-2 border-brand600 md:w-32 lg:w-32 xl:w-32 md:p-2">
                   <span className="text-[12px]">create account</span>
                   </button>
                </div>
             </div>
            <div>
               <Slider {...settings}>
                {
                    img.map((item) => {
                        return(
                            <div className="card bg-brand400 ">
                                <div className=" h-[100%]">
                                    <div className="card-top">
                                        <img src={item.linkImg}/>
                                    </div>
                                    <div className="card-bottom">
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
     

    </div>
  )
}
