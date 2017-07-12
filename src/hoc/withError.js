import React, { Component } from 'react';

import styles from './withError.scss';

export default function(EnhancedComponent) {
    class Enhancer extends Component {
        render() {
            const { error } = this.props;
            return error
                ? <div className={styles.error}>
                      Error: {error}
                  </div>
                : <EnhancedComponent {...this.state} {...this.props} />;
        }
    }

    return Enhancer;
}
