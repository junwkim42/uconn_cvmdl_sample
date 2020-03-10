let col = document.getElementById("collapsible");

col.addEventListener("click", function(){
    let content = document.getElementById("morenewsitem");
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        col.innerHTML = "Show More";
    }
    else {
        content.style.maxHeight = content.scrollHeight + "px";
        col.innerHTML = "Show Less";
    }
});