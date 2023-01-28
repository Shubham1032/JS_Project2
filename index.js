const arr=[];
const dattaArray=[];
let arrayforcards=[];
// FIRST POP-UP
document.getElementById("addthecard").addEventListener("click",function(){
 let  pop_up_first=  document.getElementById("pop_up_first").style.visibility="visible";
 let MainContainer=document.getElementById("main_container").style.filter = "blur(8px)";

})
// FOR ADDING CARD BY ADD BUTTON OF POPUP-1
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
var UnOrDerLisT;
var UniqueIDforlist;
function forCards(){
  let uniqueIdforcards=Date.now();
  UniqueIDforlist=uniqueIdforcards;
  console.log(uniqueIdforcards)
    let mainChild=document.createElement('div');
    mainChild.setAttribute('class','child')
    mainChild.setAttribute('id',`${uniqueIdforcards}`)
  console.log(mainChild.id)

    let Mainparent=document.getElementById("parent");
    Mainparent.appendChild(mainChild);
    arrayforcards.push(mainChild);
    let headingText=document.createElement('h3');
    headingText.setAttribute("id","headingOfTrip")
    headingText.style.textAlign="center";
    headingText.style.cursor="pointer"
    mainChild.appendChild(headingText);
    headingText.innerText=arr[arr.length-1].taskName;
    let hr=document.createElement('hr');
    mainChild.appendChild(hr);


    // 
    headingText.addEventListener("click",handelTitleClick)





    //  for adding task to do
    let unorderlist=document.createElement("ul");
    unorderlist.setAttribute('id',`${uniqueIdforcards}`)
    UnOrDerLisT=unorderlist.id;
    unorderlist.setAttribute("class","parent_for_lists")
    mainChild.appendChild(unorderlist)
    
    
    //  icon for delete trip
    let iconFordeleteTrip=document.createElement('i');
    iconFordeleteTrip.setAttribute('class','fa-solid fa-trash')
    iconFordeleteTrip.setAttribute('id','deletetrip')
    mainChild.appendChild(iconFordeleteTrip);
      // icon for add task to do on trip
    let iconforAddTask=document.createElement('i');
    iconforAddTask.setAttribute('class','fa-solid fa-pen-to-square')
    iconforAddTask.setAttribute('id',`${uniqueIdforcards}`)
    
    mainChild.appendChild(iconforAddTask);
    
    
    
    
    // for deleting add trip card -1  \\\
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
    let MainContainer=document.getElementById("main_container").style.filter = "blur(0px)";
    



  })
  
  //
  function handelTitleClick(event){
  console.log("working")
  document.getElementById("back").style.visibility="visible";
  // document.getElementsByTagName("span").style.visibility="visible"
  console.log(event.target.parentElement)
  let currntID=event.target.parentElement.id;
  for(let i=0;i<arrayforcards.length;i++){
    if(currntID==arrayforcards[i].id){
      continue
    }else{
      arrayforcards[i].style.display="none"
    }
  }
  document.getElementById("NavBar").style.visibility="hidden"
  }
 

  //  FOR BACK BUTTON  \\\
  document.getElementById("back").addEventListener("click",function(){

    for(let i=0;i<arrayforcards.length;i++){
      
        arrayforcards[i].style.display="inline-block"
    }
    // document.getElementsByTagName("span").style.visibility="hidden"
    document.getElementById("back").style.visibility="hidden"
  document.getElementById("NavBar").style.visibility="visible"

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
  listno1.setAttribute("id",`${UniqueIDforlist}`);
  listno1.innerText=(dattaArray[dattaArray.length-1].TTaskName)
  // listno1.id=listno1.parentElement.id;
  // console.log(listno1.id+"ss"+listno1.parentElement.id)
  //  console.log(UnOrDerLisT)
//   console.log(listno1.id)
//   console.log(document.getElementsByClassName("parent_for_lists").id)
  let donebutton=document.createElement("button");
  donebutton.innerText="Done";
  donebutton.setAttribute("id","Markdone");
  donebutton.style.backgroundColor="black";
  donebutton.style.color="white";

listno1.appendChild(donebutton)

   if(UniqueIDforlist==listno1.id){
    document.getElementsByClassName("parent_for_lists")[document.getElementsByClassName("parent_for_lists").id=listno1.id].appendChild(listno1)
   }

    document.getElementsByClassName("parent_for_lists")[document.getElementsByClassName("parent_for_lists").length-1].appendChild(listno1);
  donebutton.addEventListener("click",function(){
    donebutton.remove();
    listno1.style.textDecoration="line-through"
    listno1.style.color="red";
  })
}