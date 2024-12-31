import Heading from "../Components/Heading";
import ToggleButton from "../Components/ToggleButton";
import PriceCard from "../Components/PriceCard";
import Plans from "../Data/Plans";

import { useState } from "react";


const Pricing = () => {

        const plans = Plans;
        const [isMonthly, setIsMonthly] = useState(true)
        // This holds the id of slected Plan
        const [selectedPlan, setSelectedPlan] = useState(null)
        
        function selectPlan (id) {
            setSelectedPlan(id)
        }
        
    return ( 
        <section className="p-6 md:p-14">
      
            <div className="bg-bgsoftblue p-6 md:p-14 rounded-[30px] md:rounded-[50px] flex flex-col gap-7 justify-center items-center">

                <div className="flex flex-col gap-4 justify-center items-center">
                    <Heading title='Pricing' bg='white' msg='Choose a plan that works best for you and your family. Simple pricing, no surprises.'/>
                </div>

                <ToggleButton isMonthly={isMonthly} setIsMonthly={setIsMonthly}/>
                {/* Price cards */}
                <div className="grid gap-5 md:gap-10 flex-col md:grid-cols-2 lg:grid-cols-3">
                    {/* Rendider PriceCard for each instace of plan */}
                    {plans.map((plan, i)=>(
                        <PriceCard key={i} plan={plan} selectPlan={selectPlan} isSelected={selectedPlan === plan.id} isMonthly={isMonthly}/>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Pricing;

// plan, price, p, list, isMonthly