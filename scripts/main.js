let username, sectionName

const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

$('#submit-btn')?.addEventListener('click', function (event) {
    event.preventDefault()
    let user = $('#username').value
    let section = $('#area-selector').value

    sessionStorage.setItem('user', user)
    sessionStorage.setItem('section', section)

    const link = document.createElement('a')
    link.href = `/pages/${section}.html`
    link.click()
})
