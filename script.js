let names = ["Alex", "John", "Constantine", "Tyler", "Smith", "Smith"];
let colors = ["red", "green", "blue", "black", "yellow", "red"];

//1
for (let i = 0; i < names.length; i++) {
    let p = document.createElement("p");
    p.id = "name" + i; 
    p.textContent = names[i];

    // 2
    p.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(p);
}