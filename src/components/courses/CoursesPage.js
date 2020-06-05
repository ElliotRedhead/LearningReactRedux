import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseactions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
// Only using a class here for stateful implementation and to learn both syntaces.

class CoursesPage extends React.Component {
  componentDidMount(){
    this.props.actions.loadCourses().catch(error => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}
  

CoursesPage.propTypes = {
  course: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

/**
 * Determines what part of the state we expose to the component.
 * Requests only the data that the component needs.
 * @param {object} state The property of the component.
 * @returns {object} The courses props.
 */
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

/**
 * Determines what actions are available to the component.
 * bindActionCreators converts an object with action creators as values into an on object with each action creator wrapped into a dispatch call.
 * @param {function} dispatch A function of the Redux store, called to dispatch an action and trigger a state change.
 * @returns {function} Dispatches an action.
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
