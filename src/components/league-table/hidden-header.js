import React from 'react';

import styles from './hidden-header.scss';

const HiddenHeader = ({ header, onRef }) =>
    <thead>
        <tr>
            {header.map((item, index) =>
                <th key={`th-${index}`}>
                    <div
                        ref={e => {
                            if (e) {
                                onRef(e, index);
                            }
                        }}
                        className={styles.hiddenCell}
                    >
                        {item}
                    </div>
                </th>,
            )}
        </tr>
    </thead>;

export default HiddenHeader;
