import React from 'react'
import '../assets/css/Force.css'
import '../assets/css/Support.css'
import ForceContainer from './Force/ForceContainer.tsx'
import SupportContainer from './Force/SupportContainer.tsx'

function Force() {
  return (
    <div className="Force_wrap">
      <div>
        <div>
          <div className="Force_title">
            <p>THE order</p>
            <p>포스 시스템</p>
          </div>
          <ForceContainer />
        </div>

        <div>
          <div className="Support_title">
            <p>THE order</p>
            <p>간편결제&배달플랫폼 지원</p>
            <span>
              일반 결제는 물론, 주요 간편결제 플랫폼과 배달 플랫폼 연동을
              지원합니다
            </span>
          </div>
          <SupportContainer />
        </div>
      </div>
    </div>
  )
}

export default Force
