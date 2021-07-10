const realButton = document.getElementById("image");
const fakeButton = document.getElementById("picture");
const image = document.getElementById("photo");
const name1 = document.getElementById("name-input");
const user1 = document.getElementById("user-input");

fakeButton.addEventListener("click", function() {
    realButton.click()
});

realButton.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            image.setAttribute('src', this.result);
        });
        reader.readAsDataURL(file);
    }
});

function update() {
var now = new Date();
var Month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var text = document.getElementById("tweet").value;
    var textString = text.toString()
    document.getElementById("name").innerHTML = name1.value;
    document.getElementById("username").innerHTML = ' @'+user1.value + " \u0387 "+Month[now.getMonth()]+" "+now.getDate();
    var syntax = textString.split(" ");
    for (let i = 0; i < syntax.length; i++) {
        console.log(syntax[i].startsWith("#"));
    }
}

function printresult() {
    html2canvas(document.querySelector("#result"), {
        allowTaint: true,
    }).then(canvas => {
        document.body.appendChild(canvas).style.visibility = "hidden";
        Canvas2Image.saveAsPNG(canvas);
    });
}

function verify() {
    var box = document.getElementById("checkbox");
    if (!box.checked) {
        document.getElementById("badge").style.display = "none";
    }
    else {
        document.getElementById("badge").style.display = "block";
    }
}