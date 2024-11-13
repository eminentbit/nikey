import Button from "../Components/Button";

export default function Subscribe() {
    return (
        <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 px-4 py-8 bg-white shadow-lg rounded-lg" id="contact-us">
    <h3 className="text-4xl leading-tight lg:max-w-md font-palanquin font-bold text-center lg:text-left">
        Sign Up for <span className="text-coral-red">Updates</span> and Newsletter
    </h3>
    <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full bg-gray-50 shadow-inner">
        <input 
            type="text" 
            placeholder="subscribe@nike.com" 
            className="input w-full p-4 rounded-full outline-none text-gray-700 placeholder-gray-500 border-none focus:ring-2 focus:ring-coral-red"
        />
        <div className="flex justify-end w-auto sm:w-auto max-sm:w-full">
            <Button label="Sign Up" isFullWidth className="bg-coral-red text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-300" />
        </div>
    </div>
</section>
    );
}