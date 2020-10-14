import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { courses: [], loading: true };

      fetch('api/Data/CoursesList')
      .then(response => response.json())
      .then(data => {
        this.setState({ courses: data, loading: false });
      });
  }

  static renderCoursesTable(courses) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Author Id</th>
            <th>Course Desc</th>
          </tr>
        </thead>
            <tbody>
                {courses.map(course =>
                    <tr key={course.CourseId}>
                        <td>{course.CourseTitle}</td>
                        <td>{course.AuthorId}</td>
                        <td>{course.CourseDesc}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : FetchData.renderCoursesTable(this.state.courses);

    return (
      <div>
        <h1>Manage Course</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
