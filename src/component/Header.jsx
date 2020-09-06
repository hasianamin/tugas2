import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { connect } from 'react-redux'

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="d-flex justify-content-between">
                <div className="col-12 d-flex justify-content-between">
                    <div className="col-6 d-flex">
                        <NavbarBrand href="/">Tugas2</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <div className="d-flex">
                            <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <div className="d-flex justify-content-between">
                                    <NavItem className="px-3">
                                        <Link to="/">Bayar Parkir</Link>
                                    </NavItem>                    
                                    <NavItem className="px-3">
                                        <Link to="/kata">Hitung Kata</Link>
                                    </NavItem>                    
                                    <NavItem className="px-3">
                                        <Link to="/resto">List Resto</Link>
                                    </NavItem>                    
                                    <NavItem className="px-3">
                                        Jenis Kendaraan : {props.biaya[1]} <br/>
                                        Durasi : {props.biaya[2]} <br/>
                                        Total : {props.biaya[0]} 
                                    </NavItem>                    
                                    <NavItem className="px-3">
                                        Jumlah Kata : {props.hasilKata}
                                    </NavItem>                    
                                </div>
                            </Nav>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    )
}

const MapstatetoProps = (state) => {
    return {
        biaya: state.biaya,
        hasilKata: state.jmlKata
    }
}

export default connect(MapstatetoProps)(Header)