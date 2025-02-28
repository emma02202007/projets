// Attendre que le DOM soit chargé avant d'attacher les événements
document.addEventListener("DOMContentLoaded", function () {
    let currentAudio = null; // Stocke la musique en cours
    let volumeSlider = document.getElementById("volumeSlider");

    // Fonction pour jouer la musique
    function playMusic(num) {
        // Arrêter la musique en cours si une autre est jouée
        if (currentAudio) {
            currentAudio.pause(); // Met en pause la musique en cours
            currentAudio.currentTime = 0; // Remet la musique à zéro
        }

        // Jouer la nouvelle musique
        currentAudio = document.getElementById("musique" + num);
        if (currentAudio) {
            currentAudio.volume = volumeSlider.value; // Applique le volume actuel
            currentAudio.play(); // Joue la nouvelle musique
        }
    }

    // Fonction pour arrêter la musique
    function stopMusic() {
        if (currentAudio) {
            currentAudio.pause(); // Met la musique en pause
            currentAudio.currentTime = 0; // Remet à zéro la musique
            currentAudio = null; // Réinitialise la musique en cours
        }
    }

    // Gérer le volume en temps réel
    if (volumeSlider) {
        volumeSlider.addEventListener("input", function () {
            if (currentAudio) {
                currentAudio.volume = volumeSlider.value; // Change le volume
            }
        });
    }

    // Exposer les fonctions au global
    window.playMusic = playMusic;
    window.stopMusic = stopMusic;
});