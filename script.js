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

  //sent Message
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const myEmail = 'thippharake_na@cmu.ac.th';

      const subject = `Message from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      form.reset();
      alert("Message sent successfully (if your email client is configured correctly).");
  });

 