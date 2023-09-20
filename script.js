let relation = document.querySelector("h4")
let btn = document.querySelector("#add")
let check = 0

btn.addEventListener("click", function(){
    if(check == 0){
        relation.innerHTML = "Friends"
        relation.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "#dadada"
        btn.style.color = "#111"
        check = 1    
    }else{
        relation.innerHTML = "Stranger"
        relation.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "cadetblue"
        btn.style.color = "#fff"
        check = 0
    }
})
