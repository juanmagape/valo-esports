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
                <h1>{team.info.name}</h1>
                <p>Tag: {team.info.tag}</p>
                <img src={team.info.logo} alt={team.info.name} width={150} />
            </>
        )}

        {team?.players?.length > 0 && (
            <>
                <h2>Players</h2>
                <ul>
                    {team.players.map(player => (
                        <li key={player.id}>
                            <a href={player.url} target="_blank" rel="noreferrer">
                                {player.user}
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