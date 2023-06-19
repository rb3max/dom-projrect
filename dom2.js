
let heart_like=document.getElementsByClassName("heart_like");
let plusbtns = document.getElementsByClassName("plus-btn");
let minusbtns = document.getElementsByClassName("minus-btn");
let Quant = document.getElementsByClassName("Quant");
let totalPrice=document.getElementById("finalPrice");
let delete_btn=document.getElementsByClassName("delete");
let item=document.getElementsByClassName("Item")
let prices=[1379,176,500]

for (let index = 0; index < heart_like.length; index++) {
    //hear-like
    heart_like[index].addEventListener('click',function(){
        if(heart_like[index].style.color==="black"){
            heart_like[index].style.color="red"
        }
        else{
            heart_like[index].style.color="black"
        }
    })
    //heart-like

    //plus and minus btn and total price
    plusbtns[index].addEventListener('click',function(){
       Quant[index].value=Number(Quant[index].value)+1
       totalPrice.value=Number(totalPrice.value)+prices[index]

    })
    minusbtns[index].addEventListener('click',function(){
        if (Quant[index].value!=="0"){
            Quant[index].value=Number(Quant[index].value)-1
            totalPrice.value=Number(totalPrice.value)-prices[index]

        }

    })
    //plus and minus btn and total price


    //delete button
    delete_btn[index].addEventListener('click',function(){
      item[index].style.display="none"
      totalPrice.value=Number(totalPrice.value)-Number(Quant[index].value)*prices[index]
    })
      
    //delete button

}