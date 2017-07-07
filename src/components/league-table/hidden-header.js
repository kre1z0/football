import React from 'react';

import styles from './hidden-header.scss';

const HiddenHeader = ({ header, onRef }) =>
    <thead>
        <tr>
            {header.map((item, index) =>
                <th
                    className={styles.headerCell}
                    key={`th-${index}`}
                    ref={e => {
                        if (e) {
                            onRef(e, index);
                        }
                    }}
                >
                    <div style={{ height: 0, overflow: 'hidden' }}>
                        {item}
                    </div>
                </th>,
            )}
        </tr>
    </thead>;

export default HiddenHeader;
