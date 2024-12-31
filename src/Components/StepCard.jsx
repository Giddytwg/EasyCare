import PropTypes from "prop-types";

const StepCard = ({ step, title, msg}) => {
    console.log(step)
    return ( 
        <div className={`card bg-white rounded-3xl p-5 flex flex-col gap-1 border-4 border-bgsoftblue  ${step%2===0? 'transform rotate-[3deg]':'transform -rotate-[3deg]'} hover:transform hover:translate-y-2 transition-all`}>
            <div className="flex justify-between">
                <div className=" flex flex-col justify-between">
                    <h3 className="md:text-xl font-semibold">Step {step}</h3>
                    <p className="font-medium text-xs md:text-base">{title}</p>
                </div>
                <p className="text-4xl md:text-6xl text-gray-100">{step}</p>
            </div>
            <p className="text-gray-600 text-xs md:text-sm">{msg}</p>            
        </div>
     );
}
 
export default StepCard;

StepCard.propTypes = {
    step: PropTypes.number,
    title: PropTypes.string,
    msg: PropTypes.string,
    rot: PropTypes.number
}