import { Link } from 'react-router-dom';

import { useScrollHeader } from '../../hooks/useScrollHeader';
import classes from './Header.module.scss';

const Header = () => {
  const [isScrolled] = useScrollHeader();

  return (
    <header className={`${classes.component} ${isScrolled ? classes.scrolled : ''}`}>
      <div>
        <Link className={classes.logo} to="/">TrackF</Link>
      </div>
      <nav>
        <Link to="/">Main</Link>
        <Link to="/my-exercises">My exercises</Link>
        <Link to="/g">Template</Link>
        <Link to="/h">Template</Link>
      </nav>
    </header>
  );
};

export default Header;
