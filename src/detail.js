import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'

let 박스 = styled.div`
    padding: 20px;
`;
let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 };
`;

function Detail(props){

    let history = useHistory();

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return x.id == id;
    });

    return (
    <div className="container">
        <박스>
            <제목 색상="blue">안녕하세요1</제목>
            <제목 색상={'red'}>안녕하세요2</제목>
        </박스>
        <div></div>
        <div className="row">
        <div className="col-md-6">
        <img src={찾은상품.imgsrc} width="100%" alt=""/>
        </div>
        <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger mr-2">주문하기</button> 
            <button className="btn btn-secondary" onClick={()=>{
                history.push('/');
            }}>뒤로가기</button> 
        </div>
        </div>
    </div> 
    )
}

export default Detail;
