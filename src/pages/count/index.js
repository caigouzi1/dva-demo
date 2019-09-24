import styles from './index.less';
import { connect } from 'dva';
import React from 'react';

@connect((count) => ({
    count
}))

export default class extends React.Component {
    render() {
        const { count } = this.props.count
        const { dispatch } = this.props
        console.log(count);
        
        return (
            <div className={styles.normal}>
                <div className={styles.record}>Highest Record: {count.record}</div>
                <div className={styles.current}>{count.current}</div>
                <div className={styles.button}>
                    <button onClick={() => { dispatch({ type: 'count/add' }); }}>+</button>
                </div>
            </div>
        );
    }
}
