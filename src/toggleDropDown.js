import { dropDownButton, linksContainer } from ".";
export {toggleDropDown};

function toggleDropDown () {
dropDownButton.addEventListener('click', ()=> {
        linksContainer.classList.toggle("open");
})
}