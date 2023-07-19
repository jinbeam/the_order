import React, { useRef } from 'react'

import '../assets/css/Popup.css'
import CloseBtn from '../assets/images/icon/CloseBtn.png'
import emailjs from '@emailjs/browser'

function Popup({ onClose }) {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    const industryValue = form.current.industry.value // 선택된 업종 값
    const placeValue = form.current.Place.value // 선택된 장소 값

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_API_KEY, // 환경 변수 사용
        process.env.REACT_APP_TEMPLATE_API_KEY, // 환경 변수 사용
        e.target,
        process.env.REACT_APP_PUBLIC_API_KEY, // 환경 변수 사용
      )
      .then((result) => {
        alert('상담신청이 접수되었습니다.')
        form.current.reset()
      })
      .catch((error) => {
        console.log(error.text)
        alert('상담신청 접수실패.')
      })
  }
  return (
    <div className="PopupContainer">
      <div className="Popup">
        <h2>상담 및 도입 문의하기</h2>
        <p>상담 신청을 통하여 맞춤 견적을 받아보세요.</p>

        <form className="Mail_Wrap" ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="storeName">매장명</label>
            <input
              type="text"
              id="storeName"
              placeholder="매장명을 입력해 주세요."
              name="storeName"
            />
          </div>
          <div>
            <label htmlFor="industry">업종</label>
            <select id="industry" name="industry">
              <option value="" disabled defaultValue>
                매장명을 입력해 주세요.
              </option>
              <option value="서비스">서비스</option>
              <option value="외식음료">외식음료</option>
              <option value="도.소매">도.소매</option>
            </select>
          </div>
          <div>
            <label htmlFor="Place">장소</label>
            <select id="Place" name="Place">
              <option value="" disabled defaultValue>
                지역을 선택해 주세요.
              </option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="충청도">충청도</option>
            </select>
          </div>
          <div>
            <label htmlFor="Table">테이블 수</label>
            <input
              type="text"
              id="Table"
              name="Table"
              placeholder="테이블 개수를 입력해 주세요."
            />
          </div>
          <div>
            <label htmlFor="Questions">문의사항</label>
            <textarea
              name="Questions"
              id="Questions"
              cols="30"
              rows="10"
            ></textarea>
          </div>

          {/* 버튼을 form 요소 안으로 이동 */}
          <button type="submit">
            <span>상담 신청하기</span>
          </button>
        </form>

        <h3>도입 문의 및 상담 031-869-2428</h3>

        <img src={CloseBtn} alt="" onClick={onClose} />
      </div>
    </div>
  )
}

export default Popup
