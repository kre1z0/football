import React from 'react';
import Loader from 'material-ui/CircularProgress';
import { indigo900 } from 'material-ui/styles/colors';

const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0)',
};

const Loaders = () =>
    <Loader style={style} color={indigo900} thickness={15} size={150} />;

export default Loaders;
