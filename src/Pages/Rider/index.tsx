import Join from "../../Components/Join";
import vroomer from "../../assets/images/vroomer.jpg"
import playstore from "../../assets/svg/playstore.svg"
import apple from "../../assets/svg/apple.svg"

export default function Index() {

    
    
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
        link: "https://play.google.com/store/apps/details?id=com.vroomtech.vroom"
    }
]

  return (
    <div className="w-full h-full">
         <header className=" h-[110vh] md:h-[110vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh]">
            <div className="flex justify-center pt-[10%] xl:pt-[8%] 2xl:pt-0 overflow-hidden pb-[5%] w-full h-full">
                <div className="container flex flex-wrap lg:flex-nowrap xl:flex-nowrap w-[90%]">
                    {/* <img src={vector} className="hidden lg:block z-[100] w-[40%] mt-[160%] md:w-[20%] md:mt-[40%] md:ml-[40%] lg:w-[20%]  lg:mt-[40%] lg:ml-[40%] xl:mt-[35%] absolute"/> */}
                    <div className="flex md:justify-center items-center mt-8 md:mt-0 lg:mt-0 xl:mt-0 w-[100%] md:w-[100%] lg:w-[55%] xl:w-[55%]">
                        <div className=" h-[90%] flex flex-col justify-center w-[100%] md:w-[90%] md:h-[60%] mt-12 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                            <h1 className="max-header text-center lg:text-left"> Ride With Us </h1>
                            <div className="w-[100%] py-4 ">
                                <p className="text-center lg:text-left">
                                Let Vroom be your comfort place, find community, fun, ease of movement, and safety when you choose to ride with us to your destination.
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
                    <img src={vroomer} className="object-cover lg:h-[36rem] lg:w-[34rem] xl:h-[36rem] xl:w-[34rem] 2xl:h-[38rem] 2xl:w-[34rem] "/>
                    </div>
                </div>
            </div>
      </header>
        <Join/>  
    </div>
  )
}

