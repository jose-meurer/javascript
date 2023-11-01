(function() {
    // const username = "José";
    const username = "";

    const _element = document.querySelector(".top-bar p");
    if(username) {
        _element.innerHTML += `<em>${username}</em>`;
    }else {
        _element.parentElement.style.display = "none";
    }

})()