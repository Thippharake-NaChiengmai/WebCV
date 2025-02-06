//fake-btn
document.getElementById('fake-btn').addEventListener('click', function() {
    alert('This function is not available in practice. !!!');
});

//fade-in
window.addEventListener('DOMContentLoaded', (event) => {
    document.body.classList.add('fade-in');
  });

  //showmore-showless
const moreContent = document.getElementById('more-content');
const toggleText = document.getElementById('toggle-text'); 
const introContent = document.getElementById('intro-content');

toggleText.addEventListener('click', () => { 
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        toggleText.textContent = 'Show Less'; 
    } else {
        moreContent.style.display = 'none';
        toggleText.textContent = 'Show More'; 
    }
});