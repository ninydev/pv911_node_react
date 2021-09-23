class Children extends React.Component {

    constructor(props) {
        super(props);
        console.log("Children - constructor")
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        };
    }

    componentDidMount() {
        console.log("Children - componentDidMount")
    }

    componentWillUnmount() {
        console.log("Children - componentWillUnmount")
    }

    componentDidUpdate(){
        console.log("Children - componentDidUpdate")
    }

    render() {
        console.log("Children - render")
        return (
            <div>
                <h2> Children: {this.props.someVar} </h2>
            </div>
        )
    }

}