import React from 'react'
import * as SC from '../style'
import { Link } from 'react-router-dom'

function About() {
  return (
    <SC.aboutSection>
        <SC.aboutDiv>
          <SC.aboutLeft>
            <p style={{fontSize: '10vh', fontWeight: '500'}}>Turning ideas into <br /> real life <span>Product</span> <br /> is my calling.</p>
          </SC.aboutLeft>

          <SC.aboutRight>
            <h3>Projects</h3>
            <div>
              <SC.Ul style={{display: 'grid'}}>
                <li><Link>Calculator</Link></li>
                <li><Link>Burger</Link></li>
                <li><Link>Converter</Link></li>
                <li><Link>Crypto Wallet</Link></li>
                <li><Link>Calculator</Link></li>
              </SC.Ul>
            </div>
          </SC.aboutRight>
        </SC.aboutDiv>
    </SC.aboutSection>
  )
}

export default About
