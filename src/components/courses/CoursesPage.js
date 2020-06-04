import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseactions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

// Only using a class here for stateful implementation and to learn both syntaces.

class CoursesPage extends React.Component {
  state = {
    course: {
      title: "",
    },
  };

  /**
   * Copy current course from state, set new title passed from event target value.
   * Sets state to pass.
   *
   * A class field is used to bind 'this' to instance rather than change handler.
   * New object is created with object spread (values on right overwrite values on left).
   * @param {object} event The user's input.
   */
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  /**
   * Dispatches an action on Submit event.
   * @param {object} event The user's input.
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
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
