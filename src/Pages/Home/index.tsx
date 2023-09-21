import drivergirl from "../../assets/images/drivergirl.jpg"
import apple from "../../assets/svg/apple.svg"
import playstore from "../../assets/svg/playstore.svg"
import vector from "../../assets/svg/Vector.svg"
import { Carousel, IconButton } from "@material-tailwind/react";


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

export default function index() {
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
                                <p>Be one out first 100 drivers to get 3 months of commision
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
     

    </div>
  )
}
