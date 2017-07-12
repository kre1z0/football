import React, { Component } from 'react';
import HiddenHeader from '../../components/table/hidden-header';
import Header from '../../components/table/header';

import styles from './table.scss';

class Table extends Component {
    state = {
        columnsWidth: {},
        scrollLeft: 0,
    };

    onRef = (ref, columnIndex) => {
        const { tHead } = this.props;
        if (
            this._columnsWidth[columnIndex] === ref.offsetWidth ||
            ref.offsetWidth === 0
        )
            return;

        this._columnsWidth[columnIndex] = ref.offsetWidth;

        if (Object.keys(this._columnsWidth).length === tHead.length) {
            this.setState(state => ({
                columnsWidth: this._columnsWidth,
            }));
        }
    };

    _columnsWidth = {};

    onBodyScroll = ({ target }) => {
        const scrollLeft = target.scrollLeft;

        if (scrollLeft !== this.state.scrollLeft) {
            this.setState(state => ({
                scrollLeft,
            }));
        }
    };

    render() {
        const { title, tHead, children, pagination } = this.props;
        const { columnsWidth, scrollLeft } = this.state;
        return (
            <div onScroll={this.onBodyScroll} className={styles.tableContainer}>
                <div className={styles.titleBlock}>
                    {title &&
                        <h2 className={styles.title}>
                            {title}
                        </h2>}
                    {pagination && pagination}
                </div>
                <Header
                    scrollLeft={scrollLeft}
                    tHead={tHead}
                    columnsWidth={columnsWidth}
                />
                <div className={styles.leagueGrid}>
                    <table className={styles.table}>
                        <HiddenHeader tHead={tHead} onRef={this.onRef} />
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Table;
