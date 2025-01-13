document.addEventListener("DOMContentLoaded", () => {
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      const page = window.location.pathname;

      if (page.includes("index.html") || page === "/") {
        // About Me Page
        document.getElementById('intro').textContent = data.intro;
      }

      if (page.includes("education.html")) {
        // Education Page
        const educationContainer = document.getElementById('education-container');
        data.education.forEach(item => {
          const educationEntry = document.createElement('div');
          educationEntry.className = 'card'; // Apply card styling
          educationEntry.innerHTML = `
            <h3>${item.title}</h3>
            <p><strong>Institute:</strong> ${item.institute} | <strong>GPA:</strong> ${item.gpa} | <strong>Year:</strong> ${item.year}</p>
            <p>${item.description}</p>
          `;
          educationContainer.appendChild(educationEntry);
        });
      }

      if (page.includes("experience.html")) {
        // Experience Page
        const experienceContainer = document.getElementById('experience-container');
        data.experience.forEach(item => {
          const experienceEntry = document.createElement('div');
          experienceEntry.className = 'card'; // Apply card styling
          experienceEntry.innerHTML = `
            <h3>${item.role} - <a href="${item.link}" target="_blank">${item.company}</a></h3>
            <p><strong>Year:</strong> ${item.year_from} - ${item.year_to}</p>
            <p>${item.description}</p>
          `;
          experienceContainer.appendChild(experienceEntry);
        });
      }

      if (page.includes("skills.html")) {
        // Skills Page
        const skillsContainer = document.getElementById('skills-container');
        data.skills.forEach(skill => {
          const skillEntry = document.createElement('div');
          skillEntry.className = 'card'; // Apply card styling
          skillEntry.innerHTML = `
            <p>${skill.title} ${'★'.repeat(skill.level)}</p>
          `;
          skillsContainer.appendChild(skillEntry);
        });
      }

      if (page.includes("contact.html")) {
        // Contact Page
        const contactContainer = document.getElementById('contact-container');
        data.contact.forEach(contact => {
          const contactEntry = document.createElement('li');
          contactEntry.innerHTML = `
            <i class="${contact.icon}"></i> 
            <a href="${contact.link}" target="_blank">${contact.value}</a>
          `;
          contactContainer.appendChild(contactEntry);
        });
      }
    })
    .catch(error => console.error('Error loading data:', error));
});
