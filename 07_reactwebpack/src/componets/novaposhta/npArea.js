import React from "react";
import NpAjax from "./npAjax";

export default class NpArea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: [],
            activeArea_Id: 0 // текущее отделение новой почты
        };
    }

    componentDidMount() {
        this.Get();
    }

    Get(){
        NpAjax.Get(
            "Address", "getAreas", {},
            function (items) {
                this.setState({
                        isLoaded: true,
                        items:items
                    })
            }.bind(this),
            function (err) {
                this.setState({
                    isLoaded: false,
                    error: err
                })
            }.bind(this)
        )

    }


    renderData(){
        return (
            <ul>
                {this.state.items.map(item =>
                    <li key={item.Ref} >
                        {item.DescriptionRu}
                    </li>


                )}
            </ul>
        )
    }


    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }

    // Отображение компонента в состоянии ошибки
    renderError(){
        return (
            <div className="alert alert-danger" role="alert">
                Error: {this.state.error.message}
            </div>
        );
    }



}