import React, { useState } from 'react'
import '../../assets/css/Force.css'
import ForceSwiper from './ForceSwiper.tsx'
import hover01 from '../../assets/images/icon/hover/hover01.png'

import hover03 from '../../assets/images/icon/hover/hover03.png'

import hover04 from '../../assets/images/icon/hover/hover04.png'

import hover05 from '../../assets/images/icon/hover/hover05.png'

function ForceContainer() {
  const [ForceActiveSlide, setForceActiveSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(null)

  const items = [
    {
      title: '메인 화면',
      image: hover01,
    },
    {
      title: '매장 테이블 설정',
      image: hover01,
    },
    {
      title: '메뉴 설정',
      image: hover03,
    },
    {
      title: `테이블별 주문 현황`,
      image: hover04,
    },
    {
      title: '매출 통계',
      image: hover05,
    },
  ]

  const handleItemHover = (index) => {
    setIsHovered(index)
  }

  const ForceSlideClick = (slideIndex) => {
    setForceActiveSlide(slideIndex)
  }

  return (
    <div>
      <div className="Force_Wrapper">
        <div className="Force_contents">
          <p>포스 시스템</p>
          <div className="Force_items">
            {items.map((item, index) => (
              <div
                key={index}
                className={`item ${isHovered === index ? 'hovered' : ''}`}
                onClick={() => ForceSlideClick(index)}
                onMouseEnter={() => handleItemHover(index)}
                onMouseLeave={() => handleItemHover(null)}
              >
                {isHovered === index ? (
                  <img src={item.image} alt={item.title} />
                ) : (
                  <span>{item.title}</span>
                )}
              </div>
            ))}
          </div>
          <span>이외 매장관리와 결제, 통계를 위한 기능을 모두 제공합니다.</span>
        </div>
        <ForceSwiper ForceActiveSlide={ForceActiveSlide} />
      </div>
    </div>
  )
}

export default ForceContainer
