import React, { Component } from 'react';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        render() {
            const { error } = this.props;
            console.log('error', this.props.error);
            return error
                ? <div style={{ color: 'red' }}>
                      Ошибка: {error}
                  </div>
                : <EnhancedComponent {...this.state} {...this.props} />;
        }
    }

    return Enhancer;
}
