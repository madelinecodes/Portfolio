import React from 'react'
import githubMark from '../assets/images/github-logo.svg'
// import mail from '../assets/images/mail.png'


class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><span role="img" aria-label="github"><a href="https://github.com/madelinecodes" className="icon" ><img src={githubMark} alt="github" /></a></span></li>
                        <li><span role="img" aria-label="mail"><a href="madelinemhealey@gmail.com" className="icon"><span className="icon fas fa-envelope"></span></a></span></li>
                        <li><span role="img" aria-label="glitch"><a href="https://glitch.com/@madelinecodes" className="icon"><input type="image" src='https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-day.svg' alt="Glitch" /></a></span></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Footer
