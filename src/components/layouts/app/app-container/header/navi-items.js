import { Link } from 'react-router-dom';

const { NaviWrapper } = require('./app-header-styled');

const Navi = () => (
  <NaviWrapper>
    <Link to="how-it-works">How it works?</Link>
    <Link to="contact">Contact us</Link>
    <Link to="help">Help</Link>
  </NaviWrapper>
);

export default Navi;
