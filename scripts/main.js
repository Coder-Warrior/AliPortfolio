let list = document.querySelector('.list');
let ul = document.querySelector('header ul');
let closeBtn = document.querySelector('ul p');
let servicesContent = document.querySelector('.services .content');
let body = document.querySelector("body");
let title = document.querySelector(".services .title");
let featuresContent = document.querySelector('.features .content');
let featuresTitle = document.querySelector('.features .title');
let footerContent = document.querySelector("footer .content");
let footerTitle = document.querySelector('footer .title');

for(let i = 0; i < ul.children.length; i++) {
    ul.children[i].onclick = () => {
        ul.style.right = "-219px";
    }
}

list.onclick = () => {
    ul.style.right = "0";
}

let header = document.getElementsByTagName("header")[0];

window.onscroll = () => {
    console.log();
    if (scrollY >= 169) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    } else {
        header.style.backgroundColor = "transparent";
    }

    if (title.getBoundingClientRect().top >= 0 && title.getBoundingClientRect().bottom + 50 <= window.innerHeight) {
        servicesContent.style.display = "grid";
    }

    if (featuresTitle.getBoundingClientRect().top >= 0 && featuresTitle.getBoundingClientRect().bottom + 36 <= window.innerHeight) {
        featuresContent.style.display = "block";
    }

    if (footerTitle.getBoundingClientRect().top + 100 <= window.innerHeight) {
        footerContent.style.display = "block";

    }

}