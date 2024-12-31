import PropTypes from "prop-types";
import check_icon from '/assets/checkmark-badge-02.svg'

const PriceCard = ({ plan:{ name, price, p, benefits, id }, isMonthly, selectPlan, isSelected }) => {
// { plan, price, p, benefits, isMonthly }

    return ( 

        <aside className="bg-white p-2 rounded-[2rem] flex flex-col gap-8 justify-between basis-1/3">
            <div>
                <div className={`${isSelected? 'bg-darkblue text-white' : 'bg-bgsoftblue'} rounded-[1.5rem] p-4 flex flex-col gap-3`}>
                    <h3 className="font-semibold text-sm md:text-base">{name}</h3>
                    <p className="font-semibold text-xl md:text-2xl">{`$${isMonthly? price : Math.floor(price*10)}/${isMonthly? 'monthly' : 'yearly'}`}</p>
                    <p className={`${isSelected? 'text-gray-300' : 'text-gray-600'} text-xs`}>{p}</p>
                </div>
                <div className="flex flex-col gap-3 p-3 text-gray-500 text-xs md:base">
                    {benefits.map((item, i)=>(
                        <div key={i} className=" flex gap-2 items-start">
                            <img src={check_icon} className="w-4"/> 
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className={`${isSelected && 'bg-darkblue text-white'} border border-darkblue w-full py-2 rounded-full`}
            onClick={()=>{selectPlan(id)}}>Get Plan</button>
        </aside>
     );
}
 
export default PriceCard;

PriceCard.propTypes = {
    plan: PropTypes.object,
    price: PropTypes.number,
    p: PropTypes.string,
    benefits: PropTypes.array,
    isMonthly: PropTypes.bool,
    id: PropTypes.number,
    selectPlan: PropTypes.func,
    isSelected: PropTypes.bool

}