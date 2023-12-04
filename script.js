
try{
    const cal1 = document.getElementById('calculate');

cal1.addEventListener('click', function(){
    
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);
    const finalWeight = weight ;
    const finalHeight = height ;

    let BMI = (finalWeight / Math.pow(finalHeight, 2));

    document.getElementById("output").innerHTML = " Your BMI is " + BMI.toFixed(2);

    
})

}
catch(err){
  console.log(err);
}
finally{
    console.log("All done");
}


