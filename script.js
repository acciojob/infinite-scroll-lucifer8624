//your code here!
const list = document.getElementById('list');

// Keep track of the number of items
let itemCount = 10;

// Function to create list items
function addListItems(num) {
  for (let i = 1; i <= num; i++) {
    const li = document.createElement('li');
    li.textContent = `List Item ${list.children.length + 1}`;
    list.appendChild(li);
  }
}

// Add initial 10 items
addListItems(itemCount);

// Detect when user reaches the bottom of the page
window.addEventListener('scroll', () => {
  // Check if scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addListItems(2); // Add 2 new items
  }
});
