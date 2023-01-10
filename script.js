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
        backToTop.style.bottom = '25px';
    } else {
        backToTop.style.bottom = '-25%';
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
const copyRekBtnBca = document.querySelector('.copy-rek-btn-bca');

copyRekBtnBca.addEventListener('click', async () => {
    alert('Nomor Rekening Berhasil di Salin !!');
    const noRekBca = document.querySelector('.no-rek-bca').textContent;
    await navigator.clipboard.writeText(noRekBca);
});

// create copy clipboard when user click button
const copyRekBtnBni = document.querySelector('.copy-rek-btn-bni');

copyRekBtnBni.addEventListener('click', async () => {
    alert('Nomor Rekening Berhasil di Salin !!');
    const noRekBni = document.querySelector('.no-rek-bni').textContent;
    await navigator.clipboard.writeText(noRekBni);
});

// create copy clipboard when user click button
const copyAddress = document.querySelector('.copy-address-btn');

copyAddress.addEventListener('click', async () => {
    alert('Alamat Pengiriman Berhasil di Salin !!');
    const address = document.querySelector('.address').textContent;
    await navigator.clipboard.writeText(address);
});

// set count down time remaining as real time
const target = new Date('jan 22 2023 08:00:00').getTime();

function countDown() {
    const now = new Date().getTime();
    let gap = target - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let days = Math.floor(gap / day);
    let hours = Math.floor((gap % day) / hour);
    let min = Math.floor((gap % hour) / minute);
    let sec = Math.floor((gap % minute) / second);

    days = days < 10 ? '0' + days : days;
    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    document.querySelector('.days p').innerHTML = `${days} <br> Hari`
    document.querySelector('.hours p').innerHTML = `${hours} <br> Jam`
    document.querySelector('.minutes p').innerHTML = `${min} <br> Menit`
    document.querySelector('.seconds p').innerHTML = `${sec} <br> Detik`
}

setInterval(countDown, 1000);