window.addEventListener("load", () => {
    const screen = document.querySelector(".screenandcopy input");
    const copy = document.querySelector(".screenandcopy span");
    const range = document.querySelector("#range_");
    const lengthNum = document.querySelector(".length");
    const Uppercasetoggle = document.querySelectorAll(".toggle");
    const SubmitBtn = document.querySelector(".btn");
    let i = 0;
    let generatedPassword = "";
    var length = 8;
    let uppercase = false, lowercase = false, number = false, symbols = false;


    range.addEventListener("change", function () {
        length = parseInt(range.value, 10);
        lengthNum.innerHTML = length;
    });


    Uppercasetoggle.forEach(item => {
        item.addEventListener("click", function (e) {
            if (e.target.classList.contains("toggle") || e.target.classList.contains("innercircle")) {
                if (!item.firstElementChild.classList.contains("on")) {
                    item.firstElementChild.classList.add("on");
                    item.classList.add("btn-glow");
                    if (item.id === "upper") {
                        uppercase = true;
                    }
                    else if (item.id === "lower") {
                        lowercase = true;
                    }
                    else if (item.id === "num") {
                        number = true;
                    }
                    else if (item.id === "symbols") {
                        symbols = true;
                    }
                }
                else {
                    item.firstElementChild.classList.remove("on");
                    item.classList.remove("btn-glow");
                    if (item.id === "upper") {
                        uppercase = false;
                    }
                    else if (item.id === "lower") {
                        lowercase = false;
                    }
                    else if (item.id === "num") {
                        number = false;
                    }
                    else if (item.id === "symbols") {
                        symbols = false;
                    }
                }
            }
        })
    })

    function resetvalues() {
        generatedPassword = "";
        i = 0;
    }

    SubmitBtn.addEventListener("click", function () {

        let PasswordData = `abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*.,:;"'{]}()\\<>?/|+=-_`;
        while (i < length) {

            let randomCharacters = PasswordData[Math.floor(Math.random() * PasswordData.length)]
            if (uppercase === false && lowercase === false && number === false && symbols === false) {
                screen.value = `Opps?`;
                break;
            }
            if (/[A-Z]/.test(randomCharacters) && uppercase === true) {
                generatedPassword += randomCharacters;
                i++;
            }
            else if (/[a-z]/.test(randomCharacters) && lowercase === true) {
                generatedPassword += randomCharacters;
                i++;
            }
            else if (/[0-9]/.test(randomCharacters) && number === true) {
                generatedPassword += randomCharacters;
                i++;
            }
            else if (/[~!@#$%^&*\\.,:;"\\'\{\]\}\(\)<>?/|+=\\-\\_\`]/.test(randomCharacters) && symbols === true) {
                generatedPassword += randomCharacters;
                i++;
            }
            screen.value = generatedPassword;
        }
        resetvalues();

    })


    copy.addEventListener("click", () => {
        screen.select();
        document.execCommand("copy");
        setTimeout(() => {
            alert("Your password is copyed on clipboard: " + screen.value);
        }, 0);
    })


})