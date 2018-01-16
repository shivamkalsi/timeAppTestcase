var React = require('react');
import WhetherForm from './WhetherForm.jsx';
import About from './About.jsx';
import OpenWhether from '../api/OpenWhether.jsx';
var axios=require('axios');
import Modal from './Modal.jsx';

class Whether extends React.Component
{
  constructor(props)
  {
    super(props);
    this.handelApiCall=this.handelApiCall.bind(this);
   
    //this.testdata=this.testdata.bind(this);
    this.state={
      isloding:false,
	  location:'',
	  temp:'',
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
		iserror:false,
      });
    },function(err){
		that.setState({isloding:false,
			iserror:true,
		});
		
    })
  }


 
   
  render()
  {
    var {isloding,location,temp, iserror}=this.state;
    
     function testdata()
     {
       var retdata;
       if(isloding)
      {
        retdata=<h3 className="text-center">Fetching msg......</h3>;
      }
      else
      {
        retdata=<About location={location} temp={temp}/>;
      }
      return(retdata);
     }
	 function renderError()
	 {
		 console.log(iserror+'0000000000000000');
		 var renderr;
		 if(iserror)
		 {
			 renderr=<Modal />;
		 }
		 else{
			 renderr='';
		 }
		 return(renderr);
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
