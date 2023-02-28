import React from 'react'
import { Link } from 'react-router-dom'
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title" title='My Name'>Alaa Basher 👋</h1>
      <h3 className="home__subtitle" title='Position'>Frontend Developer</h3>
      <p className="home__description" title='سورة التوبة الاية 105'>﴾ And say: "Work (righteousness): Soon will Allah observe your work, and His Messenger, and the Believers: Soon will ye be brought back to the knower of what is hidden and what is open: then will He show you the truth of all that ye did."﴿</p>
      <Link to="/contact" className="button button--flex" title='Say hello'>Say Hello
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--container-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather button__icon feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></Link>
    </div>
  )
}

export default Data