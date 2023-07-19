import React from 'react'
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/images/Footer_Logo.png'
import '../assets/css/Footer.css'

function Footer() {
  return (
    <footer id="Footer_wrap">
      <div className="Footer_Logo">
        <img src={FooterLogo} alt="" />
      </div>
      <div className="Footer_wrapper">
        <div className="Footer_BlockFlex">
          <span>㈜더오더</span>
          <ul>
            <li>
              <Link to="/" className="text-decoration">
                서비스 이용약관
              </Link>
              ｜
            </li>
            <li>
              <Link to="/" className="text-decoration">
                개인정보 취급방침
              </Link>
            </li>
          </ul>
        </div>

        <div className="Footer_BlockFlex">
          <ul>
            <li>대표자명 : 임영식 대표</li>
            <li>사업자등록번호 : 170-81-03192</li>
            <li>
              주소 : 경기도 구리시 갈매순환로 166번길 46 금강펜테리움 IX타워
              A250호
            </li>
            <li>대표전화 : 031-869-2428</li>
            <li>팩스번호 : 031-869-2458</li>
            <li>이메일 THEorder@naver.com</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
