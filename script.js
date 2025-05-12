const errorModal = createModal("errorModal");
const trailerModal = createModal("trailerModal");
const logInModal = createModal("logInModal");
const searchModal = createModal("searchModal");

const swiper = new Swiper('.swiper', {

    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    speed: 1000,
    slidesPerView: 'auto',
    centeredSlides: true,

    coverflowEffect: {
        depth: 200,
        rotate: 60,
        stretch: 40,
        slideShadows: true,
    },

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

window.onscroll = function () {

    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
        
        document.getElementById("navbar").classList.add("on-scroll-bg-gradient-blue");
    } else {
        document.getElementById("navbar").classList.remove("on-scroll-bg-gradient-blue");
    }
}


function createModal(id) {

    var modal = document.getElementById(id);

    if (modal != null) {

        return new bootstrap.Modal(modal);

    } else {

        return errorModal;
    }
}

function cardPlayIconHover(icon, onMouseOver) {

    if (onMouseOver) {

        icon.classList.add("fa-beat");

    } else {
        setTimeout(function () {
            icon.classList.remove("fa-beat");
        }, 500);
    }
}


var ytPlayer;

function onYouTubeIframeAPIReady() {

    ytPlayer = new YT.Player('ytPlayer', {
        height: '100%',
        width: '100%',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}


function onPlayerReady(event) {

    document.querySelectorAll(".card-play-icon").forEach(icon => {
        icon.classList.remove("fa-fade");
    });
}


function playTrailer(cardPlayIcon) {

    document.querySelectorAll(".card-play-icon").forEach(icon => {
        icon.removeAttribute("onclick");
    });

    if (ytPlayer != undefined) {

        ytPlayer.loadVideoById(cardPlayIcon.dataset.videoId);
        trailerModal.show();


    } else {

        errorModal.show();

        document.querySelectorAll(".card-play-icon").forEach(icon => {
            icon.setAttribute("onclick", "playTrailer(this)");
        });
    }


}


function hideTrailerModal() {

    document.querySelectorAll(".card-play-icon").forEach(icon => {
        icon.setAttribute("onclick", "playTrailer(this)");
    });

    ytPlayer.pauseVideo();
    trailerModal.hide();

}

function toggleIcon(element) {

    element.classList.toggle("open");
}



function signUpConfirm(element, isConfirm) {

    if (isConfirm) {

        element.style.pointerEvents = "none"; // prevent multiple clicks
        element.parentElement.classList.add("da-slide-left");

        trackSignUpProgress(true);

        setTimeout(function () {
            element.style.pointerEvents = "auto";
            element.parentElement.classList.add("d-none");
            element.parentElement.classList.remove("da-slide-left");
            element.parentElement.nextElementSibling.classList.add("da-slide-right");
            element.parentElement.nextElementSibling.classList.remove("d-none");

            setTimeout(function () {
                element.parentElement.nextElementSibling.classList.toggle("da-slide-show");

                setTimeout(function () {
                    element.parentElement.nextElementSibling.classList.remove("da-slide-right");
                    element.parentElement.nextElementSibling.classList.remove("da-slide-show");
                }, 300);

            }, 10);

        }, 300);

    } else {

        element.style.pointerEvents = "none"; // prevent multiple clicks
        element.parentElement.classList.add("da-slide-right");

        trackSignUpProgress(false);

        setTimeout(function () {
            element.style.pointerEvents = "auto";
            element.parentElement.classList.add("d-none");
            element.parentElement.classList.remove("da-slide-right");
            element.parentElement.previousElementSibling.classList.add("da-slide-left");
            element.parentElement.previousElementSibling.classList.remove("d-none");

            setTimeout(function () {
                element.parentElement.previousElementSibling.classList.toggle("da-slide-show");

                setTimeout(function () {
                    element.parentElement.previousElementSibling.classList.remove("da-slide-left");
                    element.parentElement.previousElementSibling.classList.remove("da-slide-show");
                }, 300);

            }, 10);

        }, 300);
    }
}

var signUpProgress = 0;

function trackSignUpProgress(isConfirm) {

    if (isConfirm) {

        signUpProgress += 1;
    } else {

        signUpProgress -= 1;
    }

    document.getElementById("signUpProgressBars").className = "progress-" + signUpProgress.toString();

    if (signUpProgress == 3) {

        document.getElementById("signUpFooter").style.visibility = "hidden";
        document.getElementById("logInFooter").style.visibility = "hidden";
        document.getElementById("signUpHeader").classList.remove("sign-up-header-show");

        setTimeout(function () {
            document.getElementById("signUpHeaderTitle").innerHTML = "Sign Up Completed";
            document.getElementById("signUpHeader").classList.add("sign-up-header-show");
        }, 300);
    }
}


function changeSignUpView(isLogin) {

    const signUpView = document.getElementById("signUpView");
    const logInView = document.getElementById("logInView");

    if (isLogin) {

        signUpView.classList.remove("da-show");

        setTimeout(function () {

            signUpView.classList.add("d-none");
            logInView.classList.remove("d-none");

            setTimeout(function () {

                logInView.classList.add("da-show");
            }, 10);


        }, 300);

    } else {

        logInView.classList.remove("da-show");

        setTimeout(function () {

            logInView.classList.add("d-none");
            signUpView.classList.remove("d-none");

            setTimeout(function () {

                signUpView.classList.add("da-show");
            }, 10);

        }, 300);

    }
}

//downpage poster adn video