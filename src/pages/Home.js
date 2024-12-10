import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <Posts/>
            </main>
            <Footer/>
        </>
    );
}

export default Home;