import React from 'react';
import mod from '../Users/Users.module.sass';

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={mod.pageBlock}>{pages.map(p => {
            return <div className={`${props.currentPage === p && mod.selectedPage} ${mod.page}`}
                        onClick={() => {
                            props.onPagesChange(p)
                        }}>{p}</div>
        })}</div>
    )
};

export default Paginator;