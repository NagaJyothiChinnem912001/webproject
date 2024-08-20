function marks1(){
	no=document.getElementById("num");
	n1=document.getElementById("number");
	eng=document.getElementById("eng");
	maths=document.getElementById("maths");
	phy=document.getElementById("phy");
	chem=document.getElementById("chem");
	soc=document.getElementById("soc");
	res=document.getElementById("res");
	result=eng+maths+phy+chem+soc
	if(n1==no){
		res.value=result;
	}
	else{
		res.value=0;
	}
	
}