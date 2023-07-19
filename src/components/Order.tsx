import React, { useState } from 'react'
import '../assets/css/Order.css'
import List from './Order/List.tsx'
import SystemSwiper from './Order/OrderSwiper.tsx'

function Order() {
  const [orderActiveSlide, setOrderActiveSlide] = useState(0)
  const [selectedItem, setSelectedItem] = useState(0)

  const handleSlideChange = (slideIndex) => {
    setOrderActiveSlide(slideIndex)
    setSelectedItem(slideIndex)
  }

  const handleItemClick = (index) => {
    setOrderActiveSlide(index)
    setSelectedItem(index)
  }

  return (
    <div className="System_Wrap">
      <div className="System_title">
        <p>THE order</p>
        <p>테이블 오더 시스템</p>
      </div>
      <div className="System_Wrapper">
        <List selectedItem={selectedItem} handleItemClick={handleItemClick} />
        <SystemSwiper
          orderActiveSlide={orderActiveSlide}
          handleSlideChange={handleSlideChange}
        />
      </div>
    </div>
  )
}

export default Order
