document.addEventListener('DOMContentLoaded', function() {
    const svgTemplate = `<svg viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.68335 1.43381C7.71257 1.37478 7.7577 1.3251 7.81366 1.29036C7.86961 1.25562 7.93416 1.23721 8.00002 1.23721C8.06588 1.23721 8.13043 1.25562 8.18639 1.29036C8.24234 1.3251 8.28747 1.37478 8.31669 1.43381L9.85669 4.55314C9.95814 4.75845 10.1079 4.93608 10.2931 5.07078C10.4783 5.20547 10.6934 5.29322 10.92 5.32648L14.364 5.83048C14.4293 5.83993 14.4906 5.86746 14.541 5.90994C14.5914 5.95243 14.629 6.00817 14.6494 6.07088C14.6698 6.13359 14.6722 6.20075 14.6564 6.26477C14.6406 6.32879 14.6072 6.38711 14.56 6.43314L12.0694 8.85848C11.9051 9.01854 11.7822 9.21613 11.7112 9.43423C11.6403 9.65233 11.6234 9.8844 11.662 10.1105L12.25 13.5371C12.2615 13.6024 12.2545 13.6695 12.2297 13.7309C12.2049 13.7923 12.1633 13.8455 12.1097 13.8845C12.0561 13.9234 11.9927 13.9465 11.9266 13.9511C11.8605 13.9557 11.7945 13.9416 11.736 13.9105L8.65735 12.2918C8.4545 12.1853 8.22881 12.1296 7.99969 12.1296C7.77057 12.1296 7.54488 12.1853 7.34202 12.2918L4.26402 13.9105C4.20557 13.9414 4.13962 13.9553 4.07365 13.9506C4.00769 13.946 3.94437 13.9229 3.89088 13.884C3.8374 13.8451 3.79591 13.7919 3.77112 13.7306C3.74634 13.6693 3.73926 13.6023 3.75069 13.5371L4.33802 10.1111C4.37682 9.88496 4.36001 9.65274 4.28905 9.43451C4.21808 9.21627 4.09509 9.01858 3.93069 8.85848L1.44002 6.43381C1.39242 6.38783 1.35868 6.32941 1.34266 6.26519C1.32664 6.20098 1.32898 6.13355 1.34941 6.0706C1.36983 6.00765 1.40753 5.9517 1.4582 5.90913C1.50888 5.86656 1.57049 5.83907 1.63602 5.82981L5.07935 5.32648C5.30619 5.29348 5.52161 5.20585 5.70708 5.07113C5.89254 4.93642 6.04249 4.75866 6.14402 4.55314L7.68335 1.43381Z" fill="{color}" stroke="{color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;

    document.querySelectorAll('.star-rating').forEach(container => {
        const rating = parseFloat(container.dataset.rating) || 0;
        const mobileRating = Math.floor(rating);  // Берём целую часть рейтинга

        // Создаём 5 звезд
        for (let i = 0; i < 5; i++) {
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';

            // Пустая звезда (фон)
            const emptyStar = svgTemplate.replace(/{color}/g, '#F6F6F6');
            starContainer.innerHTML = emptyStar;

            // Заполненная часть (для десктопа)
            if (rating > i) {
                const fillPercent = Math.min(100, (rating - i) * 100);
                const filledStar = document.createElement('div');
                filledStar.className = 'filled-star';
                filledStar.style.clipPath = `inset(0 ${100 - fillPercent}% 0 0)`;
                filledStar.innerHTML = svgTemplate.replace(/{color}/g, '#F3BB44');
                starContainer.appendChild(filledStar);
            }

            container.appendChild(starContainer);
        }

        // Добавляем класс для мобильного отображения
        if (mobileRating >= 1) {
            container.classList.add('has-rating');
        }
    });
});