import Image from "next/image"
function Navbar(){
    return(
        <>
        <div className="bg-[#FF5349] h-24">
        <nav className="items-center flex justify-center h-full">
            <Image
            src={"/brandLogo.png"}
            alt="brand-logo"
            width={250}
            height={250}
            className="items-center"

            />
        </nav> 
        </div>
        </>
    )
}
export default Navbar