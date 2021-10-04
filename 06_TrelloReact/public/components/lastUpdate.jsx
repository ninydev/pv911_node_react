class LastUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lastUpdate: null,
            classNow: "notNeed"
        };
    }

    componentDidMount() {
        this.in = setInterval(this.Get.bind(this), 1000);
    }

    Get(){
        fetch('/api/state')
            .then(res => res.text())
            .then(text => {
                if(this.state.lastUpdate == null) {
                    this.setState ({lastUpdate: text});
                    return;
                }
                if(this.state.lastUpdate != text) {
                    this.setState ({classNow: "need"});
                }
            })
            .catch(err=> console.log(err));
    }


    render(){
        return (
            <div id="needUpdate" className={this.state.classNow}>
            </div>
        )
    }

}