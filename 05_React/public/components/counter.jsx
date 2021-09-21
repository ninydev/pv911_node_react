class Counter extends React.Component {


    constructor(props) {
        super(props); // props - неизменные данные для компонента
        this.state = {
            counter : this.props.startCount
        }; // state - динамические данные для компонента
    }

    add(){
        this.setState({counter: ++this.state.counter});
    }

    render (){
        console.log("Counter " + this.state.counter);
        return(
        <div>
            <p> Вы нажали {this.state.counter} раз</p>
            <button onClick={this.add.bind(this)}> Add </button>
        </div>
    );
    }

}