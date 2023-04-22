import React from 'react';
import "./Modal.css";

function Modal({closeModal,onChange}) {
  return (
    <div className="modalBackground">
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title1'>Sign In</div>
            <div className='body'>
                <form action="#">
                    <h2>Enter Name:</h2>
                    <input type="text" placeholder='ex: John Doe'/>
                    <h2>Enter Email:</h2>
                    <input type="email" placeholder='ex: John@Doe.com'/>
                    <h2>Enter Mobile Number:</h2>
                    <input type="text" placeholder='1234567890'/>
                    <h2>Movie Watching Date:</h2>
                    <input type="date" name="datime" id="datim" />
                    <h2>Rating:</h2>
                    <fieldset id="grp1">   
                    <input type="radio" name="ratings" id="rad1" value="1" onChange={(e) => onChange(e.target.value)} />
                    <label htmlFor="rad1">1</label>
                    <input type="radio" name="ratings" id="rad2" value="2" onChange={(e) => onChange(e.target.value)}/>
                    <label htmlFor="rad2">2</label>
                    <input type="radio" name="ratings" id="rad3"  value="3" onChange={(e) => onChange(e.target.value)}/>
                    <label htmlFor="rad3">3</label>
                    <input type="radio" name="ratings" id="rad4" value="4" onChange={(e) => onChange(e.target.value)} />
                    <label htmlFor="rad4">4</label>
                    <input type="radio" name="ratings" id="rad5" value="5" onChange={(e) => onChange(e.target.value)} />
                    <label htmlFor="rad5">5</label>
                    </fieldset>
                </form>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} id="cancelBtn">Cancel</button>
                <button onClick={() => {closeModal(false)} }>Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default Modal