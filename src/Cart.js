import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './detail.scss';

function Cart(props){
    return(
        <div className="container">
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>단가</th>
                    <th>수량</th>
                    <th>변경</th>
                    <th>총</th>
                </tr>
                </thead>
                <tbody>
                    { 
                        props.state.map((a,i)=>{ 
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.price}</td>
                                    <td>{a.quan}</td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary mx-1" onClick={()=>{ props.dispatch({ type:'수량증가' }) }}>+</button>
                                        <button className="btn btn-sm btn-secondary" onClick={()=>{ props.dispatch({ type:'수량감소' }) }}>-</button>
                                    </td>
                                    <td className="totalPrice"></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            { props.alert열렸니 === true
               ? (<div className="my-alert2 text-center">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button className="mt-2" onClick={ ()=>{ props.dispatch({type : 'alert닫기'}) }}>닫기</button>
                </div> )
            : null 
            }
        </div>
    )
}

function 함수명(state){
    console.log(state);
    return {
        state : state.reducer,
        alert열렸니 : state.reducer2 //리듀서2에 있는거 가져오는법
    }
}

export default connect(함수명)(Cart);
// export default Cart;