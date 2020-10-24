import {model} from './model'
import {templates} from './templates'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {
    const toHTML = templates[block.type]

    console.log(toHTML)

    if (toHTML) {
        $site.insertAdjacentHTML('beforeend', toHTML(block))
    }
})