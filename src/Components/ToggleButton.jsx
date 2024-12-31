import PropTypes from "prop-types";

const ToggleButton = ({ isMonthly, setIsMonthly }) => {
    return ( 
        <button>
            <div className="bg-white rounded-full w-fit px-1 py-1 flex gap-1 text-sm md:text-base justify-between items-center">
                {/* Monthly button */}
                <div className={`rounded-full px-4 py-1 transition-all duration-500 ${isMonthly? 'plan-active' :''}`}
                onClick={()=>setIsMonthly(true)}>
                    <p>Monthly</p>
                </div>
                {/* Anually button */}
                <div className={`flex justify-between gap-1 items-center px-2 py-1 rounded-full transition-all duration-500 ${!isMonthly?'plan-active':''}`}
                onClick={()=>setIsMonthly(false)}>
                    <p>Anually</p>
                    <div className={`${isMonthly? 'animate-bounce':''} rounded-xl px-[.5rem] py-[.1px] bg-darkblue text-white`}>
                        <p className="text-[.6rem] font-medium">-20%</p>
                    </div>
                </div>
            </div>
        </button>
     );
}
export default ToggleButton;

ToggleButton.propTypes = {
    isMonthly: PropTypes.bool,
    setIsMonthly: PropTypes.func
}