import drivergirl from "../../assets/images/drivergirl.jpg"
import apple from "../../assets/svg/apple.svg"
import playstore from "../../assets/svg/playstore.svg"
import vector from "../../assets/svg/Vector.svg"

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
                <div className="container flex  w-[90%]">
                    <img src={vector} className="z-[100] mt-[30%] ml-[40%] absolute"/>
                    <div className="flex justify-center items-center w-[55%]">
                        <div className=" h-[60%] w-[90%]">
                            <h1> Safe, Simple and Exciting Way to Ride. </h1>
                            <div className="w-[90%] py-4">
                                <p>Be one one out first 100 drivers to get 3 months of commision
                                    free earnings, when you join our Vroom Family!
                                </p>
                            </div>
                            <div className="flex w-[55%] justify-between py-4">
                                {btn.map((item)=> {
                                    return(
                                        <div key={item.id}>
                                            <button  className="bg-black flex w-40 p-1 text-white rounded-lg ">
                                                <span className="w-[30%] p-1 flex items-center justify-center">
                                                    <img src={item.icon} width={"30px"}/>
                                                </span>
                                                <span className="w-[60] flex flex-col items-center justify-center">
                                                    <p className="text-xs">{item.title}</p>
                                                    <p className="text-sm font-medium">{item.store}</p>
                                                </span>    
                                            </button>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                    <div className=" w-[45%]">
                        <img src={drivergirl} className="h-[100%] w-[100%] " /> 
                    </div>
                </div>
            </div>
      </header>
      <section className="h-[120vh] w-full flex justify-center items-center">
         <div className="w-[85%] h-[85%]">
             <div className="flex">
                <div className="w-[70%]">
                   <h2>Sign up to Recieve</h2>
                   <p>See what you get once you become a Vroomer</p>
                </div>
                <div className="w-[30%]">
                   <button className="rounded-md bg-red-400 w-32 p-2">
                     our Customers
                   </button>
                </div>
             </div>
         </div>
      </section>
    </div>
  )
}
