import React, { Component } from 'react';
import { Backdrop, ModalContent } from "./Modal.styled";

export class Modal extends Component {
    closeOnEcs=(e)=>{e.code==='Escape'&&this.props.onClose()}
    componentDidMount(){
        window.addEventListener('keydown', this.closeOnEcs)
    }
    componentWillUnmount(){
        window.removeEventListener('keydown', this.closeOnEcs)
    }
    render() {
    return (
    <Backdrop onClick={(e)=>{e.target===e.currentTarget&&this.props.onClose()}}>
    <ModalContent>{this.props.children}</ModalContent>
    </Backdrop>
);
}
}