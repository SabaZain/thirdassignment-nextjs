import Image from "next/image";

const Header = () => {
  return (
    <div>
        <header className="bg-black text-white text-xl">
            <nav className="flex gap-4 h-20">
                <Image src="/Image/logo.png" alt="logo" width={80} height={80}/>
                <h1 className="text-red-800 text-3xl font-bold m-5">My Portfolio</h1>
                <ul className="text-2xl flex justify-between align items-center gap-6 m-11 cursor-pointer">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>My Assignments</li>
                    <li>Contact</li>
                </ul>
                <div><button className="bg-red-600 hover:bg-green-600 text-xl flex justify-center p-2 m-5 mr-0 rounded-md">login</button></div>
                <div><button className="bg-orange-500 hover:bg-blue-500 text-xl flex p-2 m-5 ml-0 rounded-md">sign-up</button></div>
                
            </nav>
        </header>
      
    </div>
  )
}

export default Header
