import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Image from "next/image"
import Link from "next/link"


const HomePage = () => {
    return (
        <div>
            <Header />
            <section>
                <h1 className="text-blue-900 text-2xl font-bold text-center m-4 p-2">Future AI Developer</h1>
                <div className="flex justify-center align items-center p-3 m-2"><Image src="/Image/heropic.jpg" alt="herosection image" width={450} height={450} /></div>
                <h1 className="text-red-700 text-xl font-bold text-center m-0">Hi, I am Saba Ali Zain From Pakistan</h1>
                <p className="text-black text-xl font-semibold font-serif text-center m-2">I am currently immersed in learning phase.
                <br/> Passionate about leveraging technology to solve real-world problems,<br/>
                I aim to create intelligent solutions that enhance everyday experiences.
                <br/>Join me as I build my skills and portfolio.Lets explore the future of AI together.
                </p>
            </section>

            <section>
                <h1 className="text-blue-950 text-2xl font-bold text-left m-4 mt-11">About Me</h1>
                <p className="text-black text-xl font-semibold text-left m-4">I have done MBA(Finance) from Mohammad Ali Jinnah University . Currently I have been selected for the Course-Cloud Applied Generative Artificial Intelligence (Governor Sindh Initiative), learning the fundamentals and passionate about building applications. Along with this running my own online business.
                <br/>  Looking forward for good opportunity to enhance my career and professional development.</p>
                <div>
                <h1 className="text-blue-950 text-2xl font-bold text-left m-4 mt-11">My Education</h1>
                    <ol className="list-disc text-black font-bold m-4 p-1">
                        <li>MBA(Finance) - 2012 Mohammad Ali Jinnah University</li>
                        <li>BCOM - 2009 University Of Karachi</li>
                        <li>HSC - 2006 Nazareth Girls College Hyderabad</li>
                        <li>SSC - 2004 County Cambridge School Hyderabad</li>
                    </ol>
                </div>
            </section>

            <section className="flex justify-between align items-center m-14 p-1 gap-5">
                <h1 className="text-blue-950 text-2xl font-bold text-center justify-center align items-center m-2 mt-0" >My Assignments</h1>
                <div className="border bg-orange-950 rounded-md"><Image src="/Image/firstassignment.jpg" alt="first assignment image" width={400} height={400} />
                <button className="m-3 p-1 border rounded-md bg-orange-500 hover:bg-green-200"><Link href="https://assignmentclass1-nextjs.vercel.app/">Assignment 1</Link></button> 
                </div>
                <div className="border bg-orange-950 rounded-md"><Image src="/Image/secondassignment.jpg" alt="second assignment image" width={400} height={400} />
                <button className="m-3 p-1 border rounded-md bg-orange-500 hover:bg-green-200"><Link href="https://assignment2-nextjs.vercel.app/">Assignment 2</Link></button> 
                </div>
                <div className="border bg-orange-950 rounded-md"><Image src="/Image/thirdassignment.jpg" alt="third assignment image" width={400} height={400} />
                <button className="m-3 p-1 border rounded-md bg-orange-500 hover:bg-green-200"><Link href="https://perfumewebsite-nextjs.vercel.app/">Assignment 3</Link></button> 
                </div>

            </section>
            <Footer />

        </div>
    )
}

export default HomePage

