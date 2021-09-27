class EntityItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            isEdit: false,
            error: null,
            item: props.item
        };
    }

    onChange (element){
        const item = this.state.item;
        item[element.target.name] = element.target.value;
        this.setState({item: item});
    }

    componentDidMount() {
    }

    render(){
        if(this.state.error) return this.renderError(); // Если ошибка - вывожу ее
        // if(!this.state.isLoaded) return this.renderLoading(); // Загружаюсь
        if(this.state.isEdit) return this.renderForm();
        if(this.state.item == null) return this.renderNewElement();
        return this.renderData();
    }


    openEditForm (){
        this.oldItem = this.state.item;// Схраняю старый элемент (null)
        if ( this.state.item == null) // Если у меня создание нового - то делаю чистый
            this.state.item = new Object();
        this.setState({isEdit: true});
    }

    renderForm(){
        return(
        <div className="card col-3" key="CreateNewElement">
            <div className="card-body">
                <input name="_id" type="hidden" value={this.state.item_id}/>
                <input name="name" type="text"
                       value={this.state.item.name}
                       onChange={this.onChange.bind(this)}/>

            </div>
        </div>
        );
    }

    // Предложить созать форму
    renderNewElement(){
        return (
            <div className="card col-3" key="CreateNewElement">
                <div className="card-body" onClick={this.openEditForm.bind(this)}>
                    Создать
                </div>
            </div>
        );
    }

    // Вывод основного состояния компонента
    renderData(){
        return (
            <div className="card col-3" key={this.state.item._id}>
                <div className="card-body">
                    {this.state.item.name}
                </div>
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