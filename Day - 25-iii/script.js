async function thirukural(num){
    try {
        let data_from_api=await fetch("https://api-thirukkural.vercel.app/api?num="+`${num}`);
        let finaldata=await data_from_api.json();


        document.getElementById("number").innerText=finaldata.number;
        document.getElementById("section-tamil").innerText=finaldata.sect_tam;
        document.getElementById("chapgrp-tamil").innerText=finaldata.chapgrp_tam;
        document.getElementById("chap-tamil").innerText=finaldata.chap_tam;
        
        document.getElementById("section-Eng").innerText=finaldata.sect_eng;
        document.getElementById("chapgrp-Eng").innerText=finaldata.chapgrp_eng;
        document.getElementById("chap-Eng").innerText=finaldata.chap_eng;

        document.getElementById("line1").innerText=finaldata.line1;
        document.getElementById("line2").innerText=finaldata.line2;
        document.getElementById("tamil-exp").innerText=finaldata.tam_exp;
        document.getElementById("eng").innerText=finaldata.eng;
        document.getElementById("english-exp").innerText=finaldata.eng_exp;
        // console.log(finaldata);
       

    }catch (error) {
        console.log(error);
 
}
}
thirukural('1')

let button=document.getElementById("button");
button.addEventListener("click",function(){
    var number=document.getElementById("inputdata").value; 
    thirukural(number);
})