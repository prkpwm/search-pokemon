import { useState } from 'react'
import React from 'react'
import { getPokemon, responseHandler } from './services'
import { Pokemon } from './model'

export default function Home() {
    const [obj, setObj] = useState({} as Pokemon)

    const init = () => {
        const search = document.getElementById('search') as HTMLInputElement
        if (search) search.value = 'Pikachu'
    }

    const getData = async () => {
        const search = document.getElementById('search') as HTMLInputElement
        if (search) {
            const pokemon = getPokemon(search.value)
            const res = await responseHandler(pokemon)
            if (res) {
                setObj(res)
            }
        }
    }

    const evolutions = async () => {
        const name = obj?.evolutions?.[0]?.name
        const pokemon = getPokemon(name)
        const res = await responseHandler(pokemon)
        if (res) {
            setObj(res)
        }
    }


    const fast = () => {
        const arr = []
        for (let i = 0; i < obj?.attacks?.fast?.length; i++) {
            arr.push(<div>
                <p>Name: {obj?.attacks?.fast?.[i]?.name}</p>
                <p>Type: {obj?.attacks?.fast?.[i]?.type}</p>
                <p>Damage: {obj?.attacks?.fast?.[i]?.damage}</p>
            </div>)
        }
        return <div> <h2>Fast</h2>
            <div style={{ display: 'flex', columnGap: '20px', }}> {arr} </div>
        </div>
    }

    const special = () => {
        const arr = []
        for (let i = 0; i < obj?.attacks?.special?.length; i++) {
            arr.push(<div>
                <p>Name: {obj?.attacks?.special?.[i]?.name}</p>
                <p>Type: {obj?.attacks?.special?.[i]?.type}</p>
                <p>Damage: {obj?.attacks?.special?.[i]?.damage}</p>
            </div>)
        }
        return <div> <h2>Special</h2>
            <div style={{ display: 'flex', columnGap: '20px', }}> {arr} </div>
        </div>
    }

    const weaknesses = () => {
        const arr = []
        for (let i = 0; i < obj?.weaknesses?.length; i++) {
            arr.push(obj?.weaknesses?.[i])
        }
        return <div>{arr.join(', ')}</div>
    }

    const resistant = () => {
        const arr = []
        for (let i = 0; i < obj?.resistant?.length; i++) {
            arr.push(obj?.resistant?.[i])
        }
        return <div>{arr.join(', ')}</div>
    }

    const block = {
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }

    const block_center = {
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
        justifyContent: 'center',
    }

    setTimeout(() => {
        init()
    }, 1000)


    return (
        <div className='container'>
            <h1>Pokemon Search</h1>
            <input type="text" id='search' />
            <button onClick={getData}>Search </button>
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <h2 style={{ textAlign: 'center' }}>Result</h2>
                    <div>
                        <button style={{ backgroundColor: 'green', color: '#fff', fontWeight: 'bold' }} onClick={evolutions} id="search-evolutions">Evolution</button>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridGap: '10px',
                    padding: '10px',
                }}>
                    <div style={block}>
                        <h2>Number</h2>
                        <div>{obj?.number}</div>
                    </div>
                    <div style={block}>
                        <h2>Name</h2>
                        <div>{obj?.name}</div>
                    </div>

                    <div style={block}>
                        <h2>Weight</h2>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div> Minimum : {obj?.weight?.minimum}</div>
                            <div> Maximum : {obj?.weight?.maximum}</div>

                        </div>
                    </div>
                    <div style={block}>
                        <h2>Height</h2>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div>  Minimum :  {obj?.height?.minimum}</div>
                            <div>  Maximum : {obj?.height?.maximum}</div>
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '4fr 1fr',
                    gridGap: '10px',
                    padding: '10px',
                }}>
                    <div style={block}>
                        <h2>Attacks</h2>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}>
                            <div>
                                {fast()}
                            </div>
                            <div>
                                {special()}
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: '10px',
                        height: '100%',
                    }}>

                        <div style={{
                            border: '1px solid black',
                            padding: '10px',
                            textAlign: 'center',

                        }}>
                            <h2>Resistant</h2>
                            <div style={block_center}>
                                {resistant()}
                            </div>
                        </div>
                        <div style={{
                            border: '1px solid black',
                            padding: '10px',
                            textAlign: 'center',
                        }}>
                            <h2>weaknesses</h2>
                            <div style={block_center}>
                                {weaknesses()}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: '10px',
                    padding: '10px',
                }}>
                    <div style={block}>
                        <h2>Classification</h2>
                        <div>{obj.classification}</div>
                    </div>

                    <div style={block}>
                        <h2>Types</h2>
                        <div>{obj.types}</div>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridGap: '10px',
                    padding: '10px',
                }}>
                    {/* maxCP,fleeRate,evolution */}
                    <div style={block}>
                        <h2>Max CP</h2>
                        <div>{obj.maxCP}</div>
                    </div>
                    <div style={block}>
                        <h2>Flee Rate</h2>
                        <div>{obj.fleeRate}</div>
                    </div>
                    <div style={block}>
                        <h2>Evolution</h2>
                        <div>{obj.evolutions?.[0]?.name ?? 'Can\'t Evolution'}</div>
                    </div>
                </div>
            </div >
        </div >)

}
