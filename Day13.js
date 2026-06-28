// CRUD Operation in DOM

// const newElement = document.createElement("h2");
// newElement.textContent = "JavaScript Dom";
// newElement.id = "Second";

// // console.log(newElement);


// // Select Element -->
// const element = document.getElementById("First");
// element.after(newElement);

// // element.before(newElement);

// const newElement2 = document.createElement("h3");
// newElement2.textContent = "Next Topic is Events";
// newElement2.id = "Third";
// // newElement2.className = "topic";
// // newElement2.className += " next";
// newElement2.classList.add("topic");
// newElement2.classList.add("next");
// // newElement2.classList.remove("next");

// // Styling 
// newElement2.style.backgroundColor = "brown";
// newElement2.style.fontSize = "30px";
// // newElement2.setAttribute("Hello","ji");

// element.before(newElement2);
// // console.log(newElement2.getAttribute("hello"))


// const list = document.createElement("li");
// list.textContent = "Milk";

// const list2 = document.createElement("li");
// list2.textContent = "Cake";

// const list3 = document.createElement("li");
// list3.textContent = "Butter";

// const list4 = document.createElement("li");
// list4.textContent = "Panner";

// const unorder = document.getElementById("listing");
// unorder.append(list, list2);
// unorder.prepend(list3);
// // list.before(list4);
// unorder.children[1].after(list4);

// Real-World Problem -->
const arr = ["Milk", "Halwa", "Paneer", "tofu"];

const unorder = document.getElementById("listing");
const fragment = document.createDocumentFragment();
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorder.append(fragment);

// Remove Element -->
const s1 = document.getElementById("First");
s1.remove();


const month = document.getElementById("ten");
// console.log(month.childNodes);  


const lister = document.createElement("li");
lister.textContent = "<h2>Help</h2";
// lister.innerHTML = "<h2>COntact</h2>";
month.prepend(lister);
 

// month.insertAdjacentElement("beforeend",lister);