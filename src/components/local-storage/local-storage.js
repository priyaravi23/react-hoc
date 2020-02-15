import React, { Component } from 'react';
import '../../../src/App.css';

class localStorage extends Component {
    state = {
        user: '',
        movie: ''
    };

    loadData() {
        const user = this.props.load('user');
        const movie = this.props.load('movie');

        if (!user || !movie) {
            this.setState({
                user: 'Priya',
                movie: 'Harry Potter'
            });
        }
        else {
            this.setState({
                user, movie
            });
        }
    }

    componentDidMount() {
        this.loadData()
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.save('user', this.user.value);
        this.props.save('movie', this.movie.value);
        this.loadData();
        let vm = this;

        setTimeout(() => {
            vm.user.value = '';
            vm.movie.value = '';
        }, 1000)
    };

    render() {
        const { user, movie } = this.state;

        if (!user || !movie) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <section>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-input">
                            <input placeholder="Your name" ref={input => (this.user = input)} />
                        </div>
                        <div className="form-input">
                            <input placeholder="Favorite movie" ref={input => (this.movie = input)} />
                        </div>
                        <button>Save</button>
                    </form>
                </section>
                <section id="result">
                    <h3><strong>{user}'s</strong> favorite movie is <span>{movie}</span></h3>
                </section>
            </div>
        );
    }
}

export default localStorage;
