import React from "react";

export const List = ({ data }) => {
  return (
    <>
      {data && (
        <div>
          {Object.keys(data).map((key) => {
            return (
              <div key={key}>
                {key}: {data[key]}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
