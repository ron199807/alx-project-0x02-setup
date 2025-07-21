import { NextPage } from "next";
import { Header } from "@/components/layout/Header";

const About: NextPage = () => {
    return (
        <div>
            <Header />
            <button className="bg-green-600 px-4 py-1 rounded-full cursor-pointer">Hit me</button>
        </div>
    )
}

export default About