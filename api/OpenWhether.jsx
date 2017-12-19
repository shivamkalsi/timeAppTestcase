var axios=require('axios');

const Open_Whether_Map_URL='http://api.openweathermap.org/data/2.5/weather?appid=81de76d4c4f7545e1dea037dc0b8d83d';

module.exports={
  getTemp(location)
  {
    var encodeLocation=encodeURIComponent(location);
    var requestUrl=`${Open_Whether_Map_URL}&q=${encodeLocation}`;
    console.log(requestUrl);
    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message)
      {
        throw new Error(res.data.message);
      }
      else
      {
        return res.data.main.temp;
      }
    },function(res){
        throw new Error(res.data.message);
    });

  }
}
