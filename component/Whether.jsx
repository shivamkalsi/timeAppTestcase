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
    this.rendermsg=this.rendermsg.bind(this);
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
   rendermsg(isloding, location, temp)
    {
      if(isloding)
      {
        return(<h3>Fetching msg...... {isloding}**********</h3>);
      }
      else
      {
         //return(<h3>Fetching msg......</h3>);
         return(<About location={location} temp={temp}/>);
      }
    }
  render()
  {
    console.log(this.state);
    var {isloding,location,temp}=this.state;
    
     function testdata()
     {
       var retdata;
      //return(<h1>*********************</h1>;
       if(isloding)
      {
        retdata=<h3>Fetching msg......</h3>;
      }
      else
      {
         //return(<h3>Fetching msg......</h3>);
        retdata=<About location={location} temp={isloding}/>;//<h3>Fetching msg......</h3>;//<About location={location} temp={temp}/>;
      }
      return(retdata);
     }
    
    return(
    <div>
    <h3>Whether App</h3>
    <WhetherForm callApi={this.handelApiCall} />
    {testdata()}
  
    </div>
    );
  }
}

export default  Whether;
