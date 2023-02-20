const openOverlayButtons = document.querySelectorAll('[data-overlay-target]')
const closeOverlayButtons = document.querySelectorAll('[data-close-button]')
const overlaybackground = document.getElementById('overlaybackground')
            
openOverlayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const overlay = document.querySelector(button.dataset.overlayTarget)
        openOverlay(overlay)
    })
})
            
closeOverlayButtons.forEach(button => {
    button.addEventListener('click', () => {
        const overlay = button.closest('.overlay')
        closeOverlay(overlay)
    })
})
            
function openOverlay(overlay) {
    if (overlay == null) return
    overlay.classList.add('active')
    overlaybackground.classList.add('active')
}
            
function closeOverlay(overlay) {
    if (overlay == null) return
    overlay.classList.remove('active')
    overlaybackground.classList.remove('active')
}