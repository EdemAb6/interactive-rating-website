list_li = document.querySelectorAll("li");
div = document.getElementById("div");
main = document.getElementById("main")
p = document.getElementById("result");
btn = document.getElementById("btn");
div.style.display = "none";
selectedRating = null;
// selecting a rating
console.log(list_li);
for(let i=0;i<list_li.length;i++){
    list_li[i].addEventListener("click",() =>{
        list_li[i].classList.toggle('active-style');
        selectedRating = list_li[i].textContent;
        remove_restClasses(i);
    })
}
function remove_restClasses(i){
    for(
        let j = 0;j<list_li.length;j++){
            if (i!=j){
                list_li[j].classList.remove('active-style');
            }

    }    
}
//showing the thank you card
 btn.addEventListener("click",() =>{
    if(selectedRating!= null){
   p.innerHTML = `You Selected ${selectedRating} out of 5`;
    div.style.display = "flex";
    main.style.display = "none";
    }
    else{
        alert("Choose a rating!");
    }
  
    })



