import plus_icon from '/assets/add-circle.svg'
import minus_icon from '/assets/minus-cirlce.svg'
import { useState } from 'react';
import PropTypes from 'prop-types';

const Qcard = ({ qna:{q, a} }) => {

    const [open, setOpen] = useState(false)
    return ( 
        <aside className='flex flex-col basis-1/2 gap-2 relative'>
            {/*Question  */}
            <div className="basis-1/2 rounded-2xl bg-bgsoftblue flex justify-between items-center py-3 px-4">
                <p className='font-medium text-sm md:text-base'>{q}</p>
                <button 
                onClick={()=>setOpen(open => !open)}>
                        {open?<img src={plus_icon} alt="" /> : <img src={minus_icon} alt="" />}
                    </button>
            </div>
            {/* Answer */}
            {open && <div className={`p-3 bg-bglightBlue text-sm text-gray-700 leading-7 rounded-2xl top-full left-0`}>
                    <p>{a}</p>
                </div>}
        </aside>
     );
}

export default Qcard;

Qcard.propTypes = {
    qna: PropTypes.object,
    q: PropTypes.string,
    a: PropTypes.string
}

// p-3 bg-bglightBlue text-sm text-gray-700 leading-7 rounded-2xl transition-all duration-700