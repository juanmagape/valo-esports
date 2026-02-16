import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BlinkBlur } from 'react-loading-indicators'
import '../styles/teams.css'

function Teams() {
    const [teams, setTeams] = useState([])    
    const [region, setRegion] = useState('eu')
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
            }
        }
        fetchTeams()
    }, [region])

if (loading) {
    return (
        <div className="loading">
            <BlinkBlur color={["#990002", "#cc0003", "#ff0004", "#ff3336"]} />
        </div>
    )
}

    const regions = [
        { value: 'eu', label: 'Europe' },
        { value: 'na', label: 'North America' },
        { value: 'br', label: 'Brazil' },
        { value: 'ap', label: 'APAC' },
        { value: 'kr', label: 'Korea' },
        { value: 'ch', label: 'China' },
        { value: 'jp', label: 'Japan' },
        { value: 'lan', label: 'LAN' },
        { value: 'las', label: 'LAS' },
        { value: 'oce', label: 'Oceania' },
        { value: 'gc', label: 'Game Changers' }
    ]

    return (
        <div className="teamsContainer">
            <div className="regionsFilter">
                <h2>REGIONS</h2>
                <div className="regionButtons">
                    {regions.map(r => (
                        <button 
                            key={r.value}
                            onClick={() => setRegion(r.value)}
                            className={region === r.value ? 'active' : ''}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="teamsGrid">
                {teams.map(team => (
                    <Link to={`/teams/${team.id}`} key={team.id} className="teamCard">
                        <img src={team.img} alt={team.name} className="teamCardLogo" referrerPolicy="no-referrer" />
                        <div className="teamCardInfo">
                            <h3 className="teamCardName">{team.name}</h3>
                            <p className="teamCardCountry">{team.country}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Teams