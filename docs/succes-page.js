function succesPage() {
  const content = document.querySelector(".content");

  const image = document.createElement("img");
  image.src = "assets/images/icon-success.svg";
  image.alt = "icon-success";
  content.classList.add("content");
  content.appendChild(image);

  const h1 = document.createElement("h1");
  h1.textContent = "Thanks for subscribing!";
  content.appendChild(h1);

  const p = document.createElement("p");
  p.textContent =
    "A confirmation email has been sent to. Please open it and click the button inside to confirm your subscription.";
  content.appendChild(p);

  const button = document.createElement("button");
  button.textContent = "Dismiss message";
  button.id = "button";
  content.appendChild(button);
}

succesPage();
