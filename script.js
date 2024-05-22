// window.alert("NOT READY")

console.log("THIS IS JUST A PREVIEW FOR Narm Goustar MAz Inc. ITS NOT READY YET.")
console.log("Ver: 0.1")

// TEMPLATING

document.addEventListener('DOMContentLoaded', function() {
  Promise.all([
    fetch('header.html').then(response => response.text()),
    fetch('footer.html').then(response => response.text())
  ]).then(values => {
    document.querySelector('#header-placeholder').innerHTML = values[0];
    document.querySelector('#footer-placeholder').innerHTML = values[1];
    loadTranslations();
  });
});

// LANGUAGE

const translations = {};
let currentLanguage = 'en';

fetch('translations.json')
  .then(response => response.json())
  .then(data => {
    translations.en = data.en;
    translations.fa = data.fa;
    loadTranslations();
  });

function loadTranslations() {
  const languageCheckbox = document.getElementById('language-checkbox');
  const isPersian = localStorage.getItem('language') === 'fa';

  if (isPersian) {
    currentLanguage = 'fa';
    languageCheckbox.checked = true;
  } else {
    currentLanguage = 'en';
    languageCheckbox.checked = false;
  }

  translateText();

  languageCheckbox.addEventListener('change', function() {
    currentLanguage = this.checked ? 'fa' : 'en';
    localStorage.setItem('language', currentLanguage);
    translateText();
  });
}

function translateElement(id, text) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    }
  }

function translatePlaceholder(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.placeholder = text;
  }
}

function translateText() {

    translateElement('title-main', translations[currentLanguage].title.main);
    translateElement('title-not-available', translations[currentLanguage].title.notAvailable);
    translateElement('title-about', translations[currentLanguage].title.about);
    translateElement('title-contact', translations[currentLanguage].title.contact);
    translateElement('title-products', translations[currentLanguage].title.products);
    translateElement('title-services', translations[currentLanguage].title.services);

    translateElement('logo', translations[currentLanguage].header.logo);
    translateElement('english', translations[currentLanguage].header.languageToggle.english);
    translateElement('persian', translations[currentLanguage].header.languageToggle.persian);
    translateElement('home', translations[currentLanguage].header.nav.home);
    translateElement('products', translations[currentLanguage].header.nav.products);
    translateElement('services', translations[currentLanguage].header.nav.services);
    translateElement('about', translations[currentLanguage].header.nav.about);
    translateElement('contact', translations[currentLanguage].header.nav.contact);

    translateElement('home-title', translations[currentLanguage].home.title);
    translateElement('home-description', translations[currentLanguage].home.description);
    translateElement('get-started', translations[currentLanguage].home.getStarted);

    translateElement('hero-title', translations[currentLanguage].hero.title);
    translateElement('hero-subtitle', translations[currentLanguage].hero.subtitle);
    translateElement('learn-more', translations[currentLanguage].hero.learnMore);
    translateElement('student-management-title', translations[currentLanguage].features.studentManagement.title);
    translateElement('student-management-description', translations[currentLanguage].features.studentManagement.description);
    translateElement('scheduling-title', translations[currentLanguage].features.scheduling.title);
    translateElement('scheduling-description', translations[currentLanguage].features.scheduling.description);
    translateElement('analytics-title', translations[currentLanguage].features.analytics.title);
    translateElement('analytics-description', translations[currentLanguage].features.analytics.description);

    translateElement('contact-title-main', translations[currentLanguage].contact.title);
    translateElement('name-label', translations[currentLanguage].contact.form.name);
    translateElement('email-label', translations[currentLanguage].contact.form.email);
    translateElement('phone-label', translations[currentLanguage].contact.form.phone);
    translateElement('university-label', translations[currentLanguage].contact.form.university);
    translateElement('department-label', translations[currentLanguage].contact.form.department);
    translateElement('message-label', translations[currentLanguage].contact.form.message);
    translateElement('submit-btn', translations[currentLanguage].contact.form.submit);

    translateElement('about-intro-title', translations[currentLanguage].about.intro.title);
    translateElement('about-intro-description', translations[currentLanguage].about.intro.description);
    translateElement('about-mission-title', translations[currentLanguage].about.mission.title);
    translateElement('about-mission-description', translations[currentLanguage].about.mission.description);
    translateElement('about-values-title', translations[currentLanguage].about.values.title);
    translateElement('about-values-innovation-title', translations[currentLanguage].about.values.innovation.title);
    translateElement('about-values-innovation-description', translations[currentLanguage].about.values.innovation.description);
    translateElement('about-values-excellence-title', translations[currentLanguage].about.values.excellence.title);
    translateElement('about-values-excellence-description', translations[currentLanguage].about.values.excellence.description);
    translateElement('about-values-collaboration-title', translations[currentLanguage].about.values.collaboration.title);
    translateElement('about-values-collaboration-description', translations[currentLanguage].about.values.collaboration.description);

    translateElement('about-team-title', translations[currentLanguage].team.title);
    translateElement('about-team-description', translations[currentLanguage].team.description);

    translateElement('team-member-name-1', translations[currentLanguage].team.memberName1);
    translateElement('team-member-position-1', translations[currentLanguage].team.memberPosition1);
    translateElement('team-member-name-2', translations[currentLanguage].team.memberName2);
    translateElement('team-member-position-2', translations[currentLanguage].team.memberPosition2);

    translateElement('about-contact-title', translations[currentLanguage].about.contact.title);
    translateElement('about-contact-email-title', translations[currentLanguage].about.contact.email.title);
    translateElement('about-contact-email', translations[currentLanguage].about.contact.email.address);
    translateElement('about-contact-phone-title', translations[currentLanguage].about.contact.phone.title);
    translateElement('about-contact-phone', translations[currentLanguage].about.contact.phone.number);
    translateElement('about-contact-location-title', translations[currentLanguage].about.contact.location.title);
    translateElement('about-contact-location', translations[currentLanguage].about.contact.location.address);
    
    translateElement('not-available-title', translations[currentLanguage].notAvailable.title);
    translateElement('not-available-description', translations[currentLanguage].notAvailable.description);
    translateElement('contact-help-title', translations[currentLanguage].contactHelp.title);
    translateElement('contact-help-description', translations[currentLanguage].contactHelp.description);

    translateElement('products-title', translations[currentLanguage].products.title);
    translateElement('product-1-title', translations[currentLanguage].products.product1.title);
    translateElement('product-1-description', translations[currentLanguage].products.product1.description);
    translateElement('product-1-price', translations[currentLanguage].products.product1.price);

    translateElement('subscribe-title', translations[currentLanguage].footer.subscribe.title);
    translateElement('subscribe-description', translations[currentLanguage].footer.subscribe.description);
    translateElement('subscribe-email-submit', translations[currentLanguage].footer.subscribe.emailSubmit);
    translatePlaceholder('subscribe-email-input', translations[currentLanguage].footer.subscribe.emailPlaceholder);
    translateElement('contact-title', translations[currentLanguage].footer.contact.title);
    translateElement('contact-description', translations[currentLanguage].footer.contact.description);

  }
