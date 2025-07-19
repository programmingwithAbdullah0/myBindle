import Image from "next/image"
function Navbar(){
    return(
        <>
          {/* Fixed Navbar containing the logo, fixed at the top with shadow */}
                <nav className="w-full flex justify-center fixed top-0 left-0 right-0 bg-[#FF5349] py-4 shadow-b-inner z-50" aria-label="Primary Navigation">
                    <Image 
                    src={"/brandLogo.png"}
                    alt="brandlogo" 
                    width={230} 
                    height={80} 
                    />
                </nav>

        </>
    )
}
export default Navbar