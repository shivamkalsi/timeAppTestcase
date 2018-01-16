var React=require('react');
import Nav from './NavBar.jsx';
class TestMain extends React.Component
{
	render()
	{

		return(
		<div>
			<Nav />
			{this.props.children}
		</div>
		);
	}
}

module.exports=TestMain;
