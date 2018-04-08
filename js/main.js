document.addEventListener("DOMContentLoaded",function(){


  $("#loader").hide();
   $('#msg_contain').hide();
   var now =new Date();
   console.log(now);

   var hrs=now.getHours();
   var minutes=now.getMinutes();
   console.log(hrs);

   if (hrs>=0&&hrs<=4) {
   	
    $('body').css({'background' : 'url(./images/background/night.jpg)'});
    $('#msg').text('Night owl eh?'); 	
   }
   else if (hrs>=5&&hrs<=11) {
   	$('#msg').text('Getting ready for morning coffee eh?');
    $('body').css({'background' : 'url(./images/background/sunrise.jpg)'}); 	
   }
   else if (hrs>=12&&hrs<=16) {
   	$('#msg').text('A siesta wouldn\'t hurt eh?');
    $('body').css({'background' : 'url(./images/background/noon1.jpg)'}); 	
   }
   else if (hrs>=15&&hrs<=17) {
   	$('#msg').text('A beautiful sunset brings the warmest feeling eh?');
    $('body').css({'background' : 'url(./images/background/sunset.jpg)'}); 	
   }
   else if (hrs>=18&&hrs<=24) {
   	$('#msg').text('I like the night. Without the dark, we\'d never see the stars');
    $('body').css({'background' : 'url(./images/background/night.jpg)'}); 	
   }
   
   $('#msg_contain').fadeIn(3000);
	$('#con input').on("keypress", function(e) {
	    if (e.keyCode == 13) {
	       var io=$("#con input").val();	        	        
	       $.ajax({
		   	 url:"files/woeid.php",
		   	 data:{q:io,hrs:hrs},
		   	 success:function (result){
		   	 	      console.log(JSON.parse(result)); 
		   	 	      run(JSON.parse(result));
		   	 }
		   })
	        return false; // prevent the button click from happening
	    }
	});

  $('#search').click(function(){
    var io=$("#con input").val();                   
         $.ajax({
         url:"files/woeid.php",
         data:{q:io,hrs:hrs},
         success:function (result){
                console.log(JSON.parse(result)); 
                run(JSON.parse(result));
         }
       })
  });
  
   $(document).ajaxStart(function() {
      $("#loader").show();
    }).ajaxStop(function() {
      $("#loader").slideUp(1000);
   });

    $.ajax({
         url:"files/woeid.php",
         data:{q:"Delhi",hrs:hrs},
         success:function (result){
                console.log(JSON.parse(result)); 
                run(JSON.parse(result));
         }
    }); 

  function createForcast(forcastData){

     var cont=document.getElementById("container");
     cont.innerHTML="";
     
     for (var i = 0; i < forcastData.length; i++) {
       
       if (forcastData[i].day=="Sun") {
          forcastData[i].day="Sunday";
       }
       if (forcastData[i].day=="Mon") {
          forcastData[i].day="Monday";
       }
       if (forcastData[i].day=="Tue") {
          forcastData[i].day="Tuesday";
       }
       if (forcastData[i].day=="Wed") {
          forcastData[i].day="Wednesday";
       }
       if (forcastData[i].day=="Thu") {
          forcastData[i].day="Thursday";
       }
       if (forcastData[i].day=="Fri") {
          forcastData[i].day="Friday";
       }
       if (forcastData[i].day=="Sat") {
          forcastData[i].day="Saturday";
       }

       var forcast=document.createElement("div");
       forcast.setAttribute("class","con");
       var celsius=document.createElement("i");
       celsius.setAttribute("class","deg wi wi-celsius");
       var celsius2=document.createElement("i");
       celsius2.setAttribute("class","deg wi wi-celsius");
       var span=document.createElement("span");
       span.textContent=forcastData[i].day;
       forcast.append(span);
       var icon=document.createElement("i");
       icon.setAttribute("class",forcastData[i].icon);
       forcast.append(icon);
       var division=document.createElement("div");
       var p4=document.createElement("p");
       p4.textContent=forcastData[i].text; 
       division.append(p4);       
       forcast.append(division);
       var p1=document.createElement("p");
       p1.textContent=forcastData[i].high;
       p1.append(celsius);
       forcast.append(p1);
       var p2=document.createElement("p");
       p2.textContent=forcastData[i].low;
       p2.append(celsius2);
       forcast.append(p2);
       var p3=document.createElement("p");
       p3.textContent=forcastData[i].date;
       forcast.append(p3);       
       cont.append(forcast);
     }

     

  } 

	function run(data){
       if (data['Status']==="NOT OK") {
         console.log("ABORT");
       }
       else{   
       	 $("#current").contents().eq(0).replaceWith(data['result_set']['condition']['temp']);
       	 $("#condition").contents().eq(1).replaceWith(data['result_set']['condition']['text']);
         $("#condition i").attr("class",data['result_set']['condition']['icon']);
       	 $("#place").contents().eq(1).replaceWith(data['result_set']['loc']['city']+","+data['result_set']['loc']['country']);
       	 $("#ast span:nth-child(2)").contents().eq(0).replaceWith("Sunrise : "+data['result_set']['ast']['sunrise']);
       	 $("#ast span:nth-child(3)").contents().eq(0).replaceWith("Sunset : "+data['result_set']['ast']['sunset']);
       	 $("#units span:nth-child(2)").contents().eq(0).replaceWith("Distance : "+data['result_set']['units']['distance']);
       	 $("#units span:nth-child(3)").contents().eq(0).replaceWith("Pressure : "+data['result_set']['units']['pressure']);
       	 $("#units span:nth-child(4)").contents().eq(0).replaceWith("Speed : "+data['result_set']['units']['speed'].replace("\\/","/"));
       	 $("#units span:nth-child(5)").contents().eq(0).replaceWith("Temperature : "+data['result_set']['units']['temperature']);
       	 $("#wind span:nth-child(2)").contents().eq(0).replaceWith("Chill : "+data['result_set']['wind']['chill']);
       	 $("#wind span:nth-child(3)").contents().eq(0).replaceWith("Direction : "+data['result_set']['wind']['direction']);
       	 $("#wind span:nth-child(4)").contents().eq(0).replaceWith("Speed : "+data['result_set']['wind']['speed']);
       	 $("#atm span:nth-child(2)").contents().eq(0).replaceWith("Humidity : "+data['result_set']['atm']['humidity']);
       	 $("#atm span:nth-child(3)").contents().eq(0).replaceWith("Pressure : "+data['result_set']['atm']['pressure']);
       	 $("#atm span:nth-child(4)").contents().eq(0).replaceWith("Visibilty : "+data['result_set']['atm']['visibility']);
         
         createForcast(data['result_set']['forcast']);

       	/* $(".con:nth-child(1) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][0]['date']);
       	 $(".con:nth-child(2) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][1]['date']);
       	 $(".con:nth-child(3) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][2]['date']);
       	 $(".con:nth-child(4) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][3]['date']);
       	 $(".con:nth-child(5) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][4]['date']);
       	 $(".con:nth-child(6) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][5]['date']);
       	 $(".con:nth-child(7) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][6]['date']);
       	 $(".con:nth-child(8) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][7]['date']);
       	 $(".con:nth-child(9) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][8]['date']);
       	 $(".con:nth-child(10) p:nth-child(5)").contents().eq(0).replaceWith(data['result_set']['forcast'][9]['date']);

       	 $(".con:nth-child(1) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][0]['high']);
       	 $(".con:nth-child(2) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][1]['high']);
       	 $(".con:nth-child(3) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][2]['high']);
       	 $(".con:nth-child(4) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][3]['high']);
       	 $(".con:nth-child(5) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][4]['high']);
       	 $(".con:nth-child(6) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][5]['high']);
       	 $(".con:nth-child(7) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][6]['high']);
       	 $(".con:nth-child(8) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][7]['high']);
       	 $(".con:nth-child(9) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][8]['high']);
       	 $(".con:nth-child(10) p:nth-child(3)").contents().eq(0).replaceWith(data['result_set']['forcast'][9]['high']);

       	 $(".con:nth-child(1) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][0]['low']);
       	 $(".con:nth-child(2) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][1]['low']);
       	 $(".con:nth-child(3) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][2]['low']);
       	 $(".con:nth-child(4) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][3]['low']);
       	 $(".con:nth-child(5) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][4]['low']);
       	 $(".con:nth-child(6) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][5]['low']);
       	 $(".con:nth-child(7) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][6]['low']);
       	 $(".con:nth-child(8) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][7]['low']);
       	 $(".con:nth-child(9) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][8]['low']);
       	 $(".con:nth-child(10) p:nth-child(4)").contents().eq(0).replaceWith(data['result_set']['forcast'][9]['low']);

       	 $(".con:nth-child(1) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][0]['day']);
       	 $(".con:nth-child(2) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][1]['day']);
       	 $(".con:nth-child(3) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][2]['day']);
       	 $(".con:nth-child(4) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][3]['day']);
       	 $(".con:nth-child(5) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][4]['day']);
       	 $(".con:nth-child(6) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][5]['day']);
       	 $(".con:nth-child(7) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][6]['day']);
       	 $(".con:nth-child(8) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][7]['day']);
       	 $(".con:nth-child(9) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][8]['day']);
       	 $(".con:nth-child(10) span:nth-child(1)").contents().eq(0).replaceWith(data['result_set']['forcast'][9]['day']);*/
       	 
       }
	}
   
});