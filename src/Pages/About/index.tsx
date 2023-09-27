import chat from "../../assets/svg/message-chat-circle.svg"
import community from "../../assets/svg/community.svg"
import conv from "../../assets/svg/convinience.svg"
import vroomimg from "../../assets/images/vroomimg.jpg"
import vroomimg2 from "../../assets/images/vroomer2.jpg"
import vroomimg3 from "../../assets/images/vroomer4.jpg"
import vroomimg4 from "../../assets/images/suitdriver.png"

export default function index() {
  return (
    <>
        <div className="pt-20">

        </div>
        <div className="h-full w-full">
          <header>
            <div className="header w-full h-[60vh] md:h-[50vh] lg:h-[60vh] xl:h-[60vh] 2xl:h-[60vh] bg-gray50 flex items-center justify-center  ">
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
                            <div className="w-[100%] py-1 flex  md:justify-end lg:justify-end xl:justify-end 2x:justify-end xl:mr-2">
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
          <section className="h-[34vh] md:h-[30vh] lg:h-[60vh] xl:h-[60vh] w-full flex justify-center items-center">
            <div className="h-[90%] w-[90%] md:w-[60%] flex flex-col items-center justify-center">
              <span className="py-4">
                <h2>About Vroom</h2>
              </span>
              <span>
                <p className="text-center">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
              </span>
            </div>
          </section>

          <section className="h-[80vh]  md:h-[100vh] lg:h-[80vh] xl:h-[80vh] flex flex-col lg:flex-row xl:flex-row">
             <div className="w-[100]  h-[50%] md:h-[50%] lg:h-[100%] xl:h-[100%] lg:w-[50%] xl:w-[50%] flex justify-center items-center">
              <div className="w-[90%] h-[90%] xl:h-[85%] md:w-[85%] md:h-[80%] flex-col lg:flex-col xl:flex-col lg:justify-end">   
                    <div className="bg-prime50 rounded-full flex justify-center items-center w-16 h-16">
                        <div className="bg-prime100 rounded-full w-10 h-10 flex justify-center items-center">
                             <img src={chat} className="w-4"/>
                        </div>
                    </div>
                    <div className="pt-4 pb-2">
                        <h2>Safety</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                      Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

                <img src={vroomimg} alt='vroom-img' className="object-contain md:object-cover lg:object-cover xl:object-fill w-96 h-96 md:w-[90%] md:h-[90%] lg:w-[30rem] lg:h-[30rem] xl:w-[100%] xl:h-[100%] "/>
                
             </div>
          </section>

          <section className="h-[80vh] md:h-[100vh] lg:h-[80vh] xl:h-[80vh] flex flex-col lg:flex-row xl:flex-row lg:mt-32 xl:mt-32">
             <div className="w-[100] h-[50%] md:h-[50%] lg:h-[100%] xl:h-[100%] lg:w-[50%] xl:w-[50%] flex justify-center items-center lg:order-1 xl:order-1">
              <div className="w-[90%] h-[90%] xl:h-[85%] md:w-[85%] md:h-[80%] flex-col lg:flex-col xl:flex-col lg:justify-end">   
                    <div className="bg-prime50 rounded-full flex justify-center items-center w-16 h-16">
                        <div className="bg-prime100 rounded-full w-10 h-10 flex justify-center items-center">
                             <img src={community} className="w-4"/>
                        </div>
                    </div>
                    <div className="pt-4 pb-2">
                        <h2>Community</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                      Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] bg-green-300 lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

                <img src={vroomimg2} alt='vroom-img' className="object-contain md:object-cover lg:object-cover xl:object-fill w-96 h-96 md:w-[90%] md:h-[90%] lg:w-[30rem] lg:h-[30rem] xl:w-[100%] xl:h-[100%] "/>
                
             </div>
          </section>
          <section className="h-[80vh]  md:h-[100vh] lg:h-[80vh] xl:h-[80vh] flex flex-col lg:flex-row xl:flex-row lg:mt-32 xl:mt-32 ">
             <div className="w-[100]  h-[50%] md:h-[50%] lg:h-[100%] xl:h-[100%] lg:w-[50%] xl:w-[50%] flex justify-center items-center">
              <div className="w-[90%] h-[90%] xl:h-[85%] md:w-[85%] md:h-[80%] flex-col lg:flex-col xl:flex-col lg:justify-end">   
                    <div className="bg-prime50 rounded-full flex justify-center items-center w-16 h-16">
                        <div className="bg-prime100 rounded-full w-10 h-10 flex justify-center items-center">
                             <img src={conv} className="w-4"/>
                        </div>
                    </div>
                    <div className="pt-4 pb-2">
                        <h2>Convinence</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                      Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

                <img src={vroomimg4} alt='vroom-img' className="object-contain md:object-cover lg:object-cover xl:object-fill w-96 h-96 md:w-[90%] md:h-[90%] lg:w-[30rem] lg:h-[30rem] xl:w-[100%] xl:h-[100%] "/>
                
             </div>
          </section>

          <section className="h-[80vh] md:h-[100vh] lg:h-[80vh] xl:h-[80vh] flex flex-col lg:flex-row xl:flex-row lg:mt-32 xl:mt-32">
             <div className="w-[100] h-[50%] md:h-[50%] lg:h-[100%] xl:h-[100%] lg:w-[50%] xl:w-[50%] flex justify-center items-center lg:order-1 xl:order-1">
              <div className="w-[90%] h-[90%] xl:h-[85%] md:w-[85%] md:h-[80%] flex-col lg:flex-col xl:flex-col lg:justify-end">   
                    <div className="bg-prime50 rounded-full flex justify-center items-center w-16 h-16">
                        <div className="bg-prime100 rounded-full w-10 h-10 flex justify-center items-center">
                             <img src={chat} className="w-4"/>
                        </div>
                    </div>
                    <div className="pt-4 pb-2">
                        <h2>Community</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.
                      Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] bg-green-300 lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

                <img src={vroomimg3} alt='vroom-img' className="object-contain md:object-cover lg:object-cover xl:object-fill w-96 h-96 md:w-[90%] md:h-[90%] lg:w-[30rem] lg:h-[30rem] xl:w-[100%] xl:h-[100%] "/>
                
             </div>
          </section>
          
        </div>
    </>
  )
}
