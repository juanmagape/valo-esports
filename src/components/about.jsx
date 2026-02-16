import '../styles/about.css'

function About() {
    return (
        <div className="aboutContainer">
            <div className="aboutContent">
                <h1 className="aboutTitle">About This Project</h1>
                
                <div className="aboutSection">
                    <p className="aboutDescription">
                        This is a web application dedicated to tracking competitive Valorant esports. 
                        Browse teams from different regions, view detailed rosters, check recent match 
                        results, and stay updated on upcoming matches.
                    </p>
                </div>

                <div className="aboutSection">
                    <h2 className="aboutSubtitle">Features</h2>
                    <ul className="featuresList">
                        <li>Explore teams by region (Europe, North America, Brazil, APAC, and more)</li>
                        <li>View detailed team information including current rosters and staff</li>
                        <li>Track recent match results and upcoming fixtures</li>
                        <li>Access player profiles and statistics</li>
                    </ul>
                </div>

                <div className="aboutSection">
                    <h2 className="aboutSubtitle">Technology</h2>
                    <p className="aboutDescription">
                        This project is built using the{' '}
                        <a href="https://vlresports.vercel.app/" target="_blank" rel="noreferrer" className="aboutLink">
                            Valorant Esports API
                        </a>
                        , a public API developed by Orloxx that extracts real-time data from vlr.gg. 
                        This allows access to match results, player profiles, team details, and the 
                        latest statistics from the world of Valorant esports.
                    </p>
                </div>

                <div className="aboutSection disclaimer">
                    <p className="disclaimerText">
                        This project is not affiliated with or endorsed by vlr.gg, Riot Games, or any 
                        associated entities. It is an independent tool created as a personal web 
                        development project using React.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About