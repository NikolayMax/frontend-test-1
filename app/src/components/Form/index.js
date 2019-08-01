import React, {Component} from 'react';
import Radio from '../Radio/index';
import $ from 'jquery';
import './style.css';

export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            radio:[
                {label:'License plan #1', desc:13, selected:false},
                {label:'License plan #2', desc:22, selected:false},
                {label:'License plan #3', desc:34, selected:false},
            ],
            select:[
                {id:1, value:10, selected:false},
                {id:2, value:20, selected:false},
                {id:3, value:30, selected:false}
            ],
            selected:20,
        };
    }
    componentDidMount() {
        let wW = $('.container').width();
        let wH = $('.container').height();

        var radius = wH / 2;

        let oT = $('.container').offset().top;
        let oL = $('.container').offset().left;

        var center = {
            x: radius,
            y: radius
        }

        let fW = $('.inner__block').width();
        let fH = $('.inner__block').height();

        function m(p1, p2) {
            var x = p1.x - p2.x,
                y = p1.y - p2.y;

            return Math.sqrt(x * x + y * y);
        }
        $('.container').mousemove(function(e) {
            let x = e.pageX - oL - fW / 2 - 1;
            let y = e.pageY - oT - fH / 2 - 1;

            var innerCenter = {
                x: x + fW / 2,
                y: y + fH / 2
            }

            var d = m(center, innerCenter);
            if (d > radius - fW / 2) {

            } else {
                $('.inner__block').css('top', y).css('left', x);
            }
        });
    }

    selectRadio(e){

        this.setState({radio:this.state.radio.map(i=>{
                i.selected=i === e;
                return i;
            })});
    }

    selectSelect(e){
        console.log(e);
        this.setState({selected:e.target.value});
    }
    getTotal(){
        let license = this.state.radio.find(i=>i.selected);
        let select = this.state.selected;
        console.log(select, license);
        if(license && select)
            return license.desc * select;
        return 0;
    }
    render(){
        return <div>
            <h1>Тестовое задание №1</h1>
            <ul>
                <li>Сверстать приведенный ниже дизайн</li>
                <li>Тип лицензии выводить шрифтом Bebas - выводить через font-face</li>
                <li>Отображать тип выбранной лицензии и итоговую сумму</li>
                <li>Содержимое combobox-a и стоимости отдельных лицензий загружать из JSON файла</li>
                <li>Формат ссылки в кнопке Buy Now сформируйте по вашем усмотрению</li>
            </ul>
            <div className="form-wrapper">
                <div className="form-radio-wrapper">
                    {this.state.radio.map((item, key)=><Radio key={key} label={item.label} description={'$' + item.desc + ' per license'} name={'license'} onSelect={this.selectRadio.bind(this,  item)}/>)}
                </div>
                <hr/>
                <div className="flex form-select-wrapper">
                    <label htmlFor="">Number of license</label>
                    <select value={this.state.selected} onChange={this.selectSelect.bind(this)}>
                        {this.state.select.map((i, k)=><option key={k} value={i.value}>{i.value}</option>)}
                    </select>
                </div>
                <hr/>
                <div className="form-total-wrapper">
                    <div className="form-total-sum">
                        <span className="form-total-title">Total: </span>
                        <span className="form-total-count">${this.getTotal()}<span className="form-total-val">us</span></span>
                    </div>
                    <div className="form-total-buy">Buy now</div>
                    <div className="form-total-selected-item">Select plan: {this.state.radio.find(i=>i.selected)?this.state.radio.find(i=>i.selected).label:''}</div>
                </div>
            </div>
            <h2>Тестовое задание №2</h2>
            <ul>
                <li>Нарисовать две окружности в окне браузера, вложенные одна в другую</li>
                <li>Вложенная окружность должно позиционироваться под курсором, но не выходить за границы большой окружности</li>
                <li>Если хотите нас удивить, то можете усложнить задание, чтобы вложенная окружность убегала от курсора, но не выходила за рамки большой окружности</li>
            </ul>
            <div className="box">
                <div className="container">
                    <div className="inner__block"></div>
                </div>
            </div>

        </div>
    }

}
