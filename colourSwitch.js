let btn;

document.getElementById("btnlist").addEventListener("click", (e)=>{
    btn = e.target.id;
    // check the button identity and then call its necessary function
    if (e.target.id === 'btn1') {
        genColor(...[
            "Red", 
            "pt-64 text-center text-3xl text-red-500", 
            "bg-red-200"
        ]);
    }
    else if (e.target.id === 'btn2') {
        genColor(...[
            "Blue", 
            "pt-64 text-center text-3xl text-blue-500", 
            "bg-blue-200"
        ]);
    } 
    else if (e.target.id === 'btn3') {
        genColor(...[
            "Green", 
            "pt-64 text-center text-3xl text-green-500", 
            "bg-green-200"
        ]);
    } 
    else if (e.target.id === 'btn4') {
        genColor(...[
            "Yellow", 
            "pt-64 text-center text-3xl text-yellow-500", 
            "bg-yellow-200"
        ]);
    }
});

function genColor (color, textClass, bodyClass) {
    document.getElementById("colorname").textContent = color;
    document.getElementById("colorname").className = textClass;
    document.getElementById("body").className = bodyClass;
}