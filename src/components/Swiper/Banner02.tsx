import React from 'react'
import BannerImage02 from '../../assets/images/banner/main_banner02.png'
import '../../assets/css/main.css'

function Banner02() {
  return (
    <div className="flex Banner_container_02">
      <img className="banner_image02" src={BannerImage02} alt="" />
      <div>
        <p className="big_title">
          25%
          <br />
          효율 향상
        </p>
        <span className="small_title">
          40개 테이블 갈빗집 A,
          <br />더 오더 도입 후 7명 이하던 업무를 5명으로
        </span>
      </div>
    </div>
  )
}

export default Banner02
