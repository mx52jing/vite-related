import star from '@assets/image/star.svg'
import dogImg from '@assets/image/dog1.webp'
import svgRaw from '@assets/image/star.svg?raw'
import userJson from '@assets/json/a.json'
import { age } from '@assets/json/a.json'
import './main.css'

export const createElement = (elementClass, elementTag = 'div') => {
    const element = document.createElement(elementTag)
    element.classList.add(elementClass)
    return element
}

export const $ = selector => document.querySelector(selector);

const rootEl = $('#root')
// 设置背景图
const bgImgBox = createElement('bg-img-box')
rootEl.insertAdjacentElement('beforeend', bgImgBox);

// 设置img标签
const img = createElement('img-dog', 'img')
img.src = dogImg
img.style.cssText = `width: 200px`
rootEl.insertAdjacentElement('beforeend', img);

// 测试 css 中通过 @import 引入的样式
const textBoldElement = createElement('text--bold')
textBoldElement.textContent = '我是加粗文案'
rootEl.insertAdjacentElement('beforeend', textBoldElement);

console.log({ star })

// 引入svg
console.log({ svgRaw })
const svgElBox = createElement('svg-content')
svgElBox.innerHTML = svgRaw
rootEl.insertAdjacentElement('beforeend', svgElBox)

// json
console.log(userJson)
console.log({ age })