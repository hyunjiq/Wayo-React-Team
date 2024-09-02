//Form.js
import React, { useState}from "react";
import Calendar from "../component/Calender";
import Formtage from "../component/Formtag";
import "jquery-ui-dist/jquery-ui";
import { supabase } from '../data/supabaseClient';

function Form() {
    const [formData, setFormData] = useState({});
    const [selectedDate, setSelectedDate] = useState('');

    const handleFormData = (data) => {
        setFormData(data);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase
                .from('pet_form')
                .insert([formData]);

            if (error) {
                throw error;
            }
            alert('데이터가 성공적으로 저장되었습니다!');
        } catch (error) {
            console.error('데이터 저장 중 오류 발생:', error.message);
        }
    };

    const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태 관리

    // 팝업 열기
    const handleTextClick = () => {
        setIsPopupOpen(true);
    };

    // 팝업 닫기
    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <section onSubmit={handleSubmit} className="form_tag d-flex justify-content-center margin">
            <div className="position-relative">
                <div>
                    <h2 className="pt-5 form_text">너도 아프냐 멍? 나도 아프다 냥!</h2>
                    <div className="mt-1 mb-4 form_text">#집중케어 #펫케어 #펫팸족</div>
                </div>

                <div className="formtag d-flex justify-content-centeralign-items-center mb-0 serviceform">
                    <div className="allbox d-flex justify-content-center align-items-center container">
                        {/* 왼쪽 달력 */}
                         <Calendar onDateSelect={handleDateSelect} />

                        {/* 폼태그 */}
                        <div className="col-lg-6 col-ms-6 d-flex flex-column align-items-center justify-content-center form_momdiv">
                        <Formtage selectedDate={selectedDate} onFormDataChange={handleFormData} />
                        {isPopupOpen && ( // 팝업이 열려 있을 때만 렌더링
                            <div className="popup d-flex justify-content-center align-items-center">
                                <div className="popupContent">
                                    <span className="close" onClick={handleClosePopup}>
                                        <i className="bi bi-x-circle"></i>
                                    </span>
                                    <div className="d-flex flex-column align-items-center mt-3 text-center">
                                        <p className="d-flex align-items-center fw-bold">
                                            <i className="bi bi-question-circle"></i> 집중케어 정기구독이란
                                        </p>
                                        <p className="fs_15">
                                            노견, 치매견, 치료견과 같이 손길이 많이 필요한
                                            반려동물을 위해 전문 펫시터님이 건강 상태를
                                            정기적으로 체크하며, 반려동물 집중 호스피스
                                            서비스를 제공합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
                <p 
                className="ms-2 fw-bold clickableText"
                onClick={handleTextClick} >
                <i className="bi bi-question-circle"></i>집중케어 정기구독이란 </p>
            </div>
        </section>
    )
}

export default Form;
