const paragraph = document.createElement("p");
paragraph.style.color = "red"
paragraph.textContent = "hey im red!"
container.appendChild(paragraph);

const blue = document.createElement('h3');
blue.style.color = "blue";
blue.textContent = "im a blue h3"
container.appendChild(blue)

const div = document.createElement("div")
div.style.cssText = "border: black; background: pink"
container.appendChild(div)

const text = document.createElement("h1")
text.textContent = "IM a div";
div.appendChild(text);

const paragraph2 = document.createElement("p")
paragraph2.textContent = "Im also a div";
div.appendChild(paragraph2);