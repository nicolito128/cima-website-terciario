const userSpan = $('#userNameSpan')
const sectionSpan = $('#sectionNameSpan')

if (userSpan) {
    userSpan.textContent = sessionStorage.getItem('user')
}

if (sectionSpan) {
    sectionSpan.textContent = sessionStorage.getItem('section')
}