const errorModal = createModal("errorModal");
const trailerModal = createModal("trailerModal");

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