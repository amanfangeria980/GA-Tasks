
const addNewBox=()=>{
    const inputBox=document.getElementById("content");
    const title=inputBox.value;

    const newBox=document.createElement("div");
    const newLink=document.createElement("a");
    newBox.className="box";
    newLink.textContent=title;
    const link=prompt("Enter the URL")
    newLink.href=link;
    newLink.target="_blank"
    newBox.appendChild(newLink);

    const section2=document.querySelector(".section2")
    section2.appendChild(newBox)

    inputBox.value="";
    
}