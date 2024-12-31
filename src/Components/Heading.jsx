

const Heading = ({ title, msg, bg }) => {
    return ( 
        <div className="flex flex-col items-center justify-center gap-5 text-base">

            {title && <div className="bg-bluegradient w-fit py-[0.15rem] px-[0.15rem] rounded-full flex justify-center items-center text-center font-bold text-base">
                  <div className={`w-full bg-${bg} rounded-full py-2 px-4`} >
                     <p className="bg-bluegradient bg-clip-text text-transparent">{title}</p>
                  </div>
            </div>}

            <div className="message w-fullmd:w-2/3 text-center">
               <h1 className=" font-comorant text-2xl md:text-4xl mb-3 font-medium">{msg}</h1>
            </div>
        </div>
     );
}

// 

export default Heading;