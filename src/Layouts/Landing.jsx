import Hero from "./Hero/Hero";
import Work from "./Work/Work";
import "./Landing.css";
import Testimonial from "./Testimonial/Testimonial";
import Service from "./Service/Service";
import CtaSection from "./CTASection/CtaSection";
import Review from "../Components/Review/Review";
import Snapshot from "./Snapshot/Snapshot";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <Hero />
        <Testimonial>
          <Review
            quoteParts={[
              "Malik was not only incredibly efficient but also quickly understood my project's needs without a lot of explanation After a quick call, our website was properly functioning again. ",
            ]}
            highlight='I would highly recommend Malik for any website job!"'
            clientName="Michael P."
            clientTitle="Executive Director at Youth Represent"
          />
        </Testimonial>
        <Service />
        <CtaSection />
        <Work />
        <Testimonial>
          <Review
            quoteParts={[
              "Malik Felix and his expertise has been a TRUE ASSET to me and my ventures. From calibrating and improving my branded apps in the Play Store and App Store to ",
              " Coupled with his pleasant demeanor and exceptional professionalism... he's undoubtedly worth EVERY cent! I look forward to working with him moving forward...indefinitely!",
            ]}
            highlight="lending his proficiency in web development by improving the overall function and user experience for my multiple sites."
            clientName="D.R. 'Solo' Perry"
            clientTitle="Founder & Director at Ka-Pow!! The Comic Art Academy"
          />
        </Testimonial>
        <Snapshot />
      </div>
    </>
  );
};

export default Landing;
