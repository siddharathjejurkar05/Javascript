function handleClick(){
    const element = document.getElementById("first");
    element.textContent = "Events In JavaScript.."
}

const element = document.getElementById("first");
element.onclick = function handleClick(){
     element.textContent = "Events In JavaScript..";
     element.style.backgroundColor = "pink";
}


element.addEventListener('mouseenter',()=>{
    element.textContent = "Events In JavaScript..";
})

element.addEventListener('mouseleave',()=>{
    element.textContent = "Events In JavaScript..";
})

element.addEventListener('click',()=>{
    element.textContent = "Events In JavaScript..";
})

element.addEventListener('click',()=>{
    element.style.backgroundColor = "brown";
})


const child1 = document.getElementById("child1");
child1.addEventListener('click',()=>{
    child1.textContent = "I am click";
})

const parent = document.getElementById("parent")
// console.log(parent.children); 
 
function handleClick(e){
     e.target.textContent = "I am Clicked";
}

parent.addEventListener('click',handleClick);
parent.removeEventListener('click',handleClick);
// parent.addEventListener('click',(handelClick)=>{
//     //   console.log(e.target);
//     // e.target.textContent = "I am Clicked";
// })


for(let child of parent.children){
    child.addEventListener('click',(e)=>{
        child.textContent = "I am Clicked"
    })
} 

// Bubbling Process -->

const grand = document.getElementById("grandparent");
grand.addEventListener('click',(e)=>{
    console.log(e.target); 
    // console.log("GrandParent Is Clicked");
})

const parent = document.getElementById("parent");
parent.addEventListener('click',(e)=>{
    // console.log("Parent Is Clicked");
    //  console.log(e);
})

const child = document.getElementById("child");
child.addEventListener('click',(e)=>{
    // console.log("Child Is Clicked");
    //  console.log(e);
    //  e.stopPropagation();
})