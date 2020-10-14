import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchCourse } from './components/FetchCourse';
import { AddCourse } from './components/AddCourse';

export const routes = <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/fetchcourse' component={FetchCourse} />
    <Route path='/addcourse' component={AddCourse} />
    <Route path='/course/edit/:courseid' component={AddCourse} />
</Layout>;