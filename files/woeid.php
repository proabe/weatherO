<?php

set_time_limit(0);  
ini_set('xdebug.var_display_max_depth', -1);
ini_set('xdebug.var_display_max_children', -1);
ini_set('xdebug.var_display_max_data', -1);
 $city=$_GET['q'];
 $time=$_GET['hrs'];
 $city=trim($city);
 $city=rawurlencode($city);
 $data="";   
    $url='http://www.woeidlookup.com/search.php';
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);	
    curl_setopt($ch, CURLOPT_URL, $url);
    $sendingdata="s=".$city; 
	curl_setopt($ch, CURLOPT_POSTFIELDS,
            $sendingdata);
    curl_setopt($ch,CURLOPT_USERAGENT,"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $result = curl_exec($ch);
    curl_close($ch);

    function process($time,$code){
      $code=(int)$code;
      
      switch ($code) {
          case 0:if ($time>=4&&$time<=19) {
               return "wi wi-tornado";
          }
          else{
               return "wi wi-tornado";
          }

          break;
          case 1:if ($time>=4&&$time<=19) {
                return "wi wi-hurricane";
          }
          else{
                return "wi wi-hurricane";
          }
                      
          break;
          case 2:if ($time>=4&&$time<=19) {
                return "wi wi-hurricane";
          }
          else{
               return "wi wi-hurricane";
          }
          
          break;
          case 3:if ($time>=4&&$time<=19) {
               return "wi wi-day-thunderstorm";
          }
          else{
               return "wi wi-night-thunderstorm";
          }
          
          break;
          case 4:if ($time>=4&&$time<=19) {
               return "wi wi-day-thunderstorm";   
          }
          else{
              return "wi wi-night-thunderstorm";
          }
          
          break;
          case 5:if ($time>=4&&$time<=19) {
               return "wi wi-day-snow-thunderstorm";
          }
          else{
               return "wi wi-night-alt-snow-thunderstorm";
          }
          
          break;
          case 6:if ($time>=4&&$time<=19) {
              return "wi wi-day-sleet-storm";
          }
          else{
              return "wi wi-night-alt-sleet-storm";
          }
          
          break;
          case 7:if ($time>=4&&$time<=19) {
               return "wi wi-day-sleet"; 
          }
          else{
               return "wi wi-night-alt-sleet";
          }
          
          break;
          case 8:if ($time>=4&&$time<=19) {
                return "wi wi-sprinkle";
          }
          else{
               return "wi wi-sprinkle";
          }
          
          break;
          case 9:if ($time>=4&&$time<=19) {
               return "wi wi-sprinkle";
          }
          else{
               return "wi wi-sprinkle";
          }
          
          break;
          case 10:if ($time>=4&&$time<=19) {
               return "wi wi-rain-mix";
          }
          else{
               return "wi wi-rain-mix";
          }
          
          break;
          case 11:if ($time>=4&&$time<=19) {
               return "wi wi-day-showers";
          }
          else{
              return "wi wi-night-alt-showers";
          }
          
          break;
          case 12:if ($time>=4&&$time<=19) {
               return "wi wi-day-showers";
          }
          else{
              return "wi wi-night-alt-showers";
          }
          
          break;
          case 13:if ($time>=4&&$time<=19) {
               return "wi wi-snowflake-cold";
          }
          else{ 
               return "wi wi-snowflake-cold";
            
          }
          
          break;
          case 14:if ($time>=4&&$time<=19) {
                return "wi wi-showers";
          }
          else{
               return "wi wi-showers";
          }
          
          break;
          case 15:if ($time>=4&&$time<=19) {
                return "wi wi-day-snow-wind";
          }
          else{
               return "wi wi-night-alt-snow-wind";
          }
          
          break;
          case 16:if ($time>=4&&$time<=19) {
                return "wi wi-day-snow";
          }
          else{
               return "wi wi-night-alt-snow";
          }
          
          break;
          case 17:if ($time>=4&&$time<=19) {
                return "wi wi-day-hail";
          }
          else{
               return "wi wi-night-alt-hail";
          }
          
          break;
          case 18:if ($time>=4&&$time<=19) {
                return "wi wi-day-sleet";
          }
          else{
               return "wi wi-night-alt-sleet";
          }
          
          break;
          case 19:if ($time>=4&&$time<=19) {
                return "wi wi-dust";
          }
          else{
                return "wi wi-dust";
          }
          
          break;
          case 20:if ($time>=4&&$time<=19) {
                return "wi wi-day-fog";
          }
          else{
               return "wi wi-night-fog";
          }
          
          break;
          case 21:if ($time>=4&&$time<=19) {
                return "wi wi-day-haze";
          }
          else{
               return "wi wi-night-fog";
          }
          
          break;
          case 22:if ($time>=4&&$time<=19) {
                return "wi wi-smoke";
          }
          else{
               return "wi wi-smoke";
          }
          
          break;
          case 23:if ($time>=4&&$time<=19) {
                return "wi wi-strong-wind";
          }
          else{
               return "wi wi-strong-wind";
          }
          
          break;
          case 24:if ($time>=4&&$time<=19) {
                return "wi wi-windy";
          }
          else{
               return "wi wi-windy";
          }
          
          break;
          case 25:if ($time>=4&&$time<=19) {
                return "wi wi-snowflake-cold";
          }
          else{
               return "wi wi-snowflake-cold";
          }
          
          break;
          case 26:if ($time>=4&&$time<=19) {
                return "wi wi-day-cloudy";
          }
          else{
              return "wi wi-night-alt-cloudy";
          }
          
          break;
          case 27:if ($time>=4&&$time<=19) {
                return "wi wi-cloudy";
          }
          else{
               return "wi wi-cloudy";
          }
          
          break;
          case 28:if ($time>=4&&$time<=19) {
                return "wi wi-cloudy";
          }
          else{
               return "wi wi-cloudy";
          }
          
          break;
          case 29:if ($time>=4&&$time<=19) {
                return "wi wi-night-partly-cloudy";
          }
          else{
               return "wi wi-night-partly-cloudy";
          }
          
          break;
          case 30:if ($time>=4&&$time<=19) {
                return "wi wi-night-partly-cloudy";
          }
          else{
               return "wi wi-night-partly-cloudy";
          }
          
          break;          
          case 31:if ($time>=4&&$time<=19) {
                return "wi wi-night-clear";
          }
          else{
              return "wi wi-night-clear";
          }
          
          break;
          case 32:if ($time>=4&&$time<=19) {
                return "wi wi-day-sunny";
          }
          else{
               return "wi wi-day-sunny";
          }
          
          break;
          case 33:if ($time>=4&&$time<=19) {
                return "wi wi-night-clear";
          }
          else{
               return "wi wi-night-clear";
          }
          
          break;
          case 34:if ($time>=4&&$time<=19) {
                return "wi wi-day-sunny";
          }
          else{
               return "wi wi-day-sunny";
          }
          
          break;
          case 35:if ($time>=4&&$time<=19) {
                return "wi wi-hail";
          }
          else{
               return "wi wi-hail";
          }
          
          break;
          case 36:if ($time>=4&&$time<=19) {
                return "wi wi-thermometer";
          }
          else{
              return "wi wi-thermometer";
          }
          
          break;
          case 37:if ($time>=4&&$time<=19) {
                return "wi wi-day-thunderstorm";
          }
          else{
               return "wi wi-night-alt-thunderstorm";
          }
          
          break;
          case 38:if ($time>=4&&$time<=19) {
                return "wi wi-day-thunderstorm";
          }
          else{
               return "wi wi-night-alt-thunderstorm";
          }
          
          break;
          case 39:if ($time>=4&&$time<=19) {
                return "wi wi-day-thunderstorm";
          }
          else{
               return "wi wi-night-alt-thunderstorm";
          }
          
          break;
          case 40:if ($time>=4&&$time<=19) {
                 return "wi wi-day-showers";
          }
          else{
               return "wi wi-night-showers";
          }
          
          break;          
          case 41:if ($time>=4&&$time<=19) {
                 return "wi wi-snow";
          }
          else{
                return "wi wi-snow";
          }
          
          break;
          case 42:if ($time>=4&&$time<=19) {
                return "wi wi-day-snow-thunderstorm";
          }
          else{
               return "wi wi-night-alt-snow-thunderstorm";
          }
          
          break;
          case 43:if ($time>=4&&$time<=19) {
                return "wi wi-snow";
          }
          else{
               return "wi wi-snow";
          }
          
          break;
          case 44:if ($time>=4&&$time<=19) {
                return "wi wi-night-partly-cloudy";
          }
          else{
               return "wi wi-night-partly-cloudy";
          }
          
          break;
          case 45:if ($time>=4&&$time<=19) {
                return "wi wi-day-storm-showers";
          }
          else{
               return "wi wi-night-alt-storm-showers";
          }
          
          break;
          case 46:if ($time>=4&&$time<=19) {
                return "wi wi-day-snow-thunderstorm";
          }
          else{
               return "wi wi-night-alt-snow-thunderstorm";
          }
          
          break;
          case 47:if ($time>=4&&$time<=19) {
                return "wi wi-day-storm-showers";
          }
          else{
              return "wi wi-night-alt-storm-showers";
          }
                    
          break;
          case 3200:
              return "wi wi-na";
          break;
              
          default:
              return "wi wi-na";
          break;
          }        

    }

    $body=new DOMDocument();
    libxml_use_internal_errors(TRUE);

     if (!empty($result)) {
     	
    	$body->loadHTML($result);
    	libxml_clear_errors();
    	$body_xpath=new DOMXPath($body);
    	$all=$body_xpath->query('//table/tbody/tr[1]/td[last()]');

    	foreach ($all as $value) {
            $data=$value->nodeValue;
    	}

     } 	
     $data=trim($data);
     /*var_dump($data);*/
     $j=@file_get_contents('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D'.$data.'%20and%20u%3D%22c%22&format=json');
     if ($j===false) {
         $v =array('Status'=>'NOT OK');
         print json_encode($v);
     }
     else{
         $json=json_decode($j,TRUE);
         /*var_dump($json);*/
         for ($u=0; $u < count($json['query']['results']['channel']['item']['forecast']) ; $u++) { 
           $json['query']['results']['channel']['item']['forecast'][$u]['icon']=process($time,$json['query']['results']['channel']['item']['forecast'][$u]['code']);
         }
         $unit=$json['query']['results']['channel']['units'];
         $unit_loc=$json['query']['results']['channel']['location'];   
         $unit_wind=$json['query']['results']['channel']['wind'];
         $unit_atm=$json['query']['results']['channel']['atmosphere'];
         $unit_ast=$json['query']['results']['channel']['astronomy'];
         $unit_long=$json['query']['results']['channel']['item']['long'];
         $unit_lat=$json['query']['results']['channel']['item']['lat'];
         $unit_condition=$json['query']['results']['channel']['item']['condition'];
         $unit_condition['icon']=process($time,$json['query']['results']['channel']['item']['condition']['code']);
         $unit_forecast=$json['query']['results']['channel']['item']['forecast'];
         $result=array('result_set'=>array('units'=>$unit,'loc'=>$unit_loc,'wind'=>$unit_wind,'atm'=>$unit_atm,'ast'=>$unit_ast,'long'=>$unit_long,'lat'=>$unit_lat,'condition'=>$unit_condition,'forcast'=>$unit_forecast),'Status'=>'OK');
         print json_encode($result);
     }
     

?>