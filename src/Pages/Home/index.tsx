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
      <section className="h-[120vh] bg-green-400 w-full flex justify-center items-center">
         <div className="w-[90%] h-[85%] bg-yellow-300">
             <div className="flex">
                <div className="w-[75%] bg-gray-400">
                   <h2>Sign up to Recieve</h2>
                   <p>See what you get once you become a Vroomer</p>
                </div>
                <div className="w-[25%] flex items-center justify-around  bg-red-400">
                   <button className="rounded-md bg-white border-2 border-brand600 w-32 p-2">
                     our Customers
                   </button>
                   <button className="rounded-md bg-brand600 border-2 border-brand600 w-32 p-2">
                     our Customers
                   </button>
                </div>
             </div>
            <div>
            <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
            </div>
         </div>
      </section>

    </div>
  )
}
