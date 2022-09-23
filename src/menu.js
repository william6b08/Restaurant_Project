import beefImg from './beef-wellington.jpg';
import filetImg from './filet-mignon.jpg';
import salmonImg from './salmon-coulibiac.jpg';
import shepherdsPieImg from './shepherds-pie.jpg';

const generateMenu = function(){

  const contentdiv = document.getElementById('main-content')

  if(contentdiv.firstChild){
    contentdiv.removeChild(contentdiv.firstChild)
  }

  function MenuItem(dishName, description, img){
    return {dishName, description, img};
  }
  const filetMignon = MenuItem(
    "Filet Milgnon", 
    "Filet mignon is a tender and expensive cut of beef. It is considered the king of steaks because of its melt-in-your-mouth texture. ",
    filetImg
    )

  const beefwellington = MenuItem(
    "Beef Wellington",
    "Beef Wellington is a dish consisting of a whole filet of beef that is coated with a pâté and duxelles, a combination of minced mushrooms, herbs, and shallots.",
    beefImg
    )

  const salmon = MenuItem(
    'salmon-coulibiac',
    "It's usually filled with salmon or sturgeon, rice or buckwheat, hard-boiled eggs, mushrooms, onions, and dill. The pie is baked in a pastry shell, usually of brioche or puff pastry. The dish was so popular in Russia in the early part of the 20th century that Auguste Escoffier, the famed French chef, brought it to France and included recipes for it in his masterwork, The Complete Guide to the Art of Modern Cookery.",
    salmonImg
    )
  

  const shepherdsPie = MenuItem(
    "Shepherd's Pie",
    "Traditional Irish Shepherd's Pie would actually call for ground lamb.  The difference between Shepherd’s Pie and Cottage Pie is the meat.  Cottage Pie uses ground beef, while Shepherd's Pie uses ground lamb.",
    shepherdsPieImg
    )
  const menuList = [filetMignon, beefwellington, salmon, shepherdsPie]

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
    img.src = menuItem.img

    div.appendChild(img);
    div.appendChild(nameHeader);
    div.appendChild(descriptionPara);

    mainDiv.appendChild(div);
  }
  contentdiv.appendChild(mainDiv);
}

export default generateMenu;