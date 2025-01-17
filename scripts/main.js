
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})

function sanitizeInput(input) {
  return DOMPurify.sanitize(input);
}


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");
  createCode("sensei", "My Sensei.");
  

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/awais-afzal";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  const value = sanitizeInput(document.querySelector("input").value);
  // const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("writeups", "My medium page with my writeups. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("sensei", "My Sensei Profile.");
    createCode("clear", "Clean the terminal.");
    
    
  }
  else if(value === "writeups"){
    trueValue(value);
    createText("<a href='https://medium.com/@awaisafzal0/' target='_blank'><i class='fab fa-github white'></i> medium.com/@awaisafzal0</a>")
  }
  else if(value === "sensei"){
    trueValue(value);
    createText("<a href='https://arz101.medium.com/' target='_blank'><i class='fab fa-github white'></i> medium.com/@arz101</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, my name is Awais")
    createText("OSINT Noob , CTF Player, currenyly a junior QA automation engineer, Love to play E-Games, reading books, poetry, appreciate and observe art.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/awaisafzal1' target='_blank'><i class='fab fa-github white'></i> github.com/awaisafzal1</a>")
    createText("<a href='https://www.linkedin.com/in/awais-afzal/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/awais-afzal</a>")
    createText("<a href='https://twitter.com/Nurinath0/' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/Nurinath0</a>")
    createText("<a href='https://medium.com/@awaisafzal0/' target='_blank'><i class='fab fa-medium white'></i> medium.com/@awaisafzal0</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();