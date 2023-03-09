import { useState } from 'react'
import React from 'react'
import { getPokemon } from './services'
import { Pokemon } from './model'


export default function Home() {
    const [obj, setObj] = useState({} as Pokemon)

    const init = () => {
        const search = document.getElementById('search') as HTMLInputElement
        if (search) {
            search.value = 'Pikachu'
        }
    }


    async function getData() {
        const search = document.getElementById('search') as HTMLInputElement
        if (search) {
            const res = await getPokemon(search.value)
            setObj(res)
        }
    }


    async function evolutions() {
        const name = obj?.evolutions?.[0]?.name
        const res = await getPokemon(name)
        setObj(res)
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


    const style = {
        table: {
            border: '1px solid black',
            width: '100%',
            textAlign: 'center' as 'center',
            padding: '10px',
        },
        td: {
            padding: '8px',
        }
    }

    setTimeout(() => {
        init()
    }, 100)

    return <div className='container'>
        <h1>Pokemon Search</h1>
        <input type="text" id='search' />
        <button onClick={getData}>Search</button>
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

            <table style={style.table}>
                <thead>
                    <th>
                        Number
                    </th>
                    <th>
                        Name
                    </th>

                    <th>
                        Weight
                    </th>
                    <th>
                        Height
                    </th>
                </thead>
                <tbody>
                </tbody>
                <td style={style.td}>
                    {obj?.number}
                </td>
                <td style={style.td}>
                    {obj?.name}
                </td>
                <td style={style.td}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div> Minimum : {obj?.weight?.minimum}</div>
                        <div> Maximum : {obj?.weight?.maximum}</div>

                    </div>
                </td>
                <td style={style.td}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div>  Minimum :  {obj?.height?.minimum}</div>
                        <div>  Maximum : {obj?.height?.maximum}</div>
                    </div>
                </td>
            </table>

            <table style={style.table}>
                <thead>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <tr>
                        <td style={style.td}>
                            <h2>
                                Attacks
                            </h2>
                        </td>
                        <td style={style.td}>
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
                        </td>
                    </tr>
                </tbody>
            </table>

            <table style={style.table}>
                <thead>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>

                    <tr>
                        <td >Classification</td>
                        <td style={style.td}>{obj.classification}</td>
                    </tr>
                    <tr>
                        <td >Types</td>
                        <td style={style.td}>{obj.types}</td>
                    </tr>
                    <tr>
                        <td >Resistant</td>
                        <td style={style.td}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                columnGap: '10px',
                                justifyContent: 'center',
                            }}>
                                {resistant()}
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td >Weaknesses</td>
                        <td style={style.td}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                {weaknesses()}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td >Flee Rate</td>
                        <td style={style.td}>{obj.fleeRate}</td>
                    </tr>
                    <tr>
                        <td >Max CP</td>
                        <td style={style.td}>{obj.maxCP}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div >

}
