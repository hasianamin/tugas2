import React, { useState } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux'
import {bayarParkirAction} from './../redux/action'

const Parkir = (props) => {
    const [kendaraan, setKendaraan] = useState("Motor")
    const [durasi, setDurasi] = useState(0)

    const totalBiaya = () => {
        props.bayarParkirAction(kendaraan, durasi)
    }

    return(
        <div className="container mt-5 col-6">
            <FormGroup>
                <Label for="exampleSelect">Jenis Kendaraan</Label>
                <Input type="select" name="select" id="exampleSelect" onChange={(e) => setKendaraan(e.target.value)}>
                    <option hidden>Pilih Kendaraan</option>
                    <option value="Mobil">Mobil</option>
                    <option value="Motor">Motor</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="text-left">Durasi (jam)</Label>
                <Input type="number" placeholder="masukkan durasi" onChange={(e) => setDurasi(e.target.value)}/>
            </FormGroup>
            <Button onClick={totalBiaya}>Submit</Button>
            <h1>Rp {props.hasilBiaya[0]}</h1>
        </div>
    )
}

const MapstatetoProps = (state) => {
    return {
        hasilBiaya: state.biaya
    }
}

export default connect(MapstatetoProps, {bayarParkirAction})(Parkir)