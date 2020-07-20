import React, { Component } from 'react';

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            nationality: '',
            age: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeNationality(e) {
        this.setState({ nationality: e.target.value })
    }

    onChangeAge(e) {
        this.setState({ age: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            nationality: '',
            age: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                nationality: this.userData.nationality,
                age: this.userData.age
            })
        } else {
            this.setState({
                name: '',
                nationality: '',
                age: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Nationality</label>
                        <input type="nationality" className="form-control" value={this.state.nationality} onChange={this.onChangeNationality} />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="tel" className="form-control" value={this.state.age} onChange={this.onChangeAge} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}