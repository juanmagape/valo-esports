import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/teamdetails.css'

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
    <div className="teamDetails">
        <div className="teamInfo">
            {team?.info && (
                <>
                    <img src={team.info.logo} alt={team.info.name} className="iconTeam"/>
                    <div className="teamInfoText">
                        <h1>{team.info.name}</h1>
                        <p>{team.info.tag}</p>
                    </div>
                </>
            )}
        </div>

        <div className="upcomingMatch">
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
        </div>
        
        <div className="recentEvents">
        {team?.events?.slice(0,10)
        .map(event => (
            <div key={event.id}>
                <h2>{event.name}</h2>
                <p>{event.year}</p>
                <p>{event.results[0]}</p>
            </div>
        ))}
        </div>
        
        <div className="roster">
            <h2>Players</h2>
            <div className="players">
            {team?.players?.length > 0 && (
                <>
                    {team.players.map(player => (
                        <div key={player.id} className="playerCard">
                            <a href={player.url} target="_blank" rel="noreferrer">
                                <img src={player.img} alt="" />
                                <div className="playerInfo">
                                    <div className="playerName">{player.user}</div>
                                    <div className="playerRealName">{player.name}</div>
                                </div>
                            </a>
                        </div>
                    ))}
                </>
            )}
            </div>
        
            <h2>Staff</h2>
            <div className="staff">
            {team?.staff.map(staff => (
                <div key={staff.id} className="staffCard">
                    <a href={staff.url} target="_blank" rel="noreferrer">
                        <img src={staff.img} alt="" referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.target.onerror = null
                            e.target.src = "/default-avatar.png"}}
                        />
                        <div className="staffInfo">
                            <div className="staffName">{staff.name}</div>
                            <div className="staffRole">{staff.tag}</div>
                        </div>
                    </a>
                </div>
            ))}
            </div>
        </div>
    </div>
)

}

export default TeamDetails