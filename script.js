// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toast-title');
const toastDescription = document.getElementById('toast-description');
const closeToast = document.getElementById('close-toast');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Disable submit button
  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';
  
  // Simulate form submission
  setTimeout(() => {
    // Re-enable submit button
    submitButton.disabled = false;
    submitButton.textContent = 'Send Message';
    
    // Show success toast
    toastTitle.textContent = 'Message sent';
    toastDescription.textContent = 'Thank you for reaching out. I\'ll get back to you soon.';
    toast.classList.add('show');
    
    // Reset form
    contactForm.reset();
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }, 1500);
});

// Close toast when clicking the close button
closeToast.addEventListener('click', () => {
  toast.classList.remove('show');
});