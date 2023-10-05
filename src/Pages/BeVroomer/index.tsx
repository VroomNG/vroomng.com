import handsomeguy from "../../assets/images/handsomeguy.jpg"
import Join from "../../Components/Join"


export default function index() {
  return (
    <div className='pt-10'>
       <section className="h-[120vh] md:h-[70vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[120vh] flex flex-col justify-center items-center">
        <div className="w-[90%] h-[80%] flex flex-col xl:flex-row">
            <div className="w-[100%] h-[100%] md:h-[60%] lg:h-[100%] xl:h-[100%] xl:w-[50%] flex items-center justify-center ">
                    <div className="contactform w-[75%] h-[95%] flex flex-col justify-center">
                      <h2 className="header-two">Become a Vrommer</h2>
                      {/* <p>Our  team would love to hear from you.</p> */}
                      <div className="">
                        <form>
                            <div className="name flex flex-col lg:flex-row xl:flex-row justify-between pt-4">
                                <div className=" w-[100%]xl:w-[50%] ">
                                    <div className="label py-2">First name</div>
                                    <input placeholder="First name" className="border-2 rounded-lg p-2 w-full lg:w-[95%] xl:w-[95%] px-4 border-gray300  bg-transparent" />
                                </div>
                                <div className=" w-[100%] xl:w-[50%]">
                                    <div className="label py-2 lg:px-4 xl:px-4">Last name</div>
                                    <div className="flex lg:justify-end xl:justify-end">
                                        <input placeholder="First name" className="border-2 rounded-lg p-2 w-full lg:w-[95%] xl:w-[95%] lg:px-4 xl:px-4 border-gray300  bg-transparent" />
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
                            {/* <div className="pt-2">
                                <div className="label py-2">Message</div>
                                <div className="w-[100%] h-[20%]">
                                    <input placeholder="Leave us a message..." className="border-2 rounded-lg pb-12 px-4 w-[100%] h-[100px] border-gray300  bg-transparent" />
                                </div>
                            </div> */}
                            {/* <div className="flex items-center ">
                                <Checkbox color="indigo"  crossOrigin={undefined} />
                                You agree to our friendly <a href="#"> privacy policy</a>.
                            </div> */}
                            <div className="btn mt-8">
                                <button className="bg-brand600 text-white p-2 w-[100%] rounded-lg">
                                    Join us
                                </button>
                            </div>
                        </form>
                      </div>
                    </div>
            </div>
            <div className="w-[100%] xl:w-[50%] hidden lg:block xl:block">
                <img src={handsomeguy} className="object-cover h-[100%] w-[100%]"/>
            </div>
        </div>
      </section>
      <Join/>

    </div>
  )
}
