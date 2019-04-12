import React from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { fetchData, addSmurf, deleteSmurf } from '../actions';

class SmurfList extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    componentDidMount() {
      this.props.fetchData();
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleAddSmurf = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
    };

    handleDelete = id => {
        this.props.deleteSmurf(id);
    }
    

    render() {
        // if (this.props.fetchingSmurfs) {
        //     return <h2>Fetching Smurfs...</h2>
        // }
        return (
            <div>
                <div>
                    <form onSubmit={this.handleAddSmurf}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            name="height"
                            placeholder="Enter height"
                            value={this.state.height}
                            onChange={this.handleChange}
                        />
                        <button type="submit">Add a new Smurf!</button>
                    </form>
                </div>
                <div>
                    {this.props.smurfs.map(smurf => (
                        <Smurf
                            key={smurf.id}
                            smurf={smurf}
                            handleDelete={this.handleDelete}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapeStateToProps = state => ({
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    fetchSucess: state.fetchSucess,
    fetchFailed: state.fetchFailed,
    addingSmurf: state.addingSmurf,
    addSuccess: state.addSuccess,
    addFail: state.addFail,
    deletingSmurf: state.deletingSmurf,
    delSuccess: state.delSuccess,
    delFail: state.delFail
})

export default connect(
    mapeStateToProps,
    { fetchData, addSmurf, deleteSmurf }
)(SmurfList);