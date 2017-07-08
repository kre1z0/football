import React from 'react';
import Paper from 'material-ui/Paper';

const Block = ({ children, style, className }) =>
    <Paper
        className={className}
        style={{ borderRadius: 3, ...style }}
        zDepth={1}
        rounded={false}
    >
        {children}
    </Paper>;

export default Block;
