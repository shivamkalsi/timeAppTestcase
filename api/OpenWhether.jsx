var axios=require('axios');

const Open_Whether_Map_URL='http://api.openweathermap.org/data/2.5/weather?appid=81de76d4c4f7545e1dea037dc0b8d83d';

module.exports={
  getTemp(location)
  {
    var encodeLocation=encodeURIComponent(location);
    var requestUrl=`${Open_Whether_Map_URL}&q=${encodeLocation}`;
	var message="";
    console.log(requestUrl);
    return axios.get(requestUrl).then(function(res){

      console.log(res+"@@@@@@@@@@@@@@@");
      if(res.data.cod && res.data.message)
      {
<<<<<<< HEAD
		  
=======
        
>>>>>>> 54a6029acb266dd705db381acd3044e7bb1b1117
        throw new Error(res.data.message);
      }
      else
      {
        return res.data.main.temp;
      }
<<<<<<< HEAD
    }).catch(function(e){
		 message="City Not Found";
		throw new Error(message);
	});
=======

    
    }).catch(function(e){ throw new Error("Invalid State");});
>>>>>>> 54a6029acb266dd705db381acd3044e7bb1b1117

  }
}
