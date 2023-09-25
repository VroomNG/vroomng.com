

export default function index() {
  return (
    <>
        <div className="pt-20">

        </div>
        <div className="h-full w-full">
          <header>
            <div className="header w-full h-[60vh] bg-gray50 flex items-center justify-center  ">
              <div className="container w-[90%] h-[80%] flex items-center justify-center">
                <div className="flex flex-col items-center justify-center w-full">
                      <span className="text-center">
                          <h4>About us</h4>
                      </span>
                      <span className="mt-2 text-center">
                        <h1>Safe, Simple and Exciting Way to Ride.</h1>
                      </span>
                      <span className="mt-2 text-center w-[50%]">
                        <p>We’re a dedicated team, for your best ride experience</p>
                      </span>
                      {/* <span className="mt-2 w-[100%] bg-black"> */}
                        <div className="w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex flex-col md:flex-row  items-center py-4 lg:mx-6 justify-evenly mt-2">
                            <div className="w-[100%] py-1 flex  md:justify-end lg:justify-center xl:justify-end 2x:justify-end xl:mr-2">
                              <button className="rounded-md bg-white border-2 border-gray500 w-full p-2 md:w-32 lg:w-32 xl:w-32 md:p-2">
                                <span className="text-[14px] font-medium md:text-md lg:text-md xl:text-md">Learn more</span> 
                              </button>
                            </div>
                            <div className="w-[100%] py-1 md:ml-2">
                                <button className="rounded-md bg-brand600 border-2 border-brand600 w-full p-2 text-white md:w-32 lg:w-32 xl:w-32 md:p-2">
                                  <span className="text-[14px] font-medium">Get Started</span>
                                </button>
                            </div>
                        </div>
                      {/* </span> */}
                      
                </div>
                </div>
            </div>
          </header>

        </div>
    </>
  )
}
