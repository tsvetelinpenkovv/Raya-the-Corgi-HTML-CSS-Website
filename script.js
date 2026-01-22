document.addEventListener('DOMContentLoaded', function() {

    // --- Simple i18n (BG/EN) ---
    const translations = {
        bg: {
            "nav.about": '<i class="fas fa-heart" aria-hidden="true"></i> За Raya',
            "nav.character": '<i class="fas fa-paw" aria-hidden="true"></i> Характер',
            "nav.gallery": '<i class="fas fa-camera-retro" aria-hidden="true"></i> Галерия',
            "nav.facts": '<i class="fas fa-lightbulb" aria-hidden="true"></i> Факти',
            "cta.header": 'Запознай се! <i class="fas fa-bone" aria-hidden="true"></i>',

            "hero.badge": '<i class="fas fa-heart" aria-hidden="true"></i> Добре дошли в моя свят',
            "hero.title": 'Здравейте!<br>Аз съм <span>Raya</span>',
            "hero.subtitle": 'Най-щастливото и игриво Корги, което ще срещнете! Обичам приключения, гушкане и вкусни лакомства. <i class="fas fa-drumstick-bite" aria-hidden="true"></i>',
            "hero.btnAbout": 'Научи повече за мен <i class="fas fa-dog" aria-hidden="true"></i>',
            "hero.btnGallery": 'Виж галерията <i class="fas fa-images" aria-hidden="true"></i>',
            "hero.float1": 'Игриво! <i class="fas fa-table-tennis" aria-hidden="true"></i>',
            "hero.float2": 'Сладко! <i class="fas fa-kiss-wink-heart" aria-hidden="true"></i>',
            "hero.float3": 'Енергично! <i class="fas fa-bolt" aria-hidden="true"></i>',

            "about.title": 'Коя е Raya? <i class="fas fa-question" aria-hidden="true"></i>',
            "about.p1": 'Аз съм кралска особа в тяло на малко, пухкаво хлебче! <i class="fas fa-bread-slice" aria-hidden="true"></i> Моят ден минава в стратегическо планиране как да получа повече лакомства и да бъда център на внимание.',
            "about.p2": 'Моята суперсила е да разтопявам сърца с един поглед и да правя най-смешните физиономии, когато спя. Обичам дългите разходки в парка (особено ако има локви) и да преследвам всичко, което се движи бързо.',
            "about.li1": '<i class="fas fa-check-circle" aria-hidden="true"></i> Професионален дегустатор',
            "about.li2": '<i class="fas fa-check-circle" aria-hidden="true"></i> Експерт по дрямка',
            "about.li3": '<i class="fas fa-check-circle" aria-hidden="true"></i> Майстор на "тъжния поглед"',

            "character.title": 'Моят Уникален Характер <i class="fas fa-star" aria-hidden="true"></i>',
            "character.c1.t": 'Енергична Бомба',
            "character.c1.p": 'Винаги готова за игра! Мога да тичам след топката цял ден, а после да заспя за секунди на най-странното място.',
            "character.c2.t": 'Вроден Гурме',
            "character.c2.p": 'Храната е моята страст. Имам вграден радар за отваряне на хладилници и пакетчета с лакомства.',
            "character.c3.t": 'Гушкав Терапевт',
            "character.c3.p": 'Най-доброто лекарство за лош ден е една доза Raya-гушкане. Винаги усещам, когато имаш нужда от любов.',
            "character.c4.t": 'Драма Кралица',
            "character.c4.p": 'Ако не ми обърнеш внимание за 5 минути, ще изиграя сцена достойна за Оскар. Обичам да съм под прожекторите!',

            "gallery.title": 'Моите Звездни Моменти <i class="fas fa-camera" aria-hidden="true"></i>',
            "facts.title": 'Забавни Корги Факти <i class="fas fa-book-open" aria-hidden="true"></i>',
            "facts.f1": 'Аз съм от породата, любима на кралица Елизабет II. Имам синя кръв! (почти)',
            "facts.f2": 'Не съм ниска, просто съм по-близо до земята за по-добро подушване.',
            "facts.f3": 'Моят лай е впечатляващо силен за размерите ми. Пазач номер едно!',
            "facts.f4": 'Спя в поза "сплескана жаба" (sploot) - с разперени задни крачета.',

            "footer.copy": 'Copyright © 2026 Всички права запазени | Изработен с много <i class="fas fa-heart heart-beat" aria-hidden="true"></i> от'
        },
        en: {
            "nav.about": '<i class="fas fa-heart" aria-hidden="true"></i> About Raya',
            "nav.character": '<i class="fas fa-paw" aria-hidden="true"></i> Personality',
            "nav.gallery": '<i class="fas fa-camera-retro" aria-hidden="true"></i> Gallery',
            "nav.facts": '<i class="fas fa-lightbulb" aria-hidden="true"></i> Fun facts',
            "cta.header": 'Meet me! <i class="fas fa-bone" aria-hidden="true"></i>',

            "hero.badge": '<i class="fas fa-heart" aria-hidden="true"></i> Welcome to my world',
            "hero.title": 'Hi!<br>I\'m <span>Raya</span>',
            "hero.subtitle": 'The happiest and most playful Corgi you\'ll meet! I love adventures, cuddles, and tasty treats. <i class="fas fa-drumstick-bite" aria-hidden="true"></i>',
            "hero.btnAbout": 'Learn more <i class="fas fa-dog" aria-hidden="true"></i>',
            "hero.btnGallery": 'View gallery <i class="fas fa-images" aria-hidden="true"></i>',
            "hero.float1": 'Playful! <i class="fas fa-table-tennis" aria-hidden="true"></i>',
            "hero.float2": 'Cute! <i class="fas fa-kiss-wink-heart" aria-hidden="true"></i>',
            "hero.float3": 'Energetic! <i class="fas fa-bolt" aria-hidden="true"></i>',

            "about.title": 'Who is Raya? <i class="fas fa-question" aria-hidden="true"></i>',
            "about.p1": 'I\'m royalty in the body of a tiny, fluffy bun! <i class="fas fa-bread-slice" aria-hidden="true"></i> My day is all about strategic planning for more treats and becoming the center of attention.',
            "about.p2": 'My superpower is melting hearts with a single look and making the funniest faces while I sleep. I love long walks (especially if there are puddles) and chasing anything that moves fast.',
            "about.li1": '<i class="fas fa-check-circle" aria-hidden="true"></i> Professional taste tester',
            "about.li2": '<i class="fas fa-check-circle" aria-hidden="true"></i> Nap expert',
            "about.li3": '<i class="fas fa-check-circle" aria-hidden="true"></i> Master of the “sad eyes”',

            "character.title": 'My Unique Personality <i class="fas fa-star" aria-hidden="true"></i>',
            "character.c1.t": 'Energy Bomb',
            "character.c1.p": 'Always ready to play! I can chase a ball all day, then fall asleep in seconds in the weirdest spot.',
            "character.c2.t": 'Born Gourmet',
            "character.c2.p": 'Food is my passion. I have a built-in radar for fridge doors and treat bags.',
            "character.c3.t": 'Cuddle Therapist',
            "character.c3.p": 'The best cure for a bad day is a dose of Raya cuddles. I always know when you need love.',
            "character.c4.t": 'Drama Queen',
            "character.c4.p": 'If you ignore me for 5 minutes, I\'ll perform an Oscar-worthy scene. I love being in the spotlight!',

            "gallery.title": 'My Star Moments <i class="fas fa-camera" aria-hidden="true"></i>',
            "facts.title": 'Fun Corgi Facts <i class="fas fa-book-open" aria-hidden="true"></i>',
            "facts.f1": 'Corgis were Queen Elizabeth II\'s favorite breed. So yes—blue blood! (almost)',
            "facts.f2": 'I\'m not short, I\'m just closer to the ground for better sniffing.',
            "facts.f3": 'My bark is impressively loud for my size. Guard dog #1!',
            "facts.f4": 'I sleep in the “sploot” pose—with my back legs stretched out.',

            "footer.copy": 'Copyright © 2026 All rights reserved | Made with lots of <i class="fas fa-heart heart-beat" aria-hidden="true"></i> by'
        }
    };

    function setActiveLangButton(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.bg;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Update document language + a couple of SEO-relevant tags for sharing previews.
        document.documentElement.lang = lang;
        const title = lang === 'en' ? 'Raya the Corgi | Official Website' : 'Raya the Corgi | Официален Сайт';
        document.title = title;
        const desc = document.querySelector('meta[name="description"]');
        if (desc) {
            desc.setAttribute('content', lang === 'en'
                ? 'Meet Raya – the most playful Corgi! Explore the gallery and read fun facts.'
                : 'Запознайте се с Raya - най-забавното и игриво корги! Научете за нейния характер, разгледайте галерията и прочетете забавни факти.');
        }
        setActiveLangButton(lang);
    }

    const savedLang = (localStorage.getItem('lang') || 'bg').toLowerCase();
    applyTranslations(savedLang === 'en' ? 'en' : 'bg');

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang === 'en' ? 'en' : 'bg';
            localStorage.setItem('lang', lang);
            applyTranslations(lang);
        });
    });

    // --- Lazy load background images (About collage) ---
    const bgTargets = document.querySelectorAll('[data-bg]');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const bg = el.getAttribute('data-bg');
                if (bg) {
                    el.style.backgroundImage = `url('${bg}')`;
                }
                obs.unobserve(el);
            });
        }, { rootMargin: '200px 0px' });

        bgTargets.forEach(el => io.observe(el));
    } else {
        // Fallback: just load them immediately
        bgTargets.forEach(el => {
            const bg = el.getAttribute('data-bg');
            if (bg) el.style.backgroundImage = `url('${bg}')`;
        });
    }
    
    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('nav ul li a, .btn-header, .scroll-down, .hero-buttons a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Проверяваме дали линкът е вътрешна котва (започва с #)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    // Изчисляваме позицията, като вземем предвид височината на фиксирания хедър
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }

                // Затваряме мобилното меню след клик (ако е отворено)
                const nav = document.querySelector('nav');
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // --- Header Scroll Effect ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

});