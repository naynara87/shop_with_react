import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Detail(props){

    let history = useHistory();

    return (
    <div className="container">
        <div className="row">
        <div className="col-md-6">
            
        </div>
        <div className="col-md-6 mt-4">
            <h4 className="pt-5">상품명</h4>
            <p>내용</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-secondary" onClick={()=>{
                history.push('/');
            }}>뒤로가기</button> 
        </div>
        </div>
    </div> 
    )
}

export default Detail;
