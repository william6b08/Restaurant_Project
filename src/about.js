
const generateAbout = function(){

  const contentdiv = document.getElementById('main-content')

  if(contentdiv.firstChild){
    contentdiv.removeChild(contentdiv.firstChild)
  }

  const div = document.createElement('div');

  const header = document.createElement('h1');

  header.textContent = "About Us";

  const para = document.createElement('p');

  para.textContent = "This is a restaurant that does not else in the world.";

  div.appendChild(header);
  div.appendChild(para);

  contentdiv.appendChild(div);

}

export default generateAbout;