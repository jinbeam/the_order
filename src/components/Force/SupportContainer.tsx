import React from 'react'
import '../../assets/css/Support.css'
import SupportBanner01 from '../../assets/images/SupportBanner/SupportBanner01.png'
import SupportBanner02 from '../../assets/images/SupportBanner/SupportBanner02.png'
import SupportBanner03 from '../../assets/images/SupportBanner/SupportBanner03.png'
import SupportBanner04 from '../../assets/images/SupportBanner/SupportBanner04.png'
import SupportBanner05 from '../../assets/images/SupportBanner/SupportBanner05.png'
function SupportContainer() {
  return (
    <div className="SupportContainer">
      <img src={SupportBanner01} alt="" />
      <img src={SupportBanner02} alt="" />
      <img src={SupportBanner03} alt="" />
      <img src={SupportBanner04} alt="" />
      <img src={SupportBanner05} alt="" />
    </div>
  )
}

export default SupportContainer
