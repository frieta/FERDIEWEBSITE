document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const href = this.getAttribute('href');
            if (!href || href === '#') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const submitFormViaMailto = (formId, nameId, emailId, messageId) => {
        const form = document.getElementById(formId);
        if (!form) {
            return;
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById(nameId)?.value.trim();
            const email = document.getElementById(emailId)?.value.trim();
            const message = document.getElementById(messageId)?.value.trim();

            if (!name || !email || !message) {
                alert('Please complete Name, Email, and Message.');
                return;
            }

            const subject = encodeURIComponent(`Website Message from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailto = `mailto:ferdinan.lim.rieta@gmail.com?subject=${subject}&body=${body}`;

            window.location.href = mailto;
            form.reset();
        });
    };

    submitFormViaMailto('footerContactForm', 'footerName', 'footerEmail', 'footerMessage');

    window.addEventListener('scroll', () => {
        if (!header) {
            return;
        }

        if (window.scrollY > 40) {
            header.style.boxShadow = '0 8px 22px rgba(0, 0, 0, 0.12)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
    });
});
