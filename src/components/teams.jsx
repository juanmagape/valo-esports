import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Teams() {
    const [teams, setTeams] = useState([])    
    const [region, setRegion] = useState('all')
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function fetchTeams() {

        try {
            setLoading(true)

            const response = await fetch(`https://vlr.orlandomm.net/api/v1/teams?region=${region}`)
            const data = await response.json();
            console.log(data)
            setTeams(data.data)
        } catch (error) {
            console.error('Error fetching teams:', error)
        } finally {
            setLoading(false)
        }}
        fetchTeams()
    }, [region])


    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
        <div>
            <button onClick={() => setRegion('eu')}>Europe</button>
            <button onClick={() => setRegion('na')}>North America</button>
            <button onClick={() => setRegion('br')}>Brasil</button>

            <button onClick={() => setRegion('ap')}>APAC</button>
            <button onClick={() => setRegion('kr')}>Korea</button>
            <button onClick={() => setRegion('cn')}>China</button>

            <button onClick={() => setRegion('jp')}>Japan</button>
            <button onClick={() => setRegion('lan')}>LAN</button>
            <button onClick={() => setRegion('las')}>LAS</button>

            <button onClick={() => setRegion('oce')}>Ocea</button>
            <button onClick={() => setRegion('gc')}>GC</button>
        </div>



        <div>
            {teams.map(team => (
                <div key={team.id}>
                    <img src={team.img} alt="" />
                    <h1>{team.name}</h1>
                    <p>{team.country}</p>

                    <Link to={`/teams/${team.id}`}>View Details</Link>
                </div>
            ))}
        </div>
        </>

    )
}

export default Teams