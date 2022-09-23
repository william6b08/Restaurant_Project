import beef from './beef-wellington.jpg';
import filet from './filet-mignon.jpg';

const generateMenu = function(){
  const filetMignon = {
    dishName: "Filet Milgnon", 
    description: "Filet mignon is a tender and expensive cut of beef. It is considered the king of steaks because of its melt-in-your-mouth texture. ",
    imgSource: filet
    }
  const beefwellington = {
    dishName: "Beef Wellington",
    description: "Beef Wellington is a dish consisting of a whole filet of beef that is coated with a pâté and duxelles, a combination of minced mushrooms, herbs, and shallots.",
    imgSource: beef
  }
  const menuList = [filetMignon, beefwellington]

  const mainDiv = document.createElement('div');
  mainDiv.classList.add('Menu-container');

  for (const menuItem of menuList){
    const div = document.createElement('div');
    div.classList.add('menuItem');
    const nameHeader = document.createElement('h1');
    nameHeader.textContent = menuItem.dishName;
    const descriptionPara = document.createElement('p')
    descriptionPara.textContent = menuItem.description;
    const img = new Image();
    img.src = menuItem.imgSource;

    div.appendChild(img);
    div.appendChild(nameHeader);
    div.appendChild(descriptionPara);

    mainDiv.appendChild(div);
  }
  const contentdiv = document.getElementById('main-content')
  contentdiv.appendChild(mainDiv)
}

export default generateMenu;