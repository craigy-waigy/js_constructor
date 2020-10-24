import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('here we go with some text', {}),
    new ColumnsBlock([
        '111111111',
        '222222222',
        '222222222',
        '222222222',
        '333333333'
    ], {}),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
]