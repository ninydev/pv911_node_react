import React from "react";

export default class npAreaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            error: null,
            items: [],
            activeArea_Id: 0 // текущее отделение новой почты
        };
    }




}