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

        {team?.upcoming && team.upcoming.length > 0 && (
            <div className="upcomingMatches">
                <h2>UPCOMING MATCHES</h2>
                {team.upcoming.map((match, index) => (
                    <a href={match.match.url} target="_blank" rel="noreferrer" key={match.match.id || index} className="matchResult">
                        <div className="matchLeft">
                            <img src={match.event.logo} alt="" className="eventLogo" />
                            <div className="eventInfo">
                                <div className="eventName">{match.event.name}</div>
                                <div className="eventStage">{match.event.stage}</div>
                            </div>
                        </div>
                        
                        <div className="matchCenter">
                            <div className="matchTeamInfo">
                                <span className="teamName">{match.teams[0]?.name}</span>
                                <span className="teamTag">#{match.teams[0]?.tag}</span>
                            </div>
                            <img src={match.teams[0]?.logo} alt="" className="teamLogo" />
                            
                            <div className="matchScore upcoming">
                                TBD
                            </div>
                            
                            <img src={match.teams[1]?.logo} alt="" className="teamLogo" />
                            <div className="matchTeamInfo">
                                <span className="teamName">{match.teams[1]?.name}</span>
                                <span className="teamTag">#{match.teams[1]?.tag}</span>
                            </div>
                        </div>
                        
                        <div className="matchDate">
                            <div>{match.date}</div>
                            <div className="matchTime">{match.time || match.utc}</div>
                        </div>
                    </a>
                ))}
            </div>
        )}
        
        <div className="recentResults">
            <h2>RECENT RESULTS</h2>
            {team?.results?.slice(0,10)
            .map(result => {
                const isWin = result.teams[0].points > result.teams[1].points;
                
                return (
                    <a href={result.match.url} target="_blank" rel="noreferrer" key={result.id} className="matchResult">
                        <div className="matchLeft">
                            <img src={result.event.logo} alt="" className="eventLogo" />
                            <div className="eventInfo">
                                <div className="eventName">{result.event.name}</div>
                                <div className="eventStage">{result.event.stage}</div>
                            </div>
                        </div>
                        
                        <div className="matchCenter">
                            <div className="matchTeamInfo">
                                <span className="teamName">{result.teams[0].name}</span>
                                <span className="teamTag">#{result.teams[0].tag}</span>
                            </div>
                            <img src={result.teams[0].logo} alt="" className="teamLogo" />
                            
                            <div className={`matchScore ${isWin ? 'win' : 'loss'}`}>
                                {result.teams[0].points} : {result.teams[1].points}
                            </div>
                            
                            <img src={result.teams[1].logo} alt="" className="teamLogo" />
                            <div className="matchTeamInfo">
                                <span className="teamName">{result.teams[1].name}</span>
                                <span className="teamTag">#{result.teams[1].tag}</span>
                            </div>
                        </div>
                        
                        <div className="matchDate">
                            <div>{result.date}</div>
                            <div className="matchTime">{result.time}</div>
                        </div>
                    </a>
                );
            })}
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