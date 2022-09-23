import generateMenu from "./menu";
import generateAbout from "./about";

const menuBtn = document.getElementById('Menu');
const aboutBtn = document.getElementById('About');
menuBtn.onclick = generateMenu;
aboutBtn.onclick = generateAbout;
