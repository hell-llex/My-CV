import data from "./data.js";

const contacts = document.querySelectorAll('.contacts');
const hardSkills = document.querySelectorAll('.hard-skills');
const softSkills = document.querySelectorAll('.soft-skills');
const projects = document.querySelectorAll('.projects');
const about = document.querySelectorAll('.about');
const education = document.querySelectorAll('.education');
const languages = document.querySelectorAll('.language');
const year = document.querySelector('.year');

const createContacts = () => {
  const list = data.contacts.map((item) => `
  <li class="list-item">
  <div class="container-item">
    <p>${item.title}:</p>
    ${item.link ? `<a href="${item.link}">${item.text}</a>` : `<p>${item.text}</p>`}
  </div>
  </li>
  `);
  return `
        <h2 class="section-title">Contact information:</h2>
        <ul class="list-items">${list.join(' ')}</ul>
        `
}

const createHardSkills = () => {
  const list = data.skills.hard.map((item) => `
      <li class="list-item-icon-skills">
        <div class="container-item">
          <img src="${item.src}" title="${item.title}" class="skill-icon"/>
          <p class="skill-text">${item.title}</p>
        </div>
      </li>
    `
  );
  return `
        <h2 class="section-title">Hard skills:</h2>
        <ul class="list-items">${list.join(' ')}</ul>
        `
}

const lineSkills = (progress) => {
  const line = [];
  for (let i = 0; i < 10; i++) {
    line.push(i + 1 <= progress ? `<span class="dot1"></span>` : `<span class="dot2"></span>`)
  }
  return line.join('')
}

const createSoftSkills = () => {
  const list = data.skills.soft.map((item) => `
      <li class="list-item">
        <div class="container-item">
          <p>${item.title}:</p>
          <div class="progress">
            ${lineSkills(item.progress)}
          </div>
        </div>
      </li>
    `
  );
  return `
        <h2 class="section-title">Soft skills:</h2>
        <ul class="list-items">
          ${list.join(' ')}
        </ul>
        `
}

const createProject = () => {
  const list = data.projects.map((item) => `
      <li class="list-item">
        <div class="container-item">
          <p>${item.title}:</p>
          <a href="${item.link}" class="project">
            <img src="https://raw.githubusercontent.com/primer/octicons/268b2021bed7b12ff878e999d8b532534b1e2dcc/icons/project-symlink-24.svg" class="project-icon"/>
          </a>
        </div>
      </li>
    `
  );
  return `
        <h2 class="section-title">Projects:</h2>
        <ul class="list-items">
          ${list.join(' ')}
          <li class="list-item">
            <div class="container-item">
              Other -> <a href="https://github.com/hell-llex"> GitHub</a>
            </div>
          </li>
        </ul>
        `
}

const createAbout = () => {
  return `
        <h2 class="section-title">About me:</h2>
        <p class="about-text">
          Hi, I'm Alexander Demeshchenko
          <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30"> <br>
          Highly motivated and detail-oriented Frontend Developer with a passion for creating
          user-friendly and visually appealing web applications.
          Seeking an opportunity to apply my knowledge of JavaScript, React,
          and other frontend technologies to contribute to the success of a dynamic IT team.
        </p>
        `
}

const createEducation = () => {
  const list = data.education.map((item) => `
      <li class="list-item">
        <div class="container-item">
          <p>${item.title}</p>
          ${item.link.length ? `<a class="certificate" href="${item.link}">
            <img src="https://raw.githubusercontent.com/phosphor-icons/core/c67d7a849f450be1bfe64fd5820471e4019e5ff0/assets/thin/certificate-thin.svg" class="certificate-icon" />
          </a>` : ''}
        </div>
      </li>
    `
  );
  return `
        <h2 class="section-title">Education:</h2>
        <ul class="list-items">
          ${list.join(' ')}
        </ul>
        `
}

const createLanguage = () => {
  const list = data.language.map((item) => `
      <li class="list-item">
        <div class="container-item">
          <p>${item.title}: ${item.progress}</p>
        </div>
      </li>
    `
  );
  return `
        <h2 class="section-title">Language:</h2>
        <ul class="list-items">
          ${list.join(' ')}
        </ul>
        `
}

const createYear = () => {
  return `2021 - ${new Date().getFullYear()}`
}

contacts.forEach(item => item.innerHTML = createContacts())
hardSkills.forEach(item => item.innerHTML = createHardSkills())
softSkills.forEach(item => item.innerHTML = createSoftSkills())
projects.forEach(item => item.innerHTML = createProject())
about.forEach(item => item.innerHTML = createAbout())
education.forEach(item => item.innerHTML = createEducation())
languages.forEach(item => item.innerHTML = createLanguage())
year.innerHTML = createYear()
