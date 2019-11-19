import React, {useState} from 'react';
import mod from '../Users/Users.module.sass';
import arrowLeft from '../../images/chevron-pointing-to-the-left.svg';
import arrowRight from '../../images/chevron-pointing-to-the-right.svg';

let Paginator = ({totalItemsCount, pageSize, currentPage, onPagesChange, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (<div className={mod.usersPaginator}>
            {
                portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}><img src={arrowLeft} alt="arrowLeft"/></button>
            }
            <div className={mod.pageBlock}>{
                pages.filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                    .map(p => {
                        return <div className={`${currentPage === p && mod.selectedPage} ${mod.page}`}
                                    onClick={() => {
                                        onPagesChange(p)
                                    }}>{p}</div>
                    })}</div>
            {
                portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}><img src={arrowRight} alt="arrowRight"/></button>
            }
        </div>
    )
};

export default Paginator;