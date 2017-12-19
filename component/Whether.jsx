var React = require('react');
import WhetherForm from './WhetherForm.jsx';
import About from './About.jsx';
import OpenWhether from '../api/OpenWhether.jsx';
var axios=require('axios');
class Whether extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handelApiCall=this.handelApiCall.bind(this);
    this.state={
      location:'Dehradun',
      temp:35
    };
  }
  handelApiCall(location)
  {
    var that=this;
    OpenWhether.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp
      });
    },function(err){
      alert(error);
    })
  }
  render()
  {
    var {location,temp}=this.state;
    return(
    <div>
    <h3>Whether App</h3>
    <WhetherForm callApi={this.handelApiCall} />
    <About location={location} temp={temp}/>
    </div>
    );
  }
}

export default  Whether;
