var React = require('react');
import WhetherForm from './WhetherForm.jsx';
import About from './About.jsx';
import OpenWhether from '../api/OpenWhether.jsx';
import ErrorMotal from './ErrorMotal.jsx';
var axios=require('axios');
class Whether extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handelApiCall=this.handelApiCall.bind(this);
   
    //this.testdata=this.testdata.bind(this);
    this.state={
      isloding:false,
      iserror:false
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
        isloding:false,
        iserror:false
      });
    }).catch(function(err){
      that.setState({
        isloding:false,
        iserror:true
      });
    });
  }
   
  render()
  {
    var {isloding,location,temp, iserror}=this.state;
    
     function testdata()
     {
       var retdata;
       if(isloding)
      {
        retdata=<h3>Fetching msg......</h3>;
      }
      else
      {
        if(iserror)
        {
        retdata='';
        }
        else{
            retdata=<About location={location} temp={temp}/>;
        }
      }
      return(retdata);
     }
     
   function renderError()
   {
     if( iserror==true)
     {
      return(<ErrorMotal />);
     }
   }
    
    return(
      <div>
        <WhetherForm callApi={this.handelApiCall} />
        {testdata()}
        {renderError()}
      </div>
    );
  }
}

export default  Whether;
