import "./styles.css";
import { toggleDropDown } from "./toggleDropDown";
const dropDownButton = document.querySelector('button');
const linksContainer = document.querySelector('.link-container');

toggleDropDown();

export {dropDownButton, linksContainer}
