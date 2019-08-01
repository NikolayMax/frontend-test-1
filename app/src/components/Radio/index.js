import React, {Component} from 'react';
import './style.css';
let countId = 0;
export default class Radio extends Component{
    state = {id: `id_${countId++}`};

    render(){
        let {name, onSelect, label, description} = this.props;
        let {id} = this.state;

        return <div className="radio-wrapper">
                <input type="radio" className="radio-item" id={id} name={name} onChange={onSelect}/>
                <label className="form-radio-item-name" htmlFor={id}>
                    <div className="flex align-items-center">
                        <div className="radio-item-design"/>
                        <span>{label}</span>
                    </div>
                    <div className="form-radio-item-desc">{description}</div>
                </label>
            </div>

    }
}
