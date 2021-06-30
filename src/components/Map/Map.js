import React, { useEffect, useState } from 'react'
import styles from './Map.module.css'

import { getMap, getLands, getTowns, getUnites } from '../../services/Map'

const Map = () => {
    const [map, setMap] = useState([])
    const [lands, setLands] = useState([])
    const [towns, setTowns] = useState([])
    const [unites, setUnites] = useState([])
    const [infos, setInfos] = useState(false)

    const whatLand = (line, cel) => {
        if (lands.length === 0) {
            return ''
        } else {
           return styles[lands[line][cel].type]
        }
    }
    
    const getTown = (line, cel) => {
        if (Object.keys(towns[line][cel]).length !== 0) {
            let town = towns[line][cel]
            return <div className={styles.town}>{town.name.trim()}</div>
        } else {
            return ""
        }
    }

    const getUnit = (line, cel) => {
        if (Object.keys(unites[line][cel]).length !== 0) {
            let unite = unites[line][cel]
            return <div className={styles.unite}>{unite.symbol.trim()}</div>
        } else {
            return ""
        }
    }

    useEffect(() => {
        setMap(getMap())
        setLands(getLands())
        setTowns(getTowns())
        setUnites(getUnites())
    }, [])

    const showInfoLand = (line, cel) => {
        if (Object.keys(lands[line][cel]).length !== 0) {
            let land = lands[line][cel]
            
            let info = {
                type: "land",
                title: land.name,
                body: ''
            }
    
            setInfos(info)
        }
    }

    return (<>
        { infos && infos.type === "land" && <div className={styles.info}>
            <div className={styles.info_title}>
                {infos.title}
            </div>
            <div className={styles.info_body}>
                {infos.body}
            </div>
        </div> }
        <div className={`${styles.map}`} onMouseLeave={() => { setInfos(false)}}>
            {
                map.map((line, index1) => (
                    line.map((col, index2) => (
                        <div key={index1+"-"+index2} onMouseOver={showInfoLand(index1, index2)} className={`${styles.cel} ${whatLand(index1, index2)}`}>
                            { getTown(index1, index2) }
                            { getUnit(index1, index2) }
                        </div>
                    ))
                ))
            }
        </div>
    </>)
}

export default Map
