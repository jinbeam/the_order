import React from 'react'
import BannerImage03 from '../../assets/images/banner/main_banner03.png'
import '../../assets/css/main.css'

function Banner03() {
  return (
    <div className="flex Banner_container_03">
      <div>
        <p className="big_title">
          260만원
          <br />
          비용절감/월
        </p>
        <span className="small_title">
          25개 테이블 펍 B, 더 오더 도입 후
          <br />
          매월 260만원 이상의 인건비 절감 효과
        </span>
      </div>
      <img className="banner_image03" src={BannerImage03} alt="" />
    </div>
  )
}

export default Banner03
