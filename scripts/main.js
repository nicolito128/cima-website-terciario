let username, sectionName

const $ = (s) => document.querySelector(s)
const $$ = (s) => document.querySelectorAll(s)

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}

$('#submit-btn')?.addEventListener('click', function (event) {
    event.preventDefault()
    let user = $('#username').value
    let section = toTitleCase($('#area-selector').value)

    sessionStorage.setItem('user', user)
    sessionStorage.setItem('section', section)

    const link = document.createElement('a')
    link.href = `/pages/${section}.html`
    link.click()
})
