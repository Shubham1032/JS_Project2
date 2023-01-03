const arr=[];
const dattaArray=[];
document.getElementById("addthecard").addEventListener("click",function(){
 let  pop_up_first=  document.getElementById("pop_up_first").style.visibility="visible";
 let MainContainer=document.getElementById("main_container").style.filter = "blur(8px)";

})
document.getElementById("addTrip").addEventListener("click",function(){
    let TripName=document.getElementById("tripName").value;
    
    let tempObj={
          id: Date.now(),
          taskName:TripName
    }
    arr.push(tempObj);
    forCards()
 let MainContainer=document.getElementById("main_container").style.filter = "blur(0px)";

})


function forCards(){
    let mainChild=document.createElement('div');
    mainChild.setAttribute('class','child')
    let Mainparent=document.getElementById("parent");
    Mainparent.appendChild(mainChild);
    let headingText=document.createElement('h3');
    headingText.style.textAlign="center";
    mainChild.appendChild(headingText);
    headingText.innerText=arr[arr.length-1].taskName;
    let hr=document.createElement('hr');
    mainChild.appendChild(hr);
    //  for adding task to do
 let unorderlist=document.createElement("ul");
 unorderlist.setAttribute("id","parent_for_lists")
 mainChild.appendChild(unorderlist)





    //  icon for delete trip
     let iconFordeleteTrip=document.createElement('i');
     iconFordeleteTrip.setAttribute('class','fa-solid fa-trash')
     iconFordeleteTrip.setAttribute('id','deletetrip')
      mainChild.appendChild(iconFordeleteTrip);
      // icon for add task to do on trip
    let iconforAddTask=document.createElement('i');
    iconforAddTask.setAttribute('class','fa-solid fa-pen-to-square')
    iconforAddTask.setAttribute('id','addtodo')

    mainChild.appendChild(iconforAddTask);




  // for closing add trip popup -1  \\\
    iconFordeleteTrip.addEventListener('click',function(){
        mainChild.remove();
    })

    // for oping popup second  (for adding task list)  \\\
    iconforAddTask.addEventListener('click',function(){
        document.getElementById("pop_up_second").style.visibility="visible";
  let MainContainer=document.getElementById("main_container").style.filter = "blur(8px)";

    })
    
document.getElementById("addTask").addEventListener("click",tostoreToDoList);


    // for closing add task popup -2 \\\
    document.getElementById("close_Popup_second").addEventListener("click",function(){
        document.getElementById("pop_up_second").style.visibility="hidden";
  let MainContainer=document.getElementById("main_container").style.filter = "blur(0px)";

    })


    pop_up_first.style.visibility="hidden";
}



document.getElementById("close_Popup_first").addEventListener("click", function (){
    pop_up_first.style.visibility="hidden";
    // let MainContainer=document.getElementById("main_container").style.filter = "blur(0px)";

})


function tostoreToDoList(){
  let taskName=document.getElementById("taskName").value
  let tempObj2={
    id: Date.now(),
    TTaskName: taskName
  }
  dattaArray.push(tempObj2)
console.log(tempObj2);
console.log(dattaArray);
  document.getElementById("pop_up_second").style.visibility="hidden"
  
  console.log(dattaArray[dattaArray.length-1].TTaskName)

  createDynamicList()
    let MainContainer=document.getElementById("main_container").style.filter = "blur(0px)";

}
function createDynamicList(){
  let listno1=document.createElement("li");
  listno1.setAttribute("id","Lists");
  listno1.innerText=(dattaArray[dattaArray.length-1].TTaskName)
  console.log(listno1)
let donebutton=document.createElement("button");
donebutton.innerText="Done";
donebutton.setAttribute("id","Markdone");
donebutton.style.backgroundColor="black";
donebutton.style.color="white";

listno1.appendChild(donebutton)
  document.getElementById("parent_for_lists").appendChild(listno1);
  donebutton.addEventListener("click",function(){
    donebutton.remove();
    listno1.style.textDecoration="line-through"
    listno1.style.color="red";
  })
}