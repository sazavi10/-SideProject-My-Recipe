import React from 'react';

const Category = ({index, cateTitle, selected, onVisible, onSetFilter, data}) => {
return (
    <li onClick ={() => onVisible(index)}><span>{cateTitle}</span>
      <ul className={selected===true?'active':null}>
       {
          data.map(
            (data, idx) => {
              return(
                <li onClick={(e) =>  {
                  e.stopPropagation();
                  onSetFilter({id: index, childId:idx})
                  onVisible({index})
                }}
                  key={idx}>{data}</li>
              )
            }  
          )
        }
      </ul>
    </li>
  );
}

export default Category;