// Higher Order components : Transform components to another component
// Adding extra functionalities to the existing components

import React from 'react';
import { Route, Routes } from 'react-router-dom'

// default Layout
import MovieLayout from '../Layouts/MovieLayout'

const MovieHOC = ({ component: Component, ...rest }) => {
    //components
    // ...rest -> path,extract
    return (
        <>

            <Route
                {...rest}
                component={props => (
                    <MovieLayout>
                        <Component {...props} />
                    </MovieLayout>
                )}

            />
        </>
    )
}

export default MovieHOC;