import React from 'react'
import BannerImage04 from '../../assets/images/banner/main_banner04.png'
import '../../assets/css/main.css'

function Banner04() {
  return (
    <div className="flex Banner_container_04">
      <img className="banner_image04" src={BannerImage04} alt="" />
      <div>
        <p className="big_title">
          130%
          <br />
          회전율 상승
        </p>
        <span className="small_title">
          20개 테이블을 운영하는 C 치킨집은 <br />
          더 오더 도입 후 테이블 회전율을 <br />
          130%대까지 향상시킬 수 있었습니다
        </span>
      </div>
    </div>
  )
}

export default Banner04
