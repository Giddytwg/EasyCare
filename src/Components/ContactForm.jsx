import { useForm } from "react-hook-form"
import countries from "../Data/Country"
import { useState } from "react";


export default function ContactForm() {
    
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    // Useform settings
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

//   Do whatever you want the data collected
    const onSubmit = (data) => {
        console.log(data)
    }
    // console.log(watch("example")) // watch input value by passing the name of it

    // Change of country Logic
    function handleCountryChange(e) {
        // find the country choosen and store
        const country = countries.find((c)=> c.name === e.target.value)
        // console.log('country change to ', country)
        setSelectedCountry(country)
        console.log(e.target.value, country);
    }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
    className="flex flex-col gap-3 text-xs" 
    onSubmit={handleSubmit(onSubmit)}>
        {/* First and last Names */}
        <div className="flex flex-col w-full gap-3 md:flex-row">
            {/* FIRST NAME*/}
            <label
            className="w-full basis-1/2" 
            htmlFor="firstName">
                    FirstName
                    <input
                    className="form-input basis-1/2" 
                    placeholder="First Name" 
                    {...register("firstName", { required: true })}
                    />
                    {errors.firstName?.type === "required" && (
                        <p role="alert" className="text-red-600">First name is required</p>
                    )}
                     
            </label>
           
            {/* LAST NAME */}
            <label
            className="w-full basis-1/2" 
            htmlFor="lastName">
                    LastName
                    <input 
                    className="form-input"
                    placeholder='Last Name' 
                    {...register("lastName", { required: true })} />
                    {errors.lastName?.type === "required" && (
                        <p role="alert" className="text-red-600">Last name is required</p>
                    )}
            </label>
        </div>
        {/* EMAIL */}
        <label htmlFor="email">
                Email
            <input
            className="form-input" 
            placeholder='example@gmail.com' 
            {...register("email", { required: true })} />
            {errors.email?.type === "required" && (
                        <p role="alert" className="text-red-600">email is required</p>
                    )}
        </label>

      {/* PHONE NUMBER */}
        <label htmlFor="">
                Phone No
            <div className="flex gap-2">
                <select
                    className="form-input basis-1/6" 
                    name="country" 
                    id="country"
                    onChange={handleCountryChange}>
                        {countries.map((country)=>(
                            <option key={country.code}  value={country.name}>{country.code} {country.prefix}</option>
                        ))}
                </select>
                <input 
                    className="form-input"
                    placeholder={`${selectedCountry.prefix} (565) 000 - 0000`}
                    {...register("phoneNo", { required: true })}/>
            </div>
        </label>
        
        <div>
            <label htmlFor="">
                Message
                <input
                className="form-input" 
                placeholder='Leave us a message' 
                {...register("message", { required: true })} />

            </label>
            {/* errors will return when field validation fails  */}
        </div>

      <button type="submit" className="cta-dark cursor-pointer w-full">Send Message</button>
    </form>
  )
}