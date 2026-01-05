document.addEventListener('DOMContentLoaded', () => {
    /* =======================
       共通変数
    ======================= */
    const scrollTargets = document.querySelectorAll('.up,.right,.left,.pop,.standard');
    const cta = document.querySelector('.C_CTA.float');
    const mv = document.querySelector('.mv');

    let hideTimer = null;
    let mvHeight = mv ? mv.offsetHeight : 0;
    const bottomOffset = 50;
    let loadingFinished = false;

    /* =======================
       スクロール
    ======================= */
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const windowBottom = scrollY + window.innerHeight;
        const pageHeight = document.body.scrollHeight;

        scrollTargets.forEach(el => {
            const top = el.getBoundingClientRect().top + scrollY;
            if (windowBottom > top) {
                el.classList.add('show');
            }
        });

        if (!cta || !mv) return;

        // ページ最下部では非表示
        if (windowBottom >= pageHeight - bottomOffset) {
            cta.classList.remove('is-show');
            return;
        }

        // mv通過後
        if (scrollY > mvHeight) {
            cta.classList.add('is-show');

            if (hideTimer) clearTimeout(hideTimer);
            hideTimer = setTimeout(() => {
                cta.classList.remove('is-show');
            }, 2000);
        } else {
            cta.classList.remove('is-show');
        }
    });

    /* =======================
       アコーディオン
    ======================= */
    const setupAccordion = selector => {
        document.querySelectorAll(selector).forEach(trigger => {
            trigger.addEventListener('click', () => {
                const content = trigger.nextElementSibling;
                if (!content) return;

                trigger.classList.toggle('active');

                if (content.style.height && content.style.height !== '0px') {
                    // 閉じる
                    content.style.height = content.scrollHeight + 'px';
                    requestAnimationFrame(() => {
                        content.style.height = '0';
                    });
                } else {
                    // 開く
                    content.style.height = content.scrollHeight + 'px';
                }
            });
        });
    };

    setupAccordion('.question-wrap');
    setupAccordion('.js_onClick');

    /* =======================
       ローディング
    ======================= */
    const loadingTargets = document.querySelectorAll('.h1');

    window.addEventListener('load', () => {
        loadingTargets.forEach(el => el.classList.add('show'));
        loadingFinished = true;
    });

    setTimeout(() => {
        if (!loadingFinished) {
            loadingTargets.forEach(el => el.classList.add('show'));
        }
    }, 2000);
});
