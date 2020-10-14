import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface FetchCourseDataState {
    courseList: CourseData[];
    loading: boolean;
}

export class FetchCourse extends React.Component<RouteComponentProps<{}>, FetchCourseDataState> {
    constructor() {
        super();
        this.state = { courseList: [], loading: true };

        fetch('api/CourseList')
            .then(response => response.json() as Promise<CourseData[]>)
            .then(data => {
                this.setState({ courseList: data, loading: false });
            });

        // This binding is necessary to make "this" work in the callback  
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCourseTable(this.state.courseList);

        return <div>
            <h1>Course Data</h1>
            <p>This component demonstrates fetching Course data from the server.</p>
            <p>
                <Link to="/addCourse">Create New</Link>
            </p>
            {contents}
        </div>;
    }

    // Handle Delete request for an Course  
    private handleDelete(id: number) {
        if (!confirm("Do you want to delete Course with Id: " + id))
            return;
        else {
            fetch('api/Course/Delete/' + id, {
                method: 'delete'
            }).then(data => {
                this.setState(
                    {
                        courseList: this.state.courseList.filter((rec) => {
                            return (rec.CourseId != id);
                        })
                    });
            });
        }
    }

    private handleEdit(id: number) {
        this.props.history.push("/Course/edit/" + id);
    }

    // Returns the HTML table to the render() method.  
    private renderCourseTable(courseList: CourseData[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th></th>
                    <th>CourseId</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>AuthorId</th>
                </tr>
            </thead>
            <tbody>
                {courseList.map(cours =>
                    <tr key={cours.courseid}>
                        <td></td>
                        <td>{cours.courseid}</td>
                        <td>{cours.coursetitle}</td>
                        <td>{cours.coursedesc}</td>
                        <td>{cours.authorid}</td>
                        <td>
                            <a className="action" onClick={(id) => this.handleEdit(cours.courseid)}>Edit</a>  |
                            <a className="action" onClick={(id) => this.handleDelete(cours.courseid)}>Delete</a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

export class CourseData {
    courseid: number = 0;
    coursetitle: string = "";
    coursedesc: string = "";
    authorid: number = 0;
}    