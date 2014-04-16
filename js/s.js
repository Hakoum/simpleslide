/* 
* project s8non 3ashan el slides 
* est5moh bra7tk ya prince :D    
* author :  Ahmed Saleh 
* Twitter : @mrxloka
* w lw fe errors 2oly eshta ^_^
* matnsash tstd3y el jquery eshta 
*/
$(document).ready(function () {
    //el bedaia
	var x = 0;
	//kol el sections fe array
	var sections = document.getElementsByTagName('section');
	// el 3adad bta3 el sections de 
	var l = sections.length;
	//zawed wa7ed le x
	x++;
	//e3red rakam x
	show(x);
    //shof el user 7ydos etgah ymeen wla shemal 
	$(document).keyup(function (e) {				
        //lw ymeen 
		if (e.keyCode === 39) {
			//ro7 le section el taly
			if (x === 0 ) {				
				x++;
				show(x);
			}else if (x >= l) {
				hide(x);
				x = 0;
				x++;
				show(x);
			}else {
				hide(x);
				x++;
				show(x);		
			}
		//lw shemal
		}else if (e.keyCode === 37) {
            //ro7 le section elly 2ablo
				if (x === 0 || x === 1) {	
					hide(x);				
					x = l;
					show(x);				
				}else {
					hide(x);
					x--;
					show(x);				
				}
			
		}				
				
	
		
	});	
	
	
});
//de bt3rd 
function show(x) {
$("#"+x).fadeIn("slow",function () {
			$("#"+x+" h1").fadeIn("slow",function () {
				$("#"+x+" p").fadeIn("slow");
			});
	});
}
//de bt5fy 
function hide(x) {
	$("#"+x).fadeOut("slow",function () {
					$("#"+x+" h1").fadeOut("slow",function () {
						$("#"+x+" p").fadeOut("slow");
				});
			});
}
//w eshta 3la keda :D
