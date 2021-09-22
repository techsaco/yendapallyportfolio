import React, {Component} from "react";
class OnClick extends Component {
    state = {
        open: false,
    };

    handleButtonClick = () => {
        this.setState((state) => {
            return {
                open: !this.state.open,
            };
        });
    };
}

export default OnClick;