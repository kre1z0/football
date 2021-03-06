import React from 'react';

import styles from './header.scss';

const Header = ({ tHead, columnsWidth, scrollLeft }) =>
    <div
        style={{ transform: `translateX(-${scrollLeft}px)` }}
        className={styles.tableWrapper}
    >
        <table>
            <thead>
                <tr>
                    {tHead.map((item, index) =>
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
