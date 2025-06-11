import Link from "next/link"


function Navbar() {
  return (
   <>
   <div>
    <nav>
    <div className="flex justify-between bg-[#121212] text-white text-2xl py-5 px-10">
        <div>
            <Link href={"/"}>Todo List</Link>
    </div>
    <div>
        <Link href={"/Addnew"}>Add New</Link>
        
    </div>
    </div>
    
   </nav>

   </div>
   
   </>
  )
}

export default Navbar
