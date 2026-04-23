document.addEventListener("DOMContentLoaded", () => {
    const reviewsGrid = document.querySelector(".reviews-grid");
    const reviews = document.querySelectorAll(".review-card");
    const limit = 6;
  
    if (reviews.length <= limit) {
      return;
    }
  
    // Hide reviews beyond the limit
    reviews.forEach((review, index) => {
      if (index >= limit) {
        review.classList.add("hidden");
      }
    });
  
    // Create button container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "reviews-actions";
  
    // Create button
    const showMoreButton = document.createElement("button");
    showMoreButton.className = "show-more-reviews";
    showMoreButton.textContent = "Show more";
    
    // Add icon to button if desired, similar to other buttons
    // Using a simple downward arrow or just text for now as per plan
    
    buttonContainer.appendChild(showMoreButton);
    
    // Insert after the grid
    reviewsGrid.parentNode.insertBefore(buttonContainer, reviewsGrid.nextSibling);
  
    // Event listener
    showMoreButton.addEventListener("click", () => {
      reviews.forEach(review => {
        review.classList.remove("hidden");
      });
      buttonContainer.remove(); // Remove the button after showing all
    });
  });
