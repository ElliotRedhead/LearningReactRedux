import React from "react";

// Only using a class here for stateful implementation and to learn both syntaces.

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }

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

  render() {
    return (
      <form>
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

export default CoursesPage;
