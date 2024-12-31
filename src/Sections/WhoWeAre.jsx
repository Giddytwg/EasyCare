import team_doc from '/assets/Team of doctrors.png'
import star_icon from '/assets/star.svg'




const WhoWeAre = () => {
    return ( 
        <section className="p-6 md:p-14">
      
        <div className="bg-bgsoftblue p-6 md:p-14 rounded-[30px] md:rounded-[50px] flex flex-col-reverse gap-7 md:flex-row">

           <div className="left basis-1/2">
              <img src={team_doc} alt="Team of doctors" className="w-full" />
           </div>

           <div className="right basis-1/2 w-full h-full flex flex-col">
                 {/* Heading (one instance of hard coded ) */}
                 <div className="heading  flex flex-col">
                     <div className="bg-bluegradient w-fit py-[0.15rem] px-[0.15rem] rounded-full flex justify-center items-center text-center font-bold text-base">
                        <div className={`w-full bg-bgsoftblue rounded-full py-2 px-4`} >
                           <p className="bg-bluegradient bg-clip-text text-transparent">Who are we</p>
                        </div>
                     </div>
                  </div>

                 <div className="gap-4 flex flex-col">
                    <h2 className="text-2xl md:text-4xl font-comorant leading-normal max-w-[80%]">Bringing Quality Healthcare to Your Doorstep.
                    </h2>
                    <p className="leading-relaxed text-sm md:text-base text-gray-500">EasyCare is dedicated to bringing professional healthcare right to your doorstep. Our team of certified specialists provides compassionate, personalized care that fits into your schedule, ensuring that quality healthcare is accessible from the comfort of your home.</p>

                    <div className="grid grid-cols-2 gap-2 md:gap-7 text-darkblue font-semibold text-xs">
                          <div>
                             <img src={star_icon} alt="" className="inline-block"/>
                             <p className="inline">Compassionate</p>
                          </div>
                          <div>
                             <img src={star_icon} alt="" className="inline-block"/>
                             <p className="inline">Centered Approach</p>
                          </div>
                          <div>
                             <img src={star_icon} alt="" className="inline-block"/>
                             <p className="inline">Professionalism</p>
                          </div>
                          <div>
                             <img src={star_icon} alt="" className="inline-block"/><p className="inline">Accessibility</p>
                          </div>
                          <div>
                             <img src={star_icon} alt="" className="inline-block"/><p className="inline">Reliable</p>
                          </div>
                          <div>
                             <img src={star_icon} alt="" className="inline-block"/><p className="inline">Innovation</p>
                          </div>
                    </div>
                    <button className="cta-dark mt-3">Learn More about EasyCare</button>
                 </div>
                 
           </div>
        </div>
     </section>
     );
}
 
export default WhoWeAre;