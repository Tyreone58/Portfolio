import './Header.css';

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <nav aria-label="Main Navigation">
        <ul>
          <li><a href="/about">About Me</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
