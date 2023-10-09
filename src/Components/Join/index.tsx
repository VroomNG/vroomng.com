import passenger from "../../assets/images/passenger.png"
import playstore from "../../assets/svg/playstore.svg"
import apple from "../../assets/svg/apple.svg"
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


export default function index() {
  return (
    <div>
         <section className=" h-[75vh] md:h-[90vh]  lg:h-[80vh] xl:h-[80vh] mt-5 flex justify-center items-center">
        <div className="rounded-xl w-[90%] h-[90%] bg-brand400 flex items-center justify-center">
            <div className="flex flex-col  lg:flex-row xl:flex-row w-[100%] h-[100%] md:w-[90%] lg:w-[90%] xl:w-[90%] ">
                <div className="w-[100%] h-[50%] order-2  lg:w-[50%] lg:h-[100%]  xl:w-[50%] xl:h-[100%] lg:order-1 xl:order-1  flex items-end justify-end md:items-center md:justify-center lg:justify-start xl:justify-start lg:items-end xl:items-end  ">
                    <img src={passenger} alt="" className="w-[90%] md:w-[34rem] lg:w-[30rem] xl:w-[32rem] object-cover rounded-br-xl md:rounded-br-sm  lg:rounded-br-sm  xl:rounded-br-sm"/>
                </div>
                <div className="w-[100%] h-[50%] md:h-[50%]  order-1 lg:order-2 xl:order-2 lg:w-[50%] lg:h-[100%] xl:w-[50%] xl:h-[100%]  flex flex-col items-center justify-center md:items-center lg:items-center xl:items-start">
                    <div className="w-[90%] lg:w-[90%] xl:w-[80%] flex flex-col justify-center md:text-center lg:text-left xl:text-left  ">
                        <h2 className="header-two py-4">Join 4,000+ Drivers and Riders on Vroom</h2>
                        <span className="text-[20px] py-4">Get the app and Start riding.</span>
                        <div className="flex justify-between md:justify-center  xl:justify-between py-4 mx-1 w-[100%] md:w-[100%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%]">
                                {btn.map((item)=> {
                                    return(
                                        <div key={item.id}>
                                            <a href={item.link}><button  className="bg-black flex w-36 md:w-40 text-white rounded-lg md:mx-4 lg:mx-0 xl:mx-0 ">
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
            </div>
        </div>
      </section>
    </div>
  )
}
