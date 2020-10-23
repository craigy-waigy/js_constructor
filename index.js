

window.onload = function() {
    const model = [
        {type: 'title', value: 'Hello World from JS'},
        {type: 'text', value: 'here we go with some text'},
        {type: 'columns', value: [
                '111111111',
                '222222222',
                '222222222',
                '222222222',
                '333333333'
            ]}
    ]

    const $site = document.querySelector('#site')

    model.forEach(block => {
        let html = ''

        if (block.type === 'title') {
            html = `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
        `
        } else if (block.type === 'text') {
            html = `
        <div class="row">
            <div class="col-sm">
              <p>${block.value}</p>
            </div>
        </div>            
        `
        } else if (block.type === 'columns') {
            html = `<div class="row">`;
            block.value.forEach( column => {
                html +=
                `
                <div class="col-sm">
                    <p>${column}</p>
                </div>
                `
            })
            html += `</div>`;
        }

        $site.insertAdjacentHTML('beforeend', html)
    })
};