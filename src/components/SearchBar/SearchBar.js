import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, searchJobs } from '../../actions';
import Button from '../Button/Button';
import './SearchBar.scss';

class SearchBar extends React.Component {
    onFormSubmit = e => {
        e.preventDefault();

        if (this.props.searchTerm) {
            this.props.searchJobs(this.props.searchTerm);
        }        
    }

    render() {
        return (
            <div className="header__search-form">
                <form onSubmit={this.onFormSubmit}>
                    <input 
                        type="text"
                        placeholder="Search for a job title"
                        onChange={(e) => this.props.setSearchTerm(e.target.value)}
                        value={this.props.searchTerm}
                    />
                    <Button content="icon" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchTerm: state.searchTerm
    };
};

export default connect(
    mapStateToProps, 
    { setSearchTerm, searchJobs }
)(SearchBar);