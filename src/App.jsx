import {
    Navbar,
    Hero,
    Slider,
    Opportunities,
    Opportunities2,
    Integration,
    Solutions,
    BDCApplicants,
    BDCApplicants2,
    Form,
    Footer,
} from './components/index';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Slider />
            <Solutions />
            {/* <Opportunities /> */}
            <Opportunities2 />
            <Integration />
            {/* <BDCApplicants /> */}
            <BDCApplicants2 />

            <Form />
            <Footer />
        </>
    );
}

export default App;
