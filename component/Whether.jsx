var React = require('react');
import WhetherForm from './WhetherForm.jsx';
import About from './About.jsx';
import OpenWhether from '../api/OpenWhether.jsx';
import ErrorMotal from './ErrorMotal.jsx';
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
<<<<<<< HEAD
	  location:'',
	  temp:'',
	  iserror:false
=======
      iserror:false
>>>>>>> 54a6029acb266dd705db381acd3044e7bb1b1117
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
<<<<<<< HEAD
		iserror:false,
      });
    },function(err){
		that.setState({isloding:false,
			iserror:true,
		});
		
    })
=======
        iserror:false
      });
    }).catch(function(err){
      that.setState({
        isloding:false,
        iserror:true
      });
    });
>>>>>>> 54a6029acb266dd705db381acd3044e7bb1b1117
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
<<<<<<< HEAD
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
=======
     
   function renderError()
   {
     if( iserror==true)
     {
      return(<ErrorMotal />);
     }
   }
>>>>>>> 54a6029acb266dd705db381acd3044e7bb1b1117
    
    return(
      <div>
        <WhetherForm callApi={this.handelApiCall} />
        {testdata()}
<<<<<<< HEAD
		{renderError()}
=======
        {renderError()}
>>>>>>> 54a6029acb266dd705db381acd3044e7bb1b1117
      </div>

    );
  }
}

export default  Whether;
