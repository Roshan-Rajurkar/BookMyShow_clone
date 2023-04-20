// Higher Order components : Transform components to another component
// Adding extra functionalities to the existing components

import React from 'react';
import { Route, Routes } from 'react-router-dom'

// default Layout
import DefaultLayout from '../Layouts/DefaultLayout'

const DefaultHOC = ({ component: Component, ...rest }) => {
    //components
    // ...rest -> path,extract
    return (
        <>

            <Route
                {...rest}
                component={props => (
                    <DefaultLayout>
                        <Component {...props} />
                    </DefaultLayout>
                )}

            />
        </>
    )
}

export default DefaultHOC;