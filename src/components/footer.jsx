import '../styles/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <p className="footerText">Built by <a href="https://juanmagape.vercel.app/" target='_blank' className='footerLink'>Cargol</a></p>
                <a href="https://github.com/juanmagape/valo-esports.git" target="_blank" rel="noreferrer" className="footerLink">
                    View Repository
                </a>
            </div>
        </footer>
    )
}

export default Footer