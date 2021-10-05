import React from "react";

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

    Get(){
        fetch(
            "https://api.novaposhta.ua/v2.0/json/",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        "apiKey": "3c81d19dc6c4375bc278f4c329fb03cb",
                        "modelName": "Address",
                        "calledMethod": "getAreas",
                        "methodProperties": {},
                    })
            }
        )
            .then(response => response.json())
            .then(json => {console.log(json)})
            .catch(err=> console.log(err))

    }




    renderData(){
        return (
            <ul>

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