import React, { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import SystemContent01 from './Swiper/SystemContent01.tsx'
import SystemContent02 from './Swiper/SystemContent02.tsx'
import SystemContent03 from './Swiper/SystemContent03.tsx'
import SystemContent04 from './Swiper/SystemContent04.tsx'
import SystemContent05 from './Swiper/SystemContent05.tsx'

function OrderSwiper({ orderActiveSlide, handleSlideChange }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(orderActiveSlide)
    }
  }, [orderActiveSlide])

  const handleSlideIndexChange = (swiper) => {
    const activeIndex = swiper.activeIndex
    handleSlideChange(activeIndex)
  }

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="OrderSwiper"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={handleSlideIndexChange}
    >
      <SwiperSlide>
        <SystemContent01 />
      </SwiperSlide>
      <SwiperSlide>
        <SystemContent02 />
      </SwiperSlide>
      <SwiperSlide>
        <SystemContent03 />
      </SwiperSlide>
      <SwiperSlide>
        <SystemContent04 />
      </SwiperSlide>
      <SwiperSlide>
        <SystemContent05 />
      </SwiperSlide>
    </Swiper>
  )
}

export default OrderSwiper
