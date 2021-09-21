class CheckInput extends React.Component {


    constructor(props) {
        super(props); // props - неизменные данные для компонента
        this.state = {
            isCanSend: false,
            userText : ""
        }; // state - динамические данные для компонента
    }

    onChange(element){
        this.state[element.target.name] = element.target.value;

        if(this.state[element.target.name].length > 2 ){
            this.setState({isCanSend:true})
        } else {
            this.setState({isCanSend:false})
        }
    }


    render (){
        return(
            <div>
                <input type="text" name="userText"
                       onChange={this.onChange.bind(this)}
                       />
                <div>{this.state.userText}</div>
                <input type="button" disabled={!this.state.isCanSend} value="Send"/>

            </div>
        );
    }

}