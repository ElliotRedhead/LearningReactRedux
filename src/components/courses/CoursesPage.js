import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseactions";
import * as authorActions from "../../redux/actions/authoractions";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
// Only using a class here for stateful implementation and to learn both syntaces.

/**
 * Creates course page component, utilising courses and authors properties.
 */
class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursePage: false
  };

  componentDidMount(){
    const { courses, authors, actions} = this.props;
    if (courses.length === 0){
      actions.loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
    if(authors.length === 0){
      actions.loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  }
  render() {
    return (
      <>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading ?
          <Spinner /> : (
            <>
              <button 
                style={{marginBottom:20}}
                className="btn btn-primary add-course"
                onClick={() => this.setState({ redirectToAddCoursePage:true })}>
          Add Course
              </button>
              <CourseList courses={this.props.courses} />
            </>
          )}
      </>
    );
  }
}
  

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

/**
 * Determines what part of the state we expose to the component.
 * Requests only the data that the component needs.
 * For each course, return existing course, adding author name property to object.
 * Length is checked to ensure both course and author data are available before mapping (using ternary operator.)
 * @param {object} state The property of the component.
 * @returns {object} The courses props.
 */
function mapStateToProps(state) {
  return {
    courses: state.authors.length === 0 ? [] : state.courses.map(course => {
      return {
        ...course,
        authorName: state.authors.find(a=> a.id === course.authorId).name
      };
    }),
    authors:state.authors,
    loading: state.apiCallsInProgress > 0
  };
};

/**
 * Determines what actions are available to the component.
 * New actions can be passed to allow component to make new requests.
 * bindActionCreators converts an object with action creators as values into an on object with each action creator wrapped into a dispatch call.
 * @param {function} dispatch A function of the Redux store, called to dispatch an action and trigger a state change, interaction with the store is only ever available with connect.
 * @returns {function} Dispatches an action.
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses:bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors:bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
