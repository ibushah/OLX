
// ******************VARIABLES****************

let title=document.getElementById("titleIn");
let type=document.getElementById("typeIn");
let desc=document.getElementById("textareaIn");
let price=document.getElementById("priceIn");
let address=document.getElementById("addressIn");
let submit=document.getElementById("submit");





// ************************Events*******************

submit.addEventListener("click",submitFunc);



// **********************FUNCTIONS********************


function submitFunc()
{
    let obj={
        title:title.value,
        type:type.value,
        desc:desc.value,
        price:price.value,
        address:address.value

    }
    console.log(obj)
}

function select(a)
{
    console.log(a)
}