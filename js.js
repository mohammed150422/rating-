let rr=document.querySelectorAll("p")


let p1=document.getElementById("p1")
let p2=document.getElementById("p2")
let p3=document.getElementById("p3")
let p4=document.getElementById("p4")
let p5=document.getElementById("p5")
function r2(){
    p2.removeAttribute("id","gg")
}
function r1(){
    p1.removeAttribute("id","gg")
}
function r3(){
    p3.removeAttribute("id","gg")
}
function r4(){
    p4.removeAttribute("id","gg")
}
function r5(){
    p5.removeAttribute("id","gg")
}
p1.onclick=function(){  
    r2()
    r3()
    r4()
    r5() 
p1.setAttribute("id","gg");
please.innerHTML="You selected 1 out of 5"
}

p2.onclick=function(){
    r1()
    r3()
    r4()
    r5() 
    p2.setAttribute("id","gg")
    please.innerHTML="You selected 2 out of 5"
}
p3.onclick=function(){
    r1()
    r2()
    r4()
    r5() 
    p3.setAttribute("id","gg")
    please.innerHTML="You selected 3 out of 5"
}
p4.onclick=function(){
    r1()
    r3()
    r2()
    r5() 
    p4.setAttribute("id","gg")
    please.innerHTML="You selected 4 out of 5"
}
p5.onclick=function(){
    r1()
    r3()
    r4()
    r2() 
    p5.setAttribute("id","gg")
    please.innerHTML="You selected 5 out of 5"
}
let mainsection2=document.getElementById("main-section2")
let please=document.getElementById("please");
let gg=document.getElementById("gg");
let submit=document.getElementById("submit");
let back=document.getElementById("back")
submit.onclick=function(){
    mainsection2.style="z-index:5"
}
back.onclick=function(){
    mainsection2.style="z-index:0"
}