import { lands } from './datas/lands'
import { towns } from './datas/towns'
import { unites } from './datas/unites'

export const getMap = () => {
    const map = []

    for (let i = 0; i<10; i++) {
        let j = []
        for (let k = 0; k<10; k++) {
            j.push(i+" - "+k)
        }
        map.push(j)
    }

    return map
}

export const getLands = () => {
    return lands
}

export const getTowns = () => {
    return towns
}

export const getUnites = () => {
    return unites;
}