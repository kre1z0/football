import React from 'react';

import styles from './header.scss';

const Header = ({ header, columnsWidth }) =>
    <table>
        <thead>
            <tr className={styles.headerRow}>
                {header.map((item, index) =>
                    <th
                        style={{
                            width: columnsWidth[index],
                        }}
                        key={`th-${index}`}
                    >
                        {item}
                    </th>,
                )}
            </tr>
        </thead>
    </table>;

export default Header;
