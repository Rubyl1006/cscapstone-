let btn = document.querySelector("#sometext");

function mouseover()
{
    btn.style.color = "green";
    btn.innerHTML = "Ruby's Research Capstone";
}

btn.onmouseover = mouseover;

function mouseout() 
{
    btn.style.color = "#65A7A7";
    btn.innerHTML = "Home Page";
}

btn.onmouseout = mouseout;

function changeButton(obj)
{
    obj.innerHTML = "fun fact";
    obj.style.color = "green";
}