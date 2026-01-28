


function additem(event){
    let newitem=document.querySelector(".text").value;
    event.preventDefault();
    let newli=document.createElement("li");
    let newbut=document.createElement("button");
    newbut.classList="delete button";
    let newimg=document.createElement("img");
    newimg.setAttribute("src","./delete.jpeg");
    newimg.setAttribute("height","20px");
    newimg.setAttribute("width","20px");
    newli.textContent=newitem;
    newbut.appendChild(newimg);
    newli.appendChild(newbut);
    document.querySelector(".list-items").appendChild(newli);
}
document.querySelector(".form").addEventListener("submit",additem);


function Delete(event){
    if(event.target.parentElement.classList.contains("delete")){
        event.target.parentElement.parentElement.remove();
    }
}
document.querySelector(".list-items").addEventListener("click",Delete);


function clearitems(){
    while(document.querySelector(".list-items").hasChildNodes()){
        document.querySelector(".list-items").firstChild.remove();
    }
}
document.querySelector(".clear").addEventListener("click",clearitems);


function filter(event){
    let intext=event.target.value.toLowerCase();
    let items=document.querySelectorAll("li");
    items.forEach(item => {
        let text=item.textContent.toLowerCase();
        if(text.indexOf(intext)==-1){
            item.style.display="none";
        }
        else{
            item.style.display="flex";
        }
    });
}    
document.querySelector(".filter").addEventListener("input",filter);