import { Header } from "./components/Header/Header";
import { Showcase } from "./components/Showcase/Showcase";
import { Services } from "./components/Services/Services";
import { WhyUs } from "./components/Why Us/WhyUs";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { WhyChooseUs } from "./components/WhyChooseUs/WhyChooseUs";
import { TeamMember } from "./components/TeamMember/TeamMember";
import { ContactUs } from "./components/ContactUs/ContactUs";
function App() {
  return (
    <div className="app">
        <Header/>
        <Showcase/>
        <Services/>
        <WhyUs/>
        <Testimonial/>
        <WhyChooseUs/>
        <TeamMember/>
        <ContactUs/>
    </div>
  );
}

export default App;
