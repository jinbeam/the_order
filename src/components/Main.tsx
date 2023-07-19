import React, { useState } from 'react'
import '../assets/css/main.css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import Banner01 from './Swiper/Banner01.tsx'
import Banner02 from './Swiper/Banner02.tsx'
import Banner03 from './Swiper/Banner03.tsx'
import Banner04 from './Swiper/Banner04.tsx'
import Request from '../assets/images/icon/Request.png'
// import Popup from './Popup.tsx'
import Popup from './Popup.tsx'

function Main() {
  const [showPopup, setShowPopup] = useState(false)

  const handleRequestClick = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  return (
    <div className="Main_bg">
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={true}
        modules={[Pagination]}
        className="Main_Swiper"
      >
        <SwiperSlide>
          <Banner01 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner02 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner03 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner04 />
        </SwiperSlide>
      </Swiper>

      <div id="Request" onClick={handleRequestClick}>
        <img src={Request} alt="" />
        <div className="Request_wrap">
          <span>상담문의</span>
        </div>
      </div>

      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  )
}

export default Main
