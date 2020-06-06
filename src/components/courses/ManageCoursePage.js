import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseactions";
import { loadAuthors } from "../../redux/actions/authoractions";
import PropTypes from "prop-types";

/**
 * Creates course page component, utilising courses and authors properties.
 * useEffect replaces componentDidMount, allows handling of side-effects.
 */
function ManageCoursePage(courses, authors, loadAuthors, loadCourses) {
  useEffect( () => {
    if (courses.length === 0){
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
    if(authors.length === 0){
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
  });
  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}
  

ManageCoursePage.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
};

/**
 * Determines what part of the state we expose to the component.
 * Requests only the data that the component needs.
 * For each course, return existing course, adding author name property to object.
 * @param {object} state The property of the component.
 * @returns {object} The courses props.
 */
function mapStateToProps(state) {
  return {
    courses:state.courses,
    authors:state.authors
  };
};

/**
 * Determines what actions are available to the component.
 * New actions can be passed to allow component to make new requests.
 * bindActionCreators converts an object with action creators as values into an on object with each action creator wrapped into a dispatch call.
 * Function scope of included variables takes precendence over module scope of identically named variables.
 */
const mapDispatchToProps = {
  loadCourses,
  loadAuthors
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
