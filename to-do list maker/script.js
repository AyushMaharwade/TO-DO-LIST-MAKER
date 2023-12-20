const ipt = document.getElementById("input");
const list = document.getElementById("container");
const btn = document.getElementById("btn");

document.addEventListener("DOMContentLoaded", function(){
   
    btn.onclick = createtask;
   
    ipt.addEventListener("keydown",function(event){
        if(event.key==="Enter"){
            createtask();
        }
    })
   
    function createtask(){
        if(ipt.value===''){
            alert("Enter Task!");
        }
        else{
            let task = document.createElement("li");
            task.innerHTML = ipt.value;
            list.appendChild(task);
            let span = document.createElement("button");
            span.innerHTML = "x";
            span.onclick = () =>{
                list.removeChild(task);
                saveinfo();
            }
            task.appendChild(span);

           task.onclick = () =>{
            task.classList.toggle('check');
           }
           
           
        }
        ipt.value='';
        saveinfo();
    }

    function saveinfo(){
        localStorage.setItem("data",list.innerHTML);
    }

    function showinfo(){
        list.innerHTML = localStorage.getItem("data");
    }

    showinfo();
})