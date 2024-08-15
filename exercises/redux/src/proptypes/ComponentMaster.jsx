import React from "react";

export const ComponentMaster = ({list, title}) => {
    return (
        <div>
         <p> {title} </p>
         <ul>
            {list.map ((item) => (
                <ul key={item.id} > {item.name} </ul>
            ))}
         </ul>
        </div>
    );
};

