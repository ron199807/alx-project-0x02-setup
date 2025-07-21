import { NextPage } from "next";
import { Header } from "@/components/layout/Header";

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <p>Welcome home</p>
        </div>
    )
}

export default Home