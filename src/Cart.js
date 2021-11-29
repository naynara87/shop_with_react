import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import './detail.scss';

function Cart(props){
    return(
        <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                    { 
                        props.state.map((a,i)=>{ 
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.quan}</td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary mx-1" onClick={()=>{ props.dispatch({ type:'수량증가' }) }}>+</button>
                                        <button className="btn btn-sm btn-secondary" onClick={()=>{ props.dispatch({ type:'수량감소' }) }}>-</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

function 함수명(state){
    return{
        state: state
    }
}

export default connect(함수명)(Cart);
// export default Cart;