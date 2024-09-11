document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  // Function to close all accordion items
  function closeAllItems() {
    accordionItems.forEach(item => {
      item.classList.remove('active'); // Remove active class
      const accordionText = item.querySelector('.accordion-text');
      const accordionToggle = item.querySelector('.accordion-toggle');
      
      accordionText.style.display = 'none'; // Hide text
      accordionToggle.innerHTML = `
        <div class="accordion-state-closed">
          <svg class="toggle-open" viewBox="0 0 17 2">
            <path d="M 0 0 L 17 0"></path>
          </svg>
          <svg class="toggle-closed" viewBox="0 0 2 17">
            <path d="M 0 17 L 0 0"></path>
          </svg>
        </div>`;
    });
  }

  // Function to open the clicked accordion item
  function openItem(item) {
    const accordionText = item.querySelector('.accordion-text');
    const accordionToggle = item.querySelector('.accordion-toggle');
    
    accordionText.style.display = 'block'; // Show text
    item.classList.add('active'); // Add active class

    accordionToggle.innerHTML = `
      <div class="accordion-state-open">
        <svg class="toggle-open" viewBox="0 0 17 2">
          <path d="M 0 0 L 17 0"></path>
        </svg>
      </div>`;
  }

  // Initial setup: open the first accordion item
  closeAllItems(); // Close all items first
  openItem(accordionItems[0]); // Open the first item by default

  // Attach click event to all accordion titles
  accordionItems.forEach(item => {
    const accordionTitle = item.querySelector('.accordion-title');
    
    accordionTitle.addEventListener('click', function() {
      if (!item.classList.contains('active')) {
        closeAllItems(); // Close other items
        openItem(item);  // Open the clicked item
      }
    });
  });
});