import React from 'react'
import "./../FooterEnd/FooterEnd.css"

import logo from "./../../../Assets/logosalesforce.svg"
function FooterEnd() {
  return (
    <div className='footer_end_main_div'>
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <img src={logo} className='logo_footer' />

                <div className='d-flex flex-row'>
                    <p className='black_para_footer'>© 2023 </p>
                    <p className='blue_para_footer'>Salesforce CRM Systems </p>
                    <p className='black_para_footer'>all rights reserved. </p>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default FooterEnd
