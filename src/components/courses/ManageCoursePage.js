import React, { useEffect , useState } from "react";
import { connect } from "react-redux";
import { loadCourses, saveCourse } from "../../redux/actions/courseactions";
import { loadAuthors } from "../../redux/actions/authoractions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../tools/mockData";

/**
 * Creates course page component, utilising courses and authors properties.
 * 
 * Calling saveCourse in component will call saveCourse func now bound to dispatch in mapDispatchToProps.
 * Use rest operator to assign any properties not destructured to props with "...props".
 * useState returns pair of values, array destructuring is used to assign each value a name.
 * The first value is the state variable, the second is the setter func for that variable.
 * useState initialises course state variable to a copy of the course passed by props.
 * 
 * useEffect replaces componentDidMount, allows handling of side-effects.
 */
function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  saveCourse,
  ...props
}) {
  const [course, setCourse] = useState({...props.course});
  const [errors, setErrors] = useState({});
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
  }, [authors.length, courses.length, loadAuthors, loadCourses]);

  function handleChange(event) {
    /* Destructure avoids even being garbage collected & shortens refs below. */
    const { name, value } = event.target;
    setCourse( prevCourse => ({
      /* Using javascript's computed property syntax */
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event){
    event.preventDefault();
    saveCourse(course);
  }

  /* Change handler passed in on props.
  The variables stated below are all passed to CourseForm*/
  return <CourseForm course={course} errors={errors} authors={authors} onChange={handleChange} onSave={handleSave} />;
}
  

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired
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
    course: newCourse,
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
  loadAuthors,
  saveCourse
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
