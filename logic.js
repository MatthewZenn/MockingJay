const realButton = document.getElementById("image");
const fakeButton = document.getElementById("picture");
const image = document.getElementById("photo");
const name1 = document.getElementById("name-input");
const user1 = document.getElementById("user-input");
const box = document.getElementById("checkbox");

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
    document.getElementById("name").innerHTML = name1.value;
    document.getElementById("username").innerHTML = ' @'+user1.value
}

function printresult() {
    html2canvas(document.querySelector("#result")).then(canvas => {
        document.body.appendChild(canvas).style.visibility = "hidden";
        Canvas2Image.saveAsPNG(canvas);
    });
}

function verify() {
    if (box.checked == true) {
        document.getElementById("badge").style.display = "hidden";
    }
    else {
        document.getElementById("badge").style.display = "block";
    }
}