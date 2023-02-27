import React from 'react'
import { UilFacebookF, UilLinkedinAlt, UilGithubAlt } from '@iconscout/react-unicons';

const Social = () => {
    return (
        <div className="home__section">
            <a href="https://www.facebook.com/alaayasser741/" className="home__social-icon" target="_blank"><UilFacebookF /></a>
            <a href="https://www.linkedin.com/in/alaayasser741/" className="home__social-icon" target="_blank"><UilLinkedinAlt /></a>
            <a href="https://github.com/alaayasser741" className="home__social-icon" target="_blank"><UilGithubAlt /></a>
        </div>
    )
}

export default Social