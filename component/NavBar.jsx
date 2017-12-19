var React=require('react');
var {Link}=require('react-router-dom');


class NavBar extends React.Component
{
  render()
  {
    return(
      <h3><Link to="/test">test</Link>
      <Link to="/whether">whether</Link></h3>
    );
  }
}

export default NavBar;
