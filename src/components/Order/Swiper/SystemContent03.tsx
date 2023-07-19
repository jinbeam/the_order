import React from 'react'
import SystemBanner03 from '../../../assets/images/Systembanner/SystemBanner03.png'
import '../../../assets/css/Order.css'

function SystemContent03() {
  return (
    <div id="Content_Wrap">
      <div className="table_mockup">
        <img src={SystemBanner03} alt="" />
      </div>
      <p>
        옵션이 있는 주문의 경우 필수 옵션 선택 후 주문이 가능하도록 설정 가능
      </p>
    </div>
  )
}

export default SystemContent03
