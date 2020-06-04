import React from "react";
import { connect } from "react-redux";

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
   */
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.title);
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
      </form>
    );
  }
}

/**
 * Determines what part of the state we expose to the component.
 * Requests only the data that the component needs.
 * @param {*} state
 * @param {*} ownProps
 */
function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
