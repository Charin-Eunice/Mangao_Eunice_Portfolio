import "./Home.css";
import profile from'../assets/home.jpg';
const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I am<span className="highlight"> <br /><b>Eunice Mangao</b></span></h1>
        <h2>Information Technology Student</h2>
        <p>
          I specialize in the art of UI/UX design, a discipline that goes beyond aesthetics 
          to focus on the entire user journey, beginning with in-depth research to understand a 
          user's needs and pain points, before meticulously crafting intuitive navigation, 
          seamless user flows, and a visually cohesive interface that ultimately transforms a digital 
          product into a delightful and effective experience.
        </p>
        <a href="#about" className="continue-btn">
  Continue
</a>
      </div>
      <div className="home-image">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
