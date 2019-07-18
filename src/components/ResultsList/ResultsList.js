import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import SkillsList from '../SkillsList/SkillsList';
import './ResultsList.scss';

class ResultsList extends React.Component {
    renderList() {
        if (this.props.errorMessage && this.props.status !== 'loading') {
            return <div className="results-list__error">Sorry, no results were found! Please try again.</div>
        }

        if (this.props.status === 'loading') {
            return <Spinner />
        }

        return this.props.searchResults.slice(0, 16).map(job => (
            <div key={job.uuid} className="card">
                <h2 className="card__title h5">{job.normalized_job_title}</h2>
                <SkillsList jobId={job.uuid} />
            </div>
        ));
    }

    render() {
        return (
            <div className="results-list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        status: state.status,
        searchResults: Object.values(state.searchResults),
        errorMessage: state.searchResults.errorMessage
    }
};

export default connect(mapStateToProps)(ResultsList);