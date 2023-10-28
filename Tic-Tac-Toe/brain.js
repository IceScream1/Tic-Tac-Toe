
let i = "13";
let mainWindow = "/main.html";

function blockClick(){
    console.log(window.location.pathname);

    if(window.location.pathname == "/game1.html"){
        window.location = mainWindow;
        console.log(i)
        i = "0001";
    }else{
        window.location = "/game1.html"
        console.log(i)
        i = "fffffffffffffffffffffffffffffffff";
    }
}

