import React, { useState } from 'react';
import {FormGroup, Label, Input, Button} from 'reactstrap'
import {connect} from 'react-redux'
import {hitungKataAction} from './../redux/action'

const Kata = (props) => {

    const [kalimat, setKalimat] = useState("")
    const [hitungKata, setHitungKata] = useState(0)

    const totalKata = () => {
        let getWord = /\S+/g
        let final = kalimat.match(getWord)
        setHitungKata(final.length)
    }

    if(hitungKata) {
        props.hitungKataAction("Hitung", hitungKata)
        // console.log(hitungKata)
    }

    return(
        <div className="container col-6 mt-5">
            <FormGroup>
                <Label for="exampleText">Masukkan Kalimat</Label>
                <Input type="textarea" name="text" id="exampleText" onChange={(e) => setKalimat(e.target.value)} />
            </FormGroup>
            <Button onClick={totalKata}>Submit</Button>
            <p>Jumlah kata pada kalimat di atas adalah :</p>
            <h3>{props.hasilKata}</h3>
        </div>
    )
}

const MapstatetoProps = (state) => {
    return {
        hasilKata: state.jmlKata
    }
}

export default connect(MapstatetoProps, {hitungKataAction})(Kata)