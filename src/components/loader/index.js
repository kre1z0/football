import React from 'react';
import Loader from 'material-ui/CircularProgress';
import { indigo900 } from 'material-ui/styles/colors';

const innerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
};

const Loaders = () =>
    <Loader
        color={indigo900}
        thickness={15}
        size={150}
        innerStyle={innerStyle}
    />;

export default Loaders;
