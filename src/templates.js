import {row, col} from './utils'

function title(block) {
    return row(col(`<h1>${block.value}</h1>`))
}

function text(block) {
    return `
    <div class="row">
        <div class="col-sm">
          <p>${block.value}</p>
        </div>
    </div>            
    `
}

function columns(block) {
    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
    return `
        <div class="row">
        ${html.join('')}
        </div>
    `
}

function image(block) {
    return `
        <div class="row">        
            <img src="${block.value}" alt="">
        </div>
    `
}

export const templates = {
    title,
    text,
    image,
    columns
}