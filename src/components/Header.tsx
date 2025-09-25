import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="navbar">
      <div className="logo">
        Cha<span className="highlight">nice</span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
  );
};

export default Header;
