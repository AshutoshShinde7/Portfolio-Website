const darkMode = () => {
    const themeToggleBtn = document.querySelectorAll('#theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add(theme);

    // Handlrs
    const handlesThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        }
        else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');  // Not compulsory
        }
    };

    // Event
    themeToggleBtn.forEach(btn => 
        btn.addEventListener('click', handlesThemeToggle)
    );
};

export default darkMode;