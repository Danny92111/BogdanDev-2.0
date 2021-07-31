import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Reviews from "./Components/Reviews";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Skills />
			<Services />
			<About />
			<Projects />
			<Contact />
			<Footer />
			{/* <Reviews /> */}
		</div>
	);
}

export default App;
