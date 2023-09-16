import React , {useState} from 'react'
import "./mailList.css"

function MailList() {
  const [mail, setMail] = useState("")
  return (
    <div className='mailList'>
      <div className="mailListContainer">
        <div className="mailListTitle">
          <h1>Save Time, Save Money!</h1>
          <h2>Sign up and we'll send the best deals to you.</h2>
        </div>
        <div className="mailBox">
          <input type="email" placeholder='Your Email' value={mail} onChange={(e) => setMail(e.target.value)}/>
          <button>Subscribe</button>
        </div>
        <div className="checkBox">
          <input type="checkbox" name="app" id="app" />
          <span>Send me a link to get the FREE MarBooking.com app!</span>
        </div>
      </div>
    </div>
  )
}

export default MailList