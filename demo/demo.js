const range_slider = require('..')
const range = range_slider({ min: 0, max: 10 })
document.body.innerHTML = '<h1> range slider </h1>'

const main = document.createElement('div')
main.classList.add('demo')

const style = document.createElement('style')
style.textContent = `
 .demo {
    padding: 50px;
 }
`

main.append(range)
document.body.append(main, style)
