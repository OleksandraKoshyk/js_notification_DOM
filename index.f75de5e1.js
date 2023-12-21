"use strict";
const pushNotification = (posTop, posRight, title, description, type)=>{
    const message = document.createElement("div");
    const descriptionMesssage = document.createElement("p");
    message.innerHTML = `
  <h2 class = 'title'>${title}</h2>`;
    descriptionMesssage.innerText = description;
    message.append(descriptionMesssage);
    message.classList.add("notification", type);
    message.style.top = posTop + "px";
    message.style.right = posRight + "px";
    document.body.append(message);
    setTimeout(()=>{
        message.hidden = true;
    }, 2000);
};
pushNotification(10, 10, "Title of Success message", "Message example.\n Notification should contain title and description.", "success");
pushNotification(150, 10, "Title of Error message", "Message example.\n Notification should contain title and description.", "error");
pushNotification(290, 10, "Title of Warning message", "Message example.\n Notification should contain title and description.", "warning");

//# sourceMappingURL=index.f75de5e1.js.map