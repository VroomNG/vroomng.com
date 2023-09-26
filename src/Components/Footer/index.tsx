import logo from "../../assets/icons/vroom.svg"

export default function index() {
  return (
    <div className=' h-[100vh] lg:h-[80vh] xl:h-[80vh] w-full bg-brand600 flex justify-center items-center'>
        <div className=' h-[80%] w-[90%]'>
        <div className="w-[100%] h-[90%]">
             <div className="flex flex-col lg:flex-row xl:flex-row w-full items-center h-[40%] py-4 ">
                <div className="w-[100%] text-white md:w-[80%] lg:w-[50%] xl:w-[80%]">
                   <h2 className="text-white">Ride with Vroom Today</h2>
                   <p>We’ve already have over 400 happy Vroomers, making their lives easier here.</p>
                </div>
                <div className="w-[100%] md:w-[50%] lg:w-[25%] xl:w-[25%] 2xl:w-[25%]  flex flex-col md:flex-row md:pl-16 lg:pl-14  xl:pl-16 2xl:pl-14 items-center py-4 lg:mx-6 justify-evenly mt-2">
                            <div className="w-[100%] py-1 flex  md:justify-end lg:justify-center xl:justify-end 2x:justify-end xl:mr-2">
                              <button className="rounded-md bg-white border-2 border-gray500 w-full p-2 md:w-32 lg:w-32 xl:w-32 md:p-2">
                                <span className="text-[14px] font-medium md:text-md lg:text-md xl:text-md">Create account</span> 
                              </button>
                            </div>
                            <div className="w-[100%] py-1 md:ml-2">
                                <button className="rounded-md bg-brand400 border-2 border-brand400 w-full p-2 text-white md:w-32 lg:w-32 xl:w-32 md:p-2">
                                  <span className="text-[14px] font-medium">Our Customers</span>
                                </button>
                            </div>
                </div>
             </div>
             <div className=" h-[50%]  border-t-2 border-b-2 flex flex-col md:flex-row lg:flex-row xl:flex-row  items-center border-gray600">
                <div className=" h-[80%] w-[100%]  py-4  px-4 flex ">
                        <div className=" w-[100%] lg:w-[50%] xl:w-[50%]">
                          <div className="bg-white p-2 w-32">
                           <img src={logo}/> 
                           </div>
                           <div className="w-[100%] lg:w-[50%] xl:w-[50%] py-3">
                            <h6 className="text-white">Get around with ease and be the best version of yourself that you can be.</h6>
                           </div>
                        </div>
                        <div className="w-[50%] flex items-center justify-end  px-8">
                            <span className="text-white">
                                <h6>Company</h6>
                                <h6>About us</h6>
                                <h6>Contact</h6> 
                            </span>
                        </div>
                </div>
             </div>
             <div className="flex  items-center h-[20%] w-full">
                <div className="h-[100%] flex w-full">
                    <div className="w-[50%] flex items-center">
                        <span className="hover:text-white">&copy; 2023 Vroomng.com. All rights reserved.</span>
                    </div>
                    <div className="w-[50%] flex items-center cursor-pointer justify-end p-8">
                    <i className="fa-brands fa-twitter mx-2   hover:text-white "></i>
                    <i className="fa-brands fa-linkedin mx-2 hover:text-white"></i>
                    <i className="fa-brands fa-facebook mx-2 hover:text-white"></i>
                    
                    </div>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}
