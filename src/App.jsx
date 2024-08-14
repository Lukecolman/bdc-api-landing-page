import {
    Navbar,
    Hero,
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
