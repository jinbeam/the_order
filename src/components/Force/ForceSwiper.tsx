import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useEffect } from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

import SwiperContents01 from './Swiper/SwiperContents01.tsx'
import SwiperContents02 from './Swiper/SwiperContents02.tsx'
import SwiperContents03 from './Swiper/SwiperContents03.tsx'
import SwiperContents04 from './Swiper/SwiperContents04.tsx'

function ForceSwiper({ ForceActiveSlide }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(ForceActiveSlide)
    }
  }, [ForceActiveSlide])

  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      <SwiperSlide>
        <SwiperContents01 />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContents02 />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContents03 />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperContents04 />
      </SwiperSlide>
    </Swiper>
  )
}
export default ForceSwiper
