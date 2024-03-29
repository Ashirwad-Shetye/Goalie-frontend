import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ReactReduxContext } from "react-redux";
import getInjectors from './reducerInjectors'

export default ({key, reducer}) => (WrappedComponent) => {
    class ReducerInjector extends React.Component {
        static WrappedComponent = WrappedComponent;
        static contextType = ReactReduxContext;
        static displayName = `withReducer(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`
        constructor(props){
            super(props, context)
            getInjectors(context.store).injectReducer(key, reducer);
        }
        render(){
            return <WrappedComponent {...this.props} />
        }
    }
    return hoistNonReactStatics(ReducerInjector, WrappedComponent)
}