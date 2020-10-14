import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { CourseData } from './FetchCourse';

interface AddCourseDataState {
    title: string;
    loading: boolean;
    authorsList: Array<any>;
    courseData: CourseData;
}

export class AddCourse extends React.Component<RouteComponentProps<{}>, AddCourseDataState> {
    constructor(props) {
        super(props);

        this.state = { title: "", loading: true, authorsList: [], courseData: new CourseData };

        fetch('api/AuthorsList')
            .then(response => response.json() as Promise<Array<any>>)
            .then(data => {
                this.setState({ authorsList: data });
            });

        var courseid = this.props.match.params["courseid"];

        // This will set state for Edit Course  
        if (courseid > 0) {
            fetch('api/Course/Details/' + courseid)
                .then(response => response.json() as Promise<CourseData>)
                .then(data => {
                    this.setState({ title: "Edit", loading: false, courseData: data });
                });
        }

        // This will set state for Add Course  
        else {
            this.state = { title: "Create", loading: false, authorsList: [], courseData: new CourseData };
        }

        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm(this.state.authorsList);

        return <div>
            <h1>{this.state.title}</h1>
            <h3>Course</h3>
            <hr />
            {contents}
        </div>;
    }

    // This will handle the submit form event.  
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        // PUT request for Edit Course.  
        if (this.state.courseData.CourseId) {
            fetch('api/Course/Edit', {
                method: 'PUT',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchCourse");
                })
        }

        // POST request for Add Course.  
        else {
            fetch('api/Course/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/fetchCourse");
                })
        }
    }

    // This will handle Cancel button click event.  
    private handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchCourse");
    }

    // Returns the HTML Form to the render() method.  
    private renderCreateForm(authorsList: Array<any>) {
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="CourseId" value={this.state.courseData.CourseId} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Title</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.courseData.coursetitle} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Gender">Description</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.courseData.coursedesc} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="author">Author</label>
                    <div className="col-md-4">
                        <select className="form-control" data-val="true" name="Author" defaultValue={this.state.courseData.authorid} required>
                            <option value="">-- Select Author --</option>
                            {authorsList.map(author =>
                                <option key={author.authorId} value={author.authorName}>{author.authorName}</option>
                            )}
                        </select>
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }
} 