import Heading from "./Heading";
import { useForm } from "react-hook-form";


const Newsletter = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    function onSubmit(data) {
        const msg = {
            ...data, 
            type: 'newsletter subcription'
        }
        console.log(msg);
    }
    return ( 
        <aside className="bg-darkblue p-6 md:p-8 mb-16 text-white text-center rounded-[2rem] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center gap-4 items-center">
                <Heading msg='Stay Updated on Your Health Journey' />
                <p className=" text-gray-400 md:text-sm text-center w-5/6">Get the latest healthcare tips, expert advice, and updates delivered straight to your inbox.</p>

                <form 
                className="w-full"
                onSubmit={handleSubmit(onSubmit)}>
                    {errors.email?.type === "required" && (
                        <p role="alert" className="text-red-600 text-xs">Please enter you email</p>
                    )}
                    <div className="flex flex-col gap-3 items-center md:flex-row w-full">
                        <input
                        className="rounded-full md:w-5/6 border-[.1rem] border-white text-gray-400 text-xs py-2 px-4 bg-transparent basis-5/6 w-full"
                        type="text" 
                        placeholder="example@gmail.com"
                        {...register('email', {required: true})}/>
                        
                        
                        <button type="submit" className="cta-light bg-white w-full basis-1/6">Subscribe</button>
                    </div>
                </form>
            </div>
        </aside>
     );
}
 
export default Newsletter;