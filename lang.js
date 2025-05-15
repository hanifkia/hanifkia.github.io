document.addEventListener('DOMContentLoaded', function () {
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = detectBrowserLanguage();

    applyLanguage(currentLang);

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'fa' : 'en';
        applyLanguage(currentLang);
    });

    function detectBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        return lang.startsWith('fa') ? 'fa' : 'en';
    }

    function applyLanguage(lang) {
        langToggle.textContent = lang === 'en' ? 'فارسی' : 'English';

        document.documentElement.lang = lang;
        document.body.dir = lang === 'fa' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-en]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });
    }
});
