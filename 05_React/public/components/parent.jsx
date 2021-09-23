class Parent extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent - constructor")
        this.state = {
            isShowChildren: false,
            isLoaded: false,
            error: null,
            items: []
        };
    }

    componentDidMount() {
        console.log("Parent - componentDidMount")
    }

    componentWillUnmount() {
        console.log("Parent - componentWillUnmount")
    }

    componentDidUpdate(){
        console.log("Parent - componentDidUpdate")
    }

    toggleShowChildren(element){
        let old = this.state.isShowChildren;
        this.setState({
            isShowChildren: !old
        });
    }

    onChange (element){
        this.state[element.target.name] = element.target.value;
    }

    render(){
        console.log("Parent - render")
        // 3 вариант - выполнение кода прямо в return

        return (
            <div>
                <h1> Parent </h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           onChange={this.toggleShowChildren.bind(this)}
                           type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Children</label>
                </div>
                {this.state.isShowChildren &&
                    <Children someVar={"Children Name"}></Children>
                }
                {this.state.isShowChildren ? " Показать " : "Спрятать" }
            </div>
        )
    }

    render_2vars(){
        console.log("Parent - render");
        // 1 вариант - написать вообще свой render и возвращать его
        // пример для загрузки :
        /*
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        return this.renderData();
         */

        // 2 вариант - загрузить в  переменную
        let chidren = "";
        if (this.state.isShowChildren)
            chidren = <Children></Children>;
        console.log("Parent - render affter If isShowChildren");

        return (
            <div>
                <h1> Parent </h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           onChange={this.toggleShowChildren.bind(this)}
                           type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Children</label>
                </div>
                {chidren}
            </div>
        )
    }


    // Простой рендер
    render_simple(){
        console.log("Parent - render")

        return (
            <div>
                <h1> Parent </h1>
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={this.state.isShowChildren}
                           onChange={this.toggleShowChildren.bind(this)}
                           type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Children</label>
                </div>
                <Children></Children>
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