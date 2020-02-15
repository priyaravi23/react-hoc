import React, { Component } from "react";

const withStorage = TargetComp => {
    class HOC extends Component {
        state = {
            localStorageAvailable: true
        };

        componentDidMount() {
            this.checkLocalStorageExists();
        }

        checkLocalStorageExists() {
            const testKey = "test";
            try {
                localStorage.setItem(testKey, testKey);
                localStorage.removeItem(testKey);
                this.setState({ localStorageAvailable: true });
            } catch (error) {
                this.setState({ localStorageAvailable: false });
            }
        }

        load = key => {
            if (this.state.localStorageAvailable) {
                return localStorage.getItem(key);
            }
            return null;
        };

        save = (key, data) => {
            if (this.state.localStorageAvailable) {
                localStorage.setItem(key, data);
            }
        };

        remove = key => {
            if (this.state.localStorageAvailable) {
                localStorage.removeItem(key);
            }
        };

        render() {
            return (
                <TargetComp
                    load={this.load}
                    save={this.save}
                    remove={this.remove}
                    {...this.props}
                />
            );
        }
    }
    return HOC;
};

export default withStorage;
