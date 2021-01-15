const updateBtns = document.getElementsByClassName("update-cart");

for(var i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener("click",function(){
        var productId = this.dataset.product
        var action = this.dataset.action 
        console.log("WELCOME USER ",user)

        if(user=="AnonymousUser"){
            console.log("Login first ")
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log("sending data");
    var url='/update_item/'
    fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'productId':productId,'action':action})
    }).then(response=>{
        return response.json()
    })
    .then(data =>{
        return response.json()
    })
}
