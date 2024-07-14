//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    // Challenge 1: Fetch and display random dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById('dog-image-container');
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          img.alt = 'Random dog';
          img.style.width = '200px';
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching dog images:', error));
  
    // Challenge 2: Fetch and list all dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
      })
      .catch(error => console.error('Error fetching dog breeds:', error));
  
    // Challenge 3: Change color of breed when clicked
    breedList.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'firebrick';
      }
    });
  
    // Challenge 4: Filter breeds by first letter
    const breedDropdown = document.getElementById('breed-dropdown');
  
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const listItems = breedList.getElementsByTagName('li');
  
      Array.from(listItems).forEach(item => {
        if (item.textContent.startsWith(selectedLetter)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });