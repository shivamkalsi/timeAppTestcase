var React=require('react');
var {Link}=require('react-router-dom');


class NavBar extends React.Component
{
  
  constructor(props)
  {
    super(props);
    this.onSearch=this.onSearch.bind(this);
  }
  
  onSearch()
  {
    alert('Hiiii');
  }
  
  render()
  {
    return(
      
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Whether App</li>
            <li>
              <Link to="/test">test</Link>
            </li>
            <li>
              <Link to="/whether">whether</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
          <ul className="menu">
            <li><input type="search" ref="search" placeholder="Search Data" /></li>
            <li><input type="submit" className="button"  value="Submit" /></li>
          </ul>
          </form>
        </div>
      </div>
      
    );
  }
}

export default NavBar;
