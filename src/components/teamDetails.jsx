import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TeamDetails() {
    const { id } = useParams()
    const [team, setTeam] = useState(null)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        async function fetchTeam() {
            try {
                setLoading(true)
                const response = await fetch(`https://vlr.orlandomm.net/api/v1/teams/${id}`)
                const data = await response.json();
                console.log(data)
                setTeam(data.data)
            }
            catch (error) {
                console.error('Error fetching team details:', error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchTeam()
    }
    , [id])
    
    if (loading) {
        return <h1>Loading...</h1>
    }

return (
    <div>
        {team?.info && (
            <>
                <img src={team.info.logo} alt={team.info.name} width={150} />
                <h1>{team.info.name}</h1>
                <p>{team.info.tag}</p>
            </>
        )}

        {team?.upcoming?.map((match, index) => (
            <div key={match.match.id || index}>
                <h3>{match.event.name}</h3>

                <p>
                    {match.teams[0]?.tag} vs {match.teams[1]?.tag}
                </p>

                <p>{match.utc}</p>

                <a href={match.match.url} target="_blank" rel="noreferrer">
                    View Match
                </a>
            </div>
        ))}


        {team?.events?.slice(0,10)
        .map(event => (
            <div key={event.id}>
                <h2>{event.name}</h2>
                <p>{event.year}</p>
                <p>{event.results[0]}</p>
            </div>
        ))}

        {team?.players?.length > 0 && (
            <>
                <h2>Players</h2>
                <ul>
                    {team.players.map(player => (
                        <li key={player.id}>
                            <a href={player.url} target="_blank" rel="noreferrer">
                                <img src={player.img} alt="" />
                                {player.user}
                                {player.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </>
        )}
    </div>
)

}

export default TeamDetails