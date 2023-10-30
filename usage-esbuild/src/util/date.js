import { get } from "lodash-es";

const data = {
    classes: {
        score: 2
    }
}
export const getNowTime = () => Date.now();
export const getScore = () => get(data, 'classes.score')