import SectionBorder from "../../Components/Dividers/SectionBorder";
import BioImage from "../../assets/images/portfolio_avi_white.png";
import Blockquote from "../../Components/Typography/Blockquote";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h2 className="about-title">About</h2>
        <SectionBorder />
        <div className="bio-image-container">
          <img src={BioImage} alt="malik-felix-headshot" />
        </div>
        <div className="bio">
          <p>
            I&apos;m a Software Engineer with a love for all things tech. Born
            and raised in Brooklyn, NY, I now call the Greater Chicago area my
            home. With over 10 years of experience in the technology industry,
            I&apos;ve had the pleasure of working with all sorts of companies,
            from Finance to Public Relations to SaaS companies.
          </p>
          <Blockquote className="spotlight-quote">
            My passion lies in Front End Development and UI Design, where I use
            my expertise to build websites and web applications that not only
            look great but also function well. Whether it&apos;s HTML, CSS,
            JavaScript, or frameworks like React, Nodejs, or Ruby on Rails,
            I&apos;m always up for a coding challenge.
          </Blockquote>
          <p>
            When I&apos;m not coding, you can find me mentoring others both on
            and off the court. I believe in helping people reach their full
            potential, and nothing makes me happier than seeing others succeed.
            In my free time, I love hanging out with family and friends, trying
            out different types of whiskey, and defrazzling with some good
            old-fashioned video games. I&apos;m also a city person at heart, and
            I love exploring new places and seeing what other cities have to
            offer. So, that&apos;s a bit about me! If you&apos;re interested in
            working together or just want to chat about tech, feel free to drop
            me a line. I&apos;m always up for a good conversation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
