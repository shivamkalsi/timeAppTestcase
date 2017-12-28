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
      isloding:false
    };
  }
  handelApiCall(location)
  {
    var that=this;
    this.setState({isloding:true});
    OpenWhether.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp
      });
    },function(err){
      alert(err);
    })
  }
  render()
  {
    var {isloding,location,temp}=this.state;
    
    function rendermsg()
    {
      if(isloding)
      {
        return(<h3>Fetching msg......</h3>);
      }
      else
      {
         return(<About location={location} temp={temp}/>);
      }
    }
    
    return(
    <div>
    <h3>Whether App</h3>
    <WhetherForm callApi={this.handelApiCall} />
    {rendermsg}
    </div>
    );
  }
}

export default  Whether;
