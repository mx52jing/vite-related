import { get } from 'lodash-es'

const data = {
    classes: {
        one: {
            name: '小明'
        }
    }
}
console.log(get(data, 'classes.one.name'), '============')