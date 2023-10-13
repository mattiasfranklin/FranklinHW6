const addLink = () => {
  const newElement = document.createElement('li');
  
  const newLink = document.createElement('a');
  newLink.id = "cob"
  newLink.href = 'https://www.csulb.edu/college-of-business';
  newLink.textContent = 'College of Business';
  
  newElement.appendChild(newLink);
  
  const linksList = document.getElementById('links');
  const isLink = document.getElementById('is');
  linksList.insertBefore(newElement, isLink);
};

addLink();
