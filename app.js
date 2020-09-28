const goal = document.querySelector("#goal");
const button = document.querySelector("button");
let myGoal = '';
let allGoals = [];

goal.addEventListener("input", () =>{
    myGoal = goal.value;
});

button.addEventListener("click", ()=>{
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerText  = myGoal;
    
    ul.appendChild(li);
    allGoals.push(myGoal);

    goal.value = ''
});

