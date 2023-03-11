import { useState } from 'react'
import React from 'react'
import { getPokemon, responseHandler } from '../service'
import { Pokemon } from '../model'

export default function Home() {
    const [obj, setObj] = useState({} as Pokemon)
    const [searchValue, setSearchValue] = useState('Pikachu')
    

    const getData = async () => {
        const pokemon = getPokemon(searchValue)
        const res = await responseHandler(pokemon) as Pokemon
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

    const evolutionsList = () => {
        const arr = []
        if (obj?.evolutions?.length === 0) return (<div> Can\'t Evolution</div>)
        for (let i = 0; i < obj?.evolutions?.length; i++) {
            arr.push(<a style={{
                fontWeight: 'bold',
                textDecoration: 'underline',
                cursor: 'pointer',
                color: 'blue',
                margin: '0 10px',
            }} onClick={async () => {
                setSearchValue(obj?.evolutions?.[i]?.name)
                const pokemon = getPokemon(obj?.evolutions?.[i]?.name)
                const res = await responseHandler(pokemon) as Pokemon
                if (res) {
                    setObj(res)
                }
       
            }}>{obj?.evolutions?.[i]?.name}</a>)
        }
        return <div>{arr}</div>
    }



    const handleChange = (event) => {
        // searchValue = event.target.value
        setSearchValue(event.target.value)
    }

    return (
        <div className='container'>
            <h1>Pokemon Search</h1>
            <input type="text" id='search' value={searchValue} onChange={handleChange} />
            <button onClick={getData}>Search </button>
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <h2 style={{ textAlign: 'center' }}>Result</h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridGap: '10px',
                    padding: '10px',
                }}>
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Number</h2>
                        <div>{obj?.number}</div>
                    </div>
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Name</h2>
                        <div>{obj?.name}</div>
                    </div>

                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Weight</h2>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <div> Minimum : {obj?.weight?.minimum}</div>
                            <div> Maximum : {obj?.weight?.maximum}</div>

                        </div>
                    </div>
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
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
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
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
                            <div style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
        justifyContent: 'center',
    }}>
                                {resistant()}
                            </div>
                        </div>
                        <div style={{
                            border: '1px solid black',
                            padding: '10px',
                            textAlign: 'center',
                        }}>
                            <h2>weaknesses</h2>
                            <div style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '10px',
        justifyContent: 'center',
    }}>
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
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Classification</h2>
                        <div>{obj.classification}</div>
                    </div>

                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
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
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Max CP</h2>
                        <div>{obj.maxCP}</div>
                    </div>
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Flee Rate</h2>
                        <div>{obj.fleeRate}</div>
                    </div>
                    <div style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
    }}>
                        <h2>Evolution</h2>
                        <div>{evolutionsList()}</div>
                    </div>
                </div>
            </div >
        </div >)

}
