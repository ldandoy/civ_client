import React, { useEffect, useState } from 'react'
import styles from './Map.module.css'

import { getMap, getLands, getTowns, getUnites } from '../../services/Map'

const Map = () => {
    const [map, setMap] = useState([])
    const [lands, setLands] = useState([])
    const [towns, setTowns] = useState([])
    const [unites, setUnites] = useState([])
    const [infos, setInfos] = useState(false)

    const [selectedUnite, setSelectedUnite] = useState({})
    const [selectedTown, setSelectedTown] = useState({})

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
            let body = ''
            let showInfo = false

            if (Object.keys(towns[line][cel]).length !== 0) {
                body = "Ville de '" + towns[line][cel].name + "'"
                showInfo = true
                setSelectedTown(towns[line][cel])
            } else if (Object.keys(unites[line][cel]).length !== 0) {
                body = "Unité de '" + unites[line][cel].name + "'"
                showInfo = true
                setSelectedUnite(unites[line][cel])
            } else {
                body = "Simple terrain"
                showInfo = true
            }

            if (showInfo) {
                let info = {
                    type: "land",
                    title: land.type[0].toUpperCase() + land.type.slice(1),
                    body: body
                }
                setInfos(info)
            }
        }
    }

    const isSelected = (line, cel) => {
        if (Object.keys(towns[line][cel]).length !== 0) {
            let town = towns[line][cel]
            if (town === selectedTown) {
                return styles.selected
            } else {
                return ""
            }
        }

        if (Object.keys(unites[line][cel]).length !== 0) {
            let unite = unites[line][cel]
            if (unite === selectedUnite) {
                return styles.selected
            } else {
                return ""
            }
        }

        return ""
    }

    return (<div className={styles.mapContainer}>
        <div className={styles.panel}>
            { Object.keys(selectedUnite).length !== 0 && <div className={styles.info}>
                <div className={styles.info_title}>
                    {selectedUnite.name}
                </div>
                <div className={styles.info_body}>
                    
                </div>
            </div> }

            { Object.keys(selectedTown).length !== 0 && <div className={styles.info}>
                <div className={styles.info_title}>
                    {selectedTown.name}
                </div>
                <div className={styles.info_body}>
                    
                </div>
            </div> }

            { infos && infos.type === "land" && <div className={styles.info}>
                <div className={styles.info_title}>
                    {infos.title}
                </div>
                <div className={styles.info_body}>
                    {infos.body}
                </div>
            </div> }
        </div>
        <div className={`${styles.map}`}>
            {
                map.map((line, index1) => (
                    line.map((col, index2) => (
                        <div key={index1+"-"+index2} onClick={(e) => { showInfoLand(index1, index2) }} className={`${styles.cel} ${isSelected(index1, index2)} ${whatLand(index1, index2)}`}>
                            { getTown(index1, index2) }
                            { getUnit(index1, index2) }
                        </div>
                    ))
                ))
            }
        </div>
    </div>)
}

export default Map
