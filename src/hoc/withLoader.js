import React, { Component } from 'react';
import Loader from 'material-ui/CircularProgress';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        render() {
            const { loading } = this.props;
            return !loading
                ? <EnhancedComponent {...this.state} {...this.props} />
                : <Loader className="loader overlay" />;
        }
    }

    return Enhancer;
}
