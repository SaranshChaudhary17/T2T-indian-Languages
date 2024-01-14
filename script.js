const dropdowns = document.querySelectorAll(".dropdown-container"),
    inputLanguageDropdown = document.querySelector("#input-language"),
    outputLanguageDropdown = document.querySelector("#output-language");

function populateDropdown(dropdown, options) {
    dropdown.querySelector("ul").innerHTML = "";
    options.forEach((option) => {
        const li = document.createElement("li");
        const title = option.name + " (" + option.native + ")";
        li.innerHTML = title;
        li.dataset.value = option.code;
        li.classList.add("option");
        dropdown.querySelector("ul").appendChild(li);
    });
}

populateDropdown(inputLanguageDropdown, languages);
populateDropdown(outputLanguageDropdown, languages);

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        dropdown.classList.toggle("active");
    });

    dropdown.querySelectorAll(".option").forEach((item) => {
        item.addEventListener("click", (e) => {
            
            dropdown.querySelectorAll(".option").forEach((item) => {
                item.classList.remove("active");
            });
            item.classList.add("active");
            const selected = dropdown.querySelector(".selected");
            selected.innerHTML = item.innerHTML;
            selected.dataset.value = item.dataset.value;
            translate();
        });
    });
});
document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("active");
        }
    });
});

const swapBtn = document.querySelector(".swap-position"),
    inputLanguage = inputLanguageDropdown.querySelector(".selected"),
    outputLanguage = outputLanguageDropdown.querySelector(".selected"),
    inputTextElem = document.querySelector("#input-text"),
    outputTextElem = document.querySelector("#output-text");

swapBtn.addEventListener("click", (e) => {
    const temp = inputLanguage.innerHTML;
    inputLanguage.innerHTML = outputLanguage.innerHTML;
    outputLanguage.innerHTML = temp;

    const tempValue = inputLanguage.dataset.value;
    inputLanguage.dataset.value = outputLanguage.dataset.value;
    outputLanguage.dataset.value = tempValue;

    
    const tempInputText = inputTextElem.value;
    inputTextElem.value = outputTextElem.value;
    outputTextElem.value = tempInputText;

    translate();
});

function translate() {
    const inputText = inputTextElem.value;
    const inputLanguage =
        inputLanguageDropdown.querySelector(".selected").dataset.value;
    const outputLanguage =
        outputLanguageDropdown.querySelector(".selected").dataset.value;
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${inputLanguage}&tl=${outputLanguage}&dt=t&q=${encodeURI(
        inputText
    )}`;
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            outputTextElem.value = json[0].map((item) => item[0]).join("");
        })
        .catch((error) => {
            console.log(error);
        });
}
inputTextElem.addEventListener("input", (e) => {
    if (inputTextElem.value.length > 5000) {
        inputTextElem.value = inputTextElem.value.slice(0, 5000);
    }
    translate();
});

const inputChars = document.querySelector("#input-chars");

inputTextElem.addEventListener("input", (e) => {
    inputChars.innerHTML = inputTextElem.value.length;
});

const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');


const slideshowContainer = document.querySelector(".slideshow-container");
const slideImages = [
    "images/ram.webp",
    "images/bhav.jpg",
    "images/gate.avif",
    "images/red.jpg",
];
slideImages.forEach((imagePath) => {
    const slide = document.createElement("div");
    slide.classList.add("mySlides");
    slide.style.backgroundImage = `url('${imagePath}')`;
    slideshowContainer.appendChild(slide);
});

var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000);
}
showSlides();