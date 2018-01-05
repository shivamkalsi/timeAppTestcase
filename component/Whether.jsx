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
   
    //this.testdata=this.testdata.bind(this);
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
        temp:temp,
        isloding:false
      });
    },function(err){
      alert(err);
    })
  }
   
  render()
  {
    var {isloding,location,temp}=this.state;
    
     function testdata()
     {
       var retdata;
       if(isloding)
      {
        retdata=<h3>Fetching msg......</h3>;
      }
      else
      {
        retdata=<About location={location} temp={temp}/>;
      }
      return(retdata);
     }
    
    return(
      <div>
        <WhetherForm callApi={this.handelApiCall} />
        {testdata()}
  
      </div>
    );
  }
}

export default  Whether;
