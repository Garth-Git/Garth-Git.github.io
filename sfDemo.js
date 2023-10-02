(function () {
    // create dialog elements
    const dialog = document.createElement("ui5-dialog");
    const content = document.createElement("div");
    const footer = document.createElement("footer");
    const footerBtn = document.createElement("ui5-button");
    const footerBtn2 = document.createElement("ui5-button");
    // set attributes
    dialog.setAttribute("header-text", "Popup");
    footer.setAttribute("slot", "footer");
    // content
    content.innerHTML = "<h2>Sign Up</h2><p>Sign up for our newsletter</p><form>  <label for='fname'>Email Address:</label><br><input type='text' id='email' name='email' value='john.doe@demo.com'><br><br><label for='animal'>Favourite animal:</label><br><select id='animal' name='animal'><option value='rhino'>Rhino</option><option value='elephant'>Elephant</option><option value='lion'>Lion</option><option value='giraffe'>Griaffe</option></select><br><br></form>";
    content.style.padding = "1rem";
    // footer btn
    footerBtn.onclick = () => alert('Thank you!');
    footerBtn.innerHTML = "Submit";
    footerBtn2.onclick = () => dialog.close();
    footerBtn2.innerHTML = "Close";
    // append elements
    dialog.appendChild(content);
    dialog.appendChild(footer);
    footer.appendChild(footerBtn);
    footer.appendChild(footerBtn2);
    document.body.appendChild(dialog);
    // open dialog
    dialog.show();
})();
