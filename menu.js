        document.addEventListener('DOMContentLoaded', function() {
            // Get all category buttons and menu items
            const categoryButtons = document.querySelectorAll('.category-btn');
            const menuItems = document.querySelectorAll('.menu-item');
            
            // Add click event to each category button
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get the selected category
                    const selectedCategory = this.getAttribute('data-category');
                    
                    // Filter menu items
                    filterMenuItems(selectedCategory);
                });
            });
            
            // Function to filter menu items based on selected category
            function filterMenuItems(category) {
                menuItems.forEach(item => {
                    const itemCategories = item.getAttribute('data-categories').split(' ');
                    
                    if (category === 'all' || itemCategories.includes(category)) {
                        item.style.display = 'flex';
                        setTimeout(() => {
                            item.classList.remove('fade');
                        }, 10);
                    } else {
                        item.classList.add('fade');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });