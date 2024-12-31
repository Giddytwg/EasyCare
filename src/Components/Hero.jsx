import profiles_icon from '/assets/profile round.png'
import hero_image from '/assets/Big Hero.png'
import play_icon from '/assets/play-circle.svg'

const Hero = () => {


    return ( 
        <div className="hero flex flex-col justify-center items-center gap-5 md:gap-10   p-10 bg-bgsoftblue bg-[url('/assets/bg-desktop.svg')] bg-cover bg-center h-fit text-center">
            <h1 className="font-comorant text-4xl md:text-6xl font-medium">Expert <span className=' bg-bluegradient bg-clip-text text-transparent'>Healthcare</span>  Delivered to You</h1>
            <h3 className="text-sm md:text-base text-balance text-center text-gray-400 leading-relaxed">Receive professional healthcare from certified specialists, all from the <br />comfort of home. Personalized care is just a click away.</h3>
            <div className="cta-buttons flex gap-2">
                <button className="cta-dark">Book a consultation</button>
                <button className="cta-light">Learn More</button>
            </div>
            <div className="trustees flex flex-col md:flex-row items-center justify-center gap-2 animate-pulse">
                <img src={profiles_icon} alt="trustees profiles" className='w-24 md:w-28' />
                <p className='text-xs text-gray-400'>Trusted by 200+ customers</p>
            </div>
            <div className="video">
                <div className='overflow-hidden rounded-3xl relative border'>
                    <img src={hero_image} alt="" className=' w-fit h-full' />
                    <img src={play_icon} alt="" className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 md:w-16' />
                </div>
            </div>
        </div>
     );
}
 
export default Hero;



<div className="overflow-hidden rounded-3xl relative border">
  <img src={hero_image} alt="" className="w-fit h-full" />
  <img
    src={play_icon}
    alt=""
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  />
</div>