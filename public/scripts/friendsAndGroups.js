
function getQueryparam(param){
    const urlparams = new URLSearchParams(window.location.search);
    return urlparams.get(param)
}

function renderPage(buttonEl) {
    window.location.href=`http://127.0.0.1:5500/views/chatPage.html?forg=${buttonEl.textContent}&user=${getQueryparam("user")}`
}

document.getElementById("yuvraj").addEventListener("click", function (){
    renderPage(this)
})

document.getElementById("rr").addEventListener("click", function (){
    renderPage(this)
})