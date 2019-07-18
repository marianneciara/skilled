import React from 'react';
import { connect } from 'react-redux';
import { searchRelatedSkills } from '../../actions';
import './SkillsList.scss';

class SkillsList extends React.Component {
    componentDidMount() {
        this.props.searchRelatedSkills(this.props.jobId);
    }

    componentDidUpdate() {
        if (this.props.relatedSkills) return;

        this.props.searchRelatedSkills(this.props.jobId);
    }

    renderList() {
        if (!this.props.relatedSkills) return;
        
        if (this.props.relatedSkills.errorMessage) {
            return <div className="card__error">Sorry, we couldn't find any related skills for this job.</div>;
        } 
        
        return Object.values(this.props.relatedSkills.skills).slice(0, 8).map(skill => (
            <div key={skill.skill_uuid} className="card__skill">{skill.skill_name}</div>
        ));
    }

    render() {
        return (
            <div className="card__related-skills">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        relatedSkills: state.relatedSkills[ownProps.jobId]
    }
};

export default connect(
    mapStateToProps, 
    { searchRelatedSkills }
)(SkillsList);