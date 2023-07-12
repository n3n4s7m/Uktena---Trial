//components 
//import CircleLoader from "./CircleLoader"

export default function ButtonBigIconSecondary({
    text,
    disabled,
    setter,
    fetching,
    width,
    icon,
})
{
    return(
        
        <button
        onClick={setter}
        disabled={disabled}
        className={`${
            disabled 
            ? "bg-[#FFFFFF] text-[#903232] pointer-events-none border-[#F0F0F0] " 
            : "hover:bg-[#F3F6FF] bg-[#FFFFFF] text-[#8184F8] border-[#8184F8]"
        } flex justify-center items-center gap-1 rounded- [q24px] py- [10px] px- [30px] h- [45px] ${ 
            width ? width :"w-full"
        } shadow-uktena-sombra border transition-all`}
        >
        {fetching ? "Loading..." : text}
        {fetching ? null : (
            <div classname={disabled ? "text-[#F0F0F0]" : "text-[#8184F8]"}>
            const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </div>
        )}
        
        </button>
    );
}