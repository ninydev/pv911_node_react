class Parent extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent - constructor")
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }

    componentDidMount() {
        console.log("Parent - componentDidMount")
    }

    render(){
        console.log("Parent - render")

        return (
            <div>
            </div>
        )
    }

    // Вывод основного состояния компонента
    renderData(){
        let key = 1;
        return (
            <div>

            </div>
        );
    }

    // Компонент в состоянии загрузки
    renderLoading(){
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
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