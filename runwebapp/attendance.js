function percentage(){
	n1=document.getElementById("num");
	n2=document.getElementById("percen");
	no=document.getElementById("number");
	res=document.getElementById("res");
	if(n1==no){
		res.value=n2;
	}
	else{
		res.value=0
	}
	
}