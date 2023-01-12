// hide and show navbar
let lastScrollTop = 0;
wrapperNavbar = document.querySelector('.wrapper-navbar');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        wrapperNavbar.style.top = '-60px';
    } else {
        wrapperNavbar.style.top = '0';
    };
    lastScrollTop = scrollTop;
});

// hide and show button back-to-top
let lastScrollUp = 0;
backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollUp) {
        backToTop.style.bottom = '15px';
    } else {
        backToTop.style.bottom = '-15%';
    };
    lastScrollUp = scrollTop;
});

// get map location when user click the button
const getLocation = document.querySelectorAll('.get-location');
for (let i = 0; i < getLocation.length; i++) {
    const getLoc = getLocation[i]
    getLoc.addEventListener('click', () => {
        window.location.href = 'https://goo.gl/maps/hC1b3q7dfLU9kFT56';
    });
};

// get save date when user click the button
const saveDate = document.querySelectorAll('.save-date');
for (let i = 0; i < saveDate.length; i++) {
    const save = saveDate[i]
    save.addEventListener('click', () => {
        window.location.href = 'https://calendar.google.com/calendar/u/0/r/eventedit/MzBmMTUwa3E4N2xlMnVtYWcwcW1pMThsNzIgZGVkaWluZHJhd2FuODEyQG0?hl=id&pli=1';
    });
};

// create copy clipboard when user click button
const copyBtnBca = document.querySelector('.copy-btn-bca');
const btnTextBca = `<i class="fa-solid fa-clone"></i>Salin Rekening`;
const copiedTextBca = `<i class="fa-solid fa-clone"></i>Berhasil di Salin`;

const spaceTextBca = setInterval(function () {
    copyBtnBca.addEventListener('click', function () {
        const noBca = document.querySelector('.no-bca').innerHTML;
        navigator.clipboard.writeText(noBca);

        copyBtnBca.innerHTML = copiedTextBca;
    });

    if (btnTextBca != copiedTextBca) {
        clearInterval();
        copyBtnBca.innerHTML = btnTextBca;
    };

}, 2000);

// create copy clipboard when user click button
const copyBtnBni = document.querySelector('.copy-btn-bni');
const btnTextBni = `<i class="fa-solid fa-clone"></i>Salin Rekening`;
const copiedTextBni = `<i class="fa-solid fa-clone"></i>Berhasil di Salin`;

const spaceTextBni = setInterval(function () {
    copyBtnBni.addEventListener('click', function () {
        const noBni = document.querySelector('.no-bni').innerHTML;
        navigator.clipboard.writeText(noBni);

        copyBtnBni.innerHTML = copiedTextBni;
    });

    if (btnTextBni != copiedTextBni) {
        clearInterval();
        copyBtnBni.innerHTML = btnTextBni;
    };

}, 2000);

// create copy clipboard when user click button
const copyBtnAddress = document.querySelector('.copy-btn-address');
const btnTextAddress = `<i class="fa-solid fa-clone"></i>Salin Alamat`;
const copiedTextAddress = `<i class="fa-solid fa-clone"></i>Berhasil di Salin`;

const spaceTextAddress = setInterval(function () {
    copyBtnAddress.addEventListener('click', function () {
        const address = document.querySelector('.address').innerHTML;
        navigator.clipboard.writeText(address);

        copyBtnAddress.innerHTML = copiedTextAddress;
    });

    if (btnTextAddress != copiedTextAddress) {
        clearInterval();
        copyBtnAddress.innerHTML = btnTextAddress;
    };

}, 2000);

// set count down time remaining as real time
const target = new Date('Jan 22 2023 08:00:00').getTime();

const countDown = setInterval(function () {
    const now = new Date().getTime();
    const gap = target - now;

    let day = Math.floor(gap / (1000 * 60 * 60 * 24));
    let hour = Math.floor(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minute = Math.floor(gap % (1000 * 60 * 60) / (1000 * 60));
    let second = Math.floor(gap % (1000 * 60) / 1000);

    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    document.querySelector('.days p').innerHTML = `${day} <br> Hari`;
    document.querySelector('.hours p').innerHTML = `${hour} <br> Jam`;
    document.querySelector('.minutes p').innerHTML = `${minute} <br> Menit`;
    document.querySelector('.seconds p').innerHTML = `${second} <br> Detik`;

    if (gap <= 0) {
        clearInterval(countDown);

        document.querySelector('.day-remaining').innerHTML = `Hitung Mundur Selesai <br> Terimakasih Atas Kehadiran Anda`;

        document.querySelector('.days p').innerHTML = `00 <br> Hari`;
        document.querySelector('.hours p').innerHTML = `00 <br> Jam`;
        document.querySelector('.minutes p').innerHTML = `00 <br> Menit`;
        document.querySelector('.seconds p').innerHTML = `00 <br> Detik`;
    };

}, 1000);