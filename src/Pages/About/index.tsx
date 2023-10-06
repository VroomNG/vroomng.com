import chat from "../../assets/svg/security-safe.svg"
import community from "../../assets/svg/community.svg"
import conv from "../../assets/svg/convinience.svg"
import lock from "../../assets/svg/lock.svg"
import vroomimg from "../../assets/images/vroomimg.jpg"
import vroomimg2 from "../../assets/images/vroomer2.jpg"
import vroomimg3 from "../../assets/images/vroomer4.jpg"
import vroomimg4 from "../../assets/images/vroomer3.jpg"
import Join from "../../Components/Join"

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
                          <h4 className="header-four">About us</h4>
                      </span>
                      <span className="mt-2 text-center">
                        <h1 className="max-header">Safe, Simple and Exciting Way to Ride.</h1>
                      </span>
                      <span className="mt-2 text-center w-[80%]">
                        <p className="text-[16px]">Vroom was conceived on the road. Born of a desire to answer a need—that catchphrase of all
                          catchphrases that has always existed: what is hip, accessible, safe, and gets you everywhere, including
                          the last mile.
                        </p>
                      </span>
                      {/* <span className="mt-2 w-[100%] bg-black"> */}
                        <div className="w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] flex flex-col md:flex-row  items-center py-4 lg:mx-6 justify-evenly mt-2">
                            <div className="w-[100%] py-1 flex  md:justify-end lg:justify-end xl:justify-end 2x:justify-end xl:mr-2">
                              <a href="#learn"><button className="rounded-md bg-white border-2 border-gray500 w-full p-2 md:w-32 lg:w-32 xl:w-32 md:p-2">
                                <span className="text-[14px] font-medium md:text-md lg:text-md xl:text-md">Learn more</span> 
                              </button></a>
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
          <section id="learn" className="h-[34vh] md:h-[30vh] lg:h-[60vh] xl:h-[60vh] w-full flex justify-center items-center">
            <div className="h-[90%] w-[90%] md:w-[80%] flex flex-col items-center justify-center">
              <span className="py-4">
                <h2 className="header-two">About Vroom</h2>
              </span>
              <span >
                <p className="text-center text-[16px]">
                At Vroom, our goal is to serve. We burn the oil and hit the caffeine to ensure we get you home, to your
                loved ones, to that interview, and to your fortress of solitude. We are your batmobile. We are your
                income stream. We are Vroom, a company driven by a desire to get you from one point to the other in a
                safe and sustainable manner.
                <br></br>
                We are relentless and committed to our values, to ensuring everyone, regardless of age, gender, race,
                religion, or sexual orientation, has access to affordable and safe rides on the Vroom platform, to earning
                and retaining the respect and trust of customers, drivers, and communities, and to transforming the
                transportation eco-system through state-of-the-art technology and job creation.
                </p>
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
                        <h2 className="header-two">Safety</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    With in-built features like a panic button and pre-inputted emergency numbers, Vroom gives
                    you the next best thing to you riding in your personal car. Rigorous background checks, high
                    standard for allowed cars, a constant review of policies, and a customer service that answers all
                    complaints with empathy and at the speed of light, ensure every end user’s safety is prioritized.
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
                        <h2 className="header-two">Community</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    It takes a village. Always. We are a community, a group of people who share similar principles
                      but not always similar perspectives. However, we all know the importance of having a hand to
                      hold, a shoulder to lean on, and a back to jump on as you celebrate your wins. We are open, we
                      are empathetic, and we care. We always will walk with you and be part of your milestones.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

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
                        <h2 className="header-two">convenience</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    From the hustle in Lagos to the bustle of New York, urban cities are getting crowded by the day.
                    The flashing lights of passing cars are not abating any time soon. At Vroom, we are giving you
                    the choice of transportation just at the touch of a button. Sit back as you are driven to your
                    destination or track the delivery of your items.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

                <img src={vroomimg4} alt='vroom-img' className="object-contain md:object-cover lg:object-cover xl:object-cover w-96 h-96 md:w-[90%] md:h-[90%] lg:w-[30rem] lg:h-[30rem] xl:w-[100%] xl:h-[100%] "/>
                
             </div>
          </section>

          <section className="h-[80vh] md:h-[100vh] lg:h-[80vh] xl:h-[80vh] flex flex-col lg:flex-row xl:flex-row lg:mt-32 xl:mt-32">
             <div className="w-[100] h-[50%] md:h-[50%] lg:h-[100%] xl:h-[100%] lg:w-[50%] xl:w-[50%] flex justify-center items-center lg:order-1 xl:order-1">
              <div className="w-[90%] h-[90%] xl:h-[85%] md:w-[85%] md:h-[80%] flex-col lg:flex-col xl:flex-col lg:justify-end">   
                    <div className="bg-prime50 rounded-full flex justify-center items-center w-16 h-16">
                        <div className="bg-prime100 rounded-full w-10 h-10 flex justify-center items-center">
                             <img src={lock} className="w-4"/>
                        </div>
                    </div>
                    <div className="pt-4 pb-2">
                        <h2 className="header-two">Access</h2>
                    </div>
                    <p className="text-justify lg:text-[14px] xl:text-[18px]">
                    The future really is already here. Tomorrow is today as we constantly try to stay ahead of the
                    curve. This includes ensuring a space for everyone’s growth, both riders and drivers. With a
                    young and forward-thinking team, we would continue to create innovative ways to make your
                    movement from place to place a seamless, safe, and affordable venture.
                    </p>
              </div>   
             </div>
             <div className="w-[100] h-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] lg:h-[100%] xl:h-[100%] 2xl:h-[100%] flex justify-center items-center lg:justify-end lg:items-center xl:justify-center">

                <img src={vroomimg3} alt='vroom-img' className="object-contain md:object-cover lg:object-cover xl:object-fill w-96 h-96 md:w-[90%] md:h-[90%] lg:w-[30rem] lg:h-[30rem] xl:w-[100%] xl:h-[100%] "/>
                
             </div>
          </section>
          <Join/>
        </div>
    </>
  )
}
