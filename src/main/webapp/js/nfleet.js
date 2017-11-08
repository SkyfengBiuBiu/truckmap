

function runJson(){
	console.log("Import start");
	var xmlhttp = new XMLHttpRequest();
	var url = "./city.json";
	
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myArr = JSON.parse(this.responseText);
	        importNfleetJson(myArr);
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
}

function importNfleetJson(json){
	ghRequest=timo;
	console.log("Import finished");
	console.log(json.vehicles[0].start_address.lat);
	ghRequest.route.set(json.vehicles[0].start_address.lat + "，"+json.vehicles[0].start_address.lon,0,true);
	ghRequest.route.set(json.services[0].address.lat + "，"+json.services[0].address.lon,1,true);
	ghRequest.route.set(json.services[1].address.lat + "，"+json.services[1].address.lon,2,true);
	//resolveCoords(allStr);
	console.log(ghRequest);
	 main2.redraw();
}

