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
    }

    render(){
    console.log("Children - render")
    return (
            <div>

            </div>
        )
}
