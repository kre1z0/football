import React from 'react';

import styles from './header.scss';

const Header = ({ header, columnsWidth }) =>
    <div className={styles.tableWrapper}>
        <table>
            <thead>
                <tr>
                    {header.map((item, index) =>
                        <th key={`th-${index}`}>
                            <div
                                className={styles.headerCell}
                                style={{
                                    width: columnsWidth[index],
                                }}
                            >
                                {item}
                            </div>
                        </th>,
                    )}
                </tr>
            </thead>
        </table>
    </div>;

export default Header;
