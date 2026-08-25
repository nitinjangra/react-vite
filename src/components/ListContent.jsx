import { useState } from "react";

import { IoCaretDownCircle } from "react-icons/io5";
import { IoCaretUpCircle } from "react-icons/io5";
import { IoRemoveCircle } from "react-icons/io5";
const ListContent = ({ data = [] }) => {
  const [completeList, setCompleteList] = useState(data);
  const handleRemoveItem = (title, itemToBeRemoved) => {
    const listTobeUpdated = completeList.find((item) => item.title === title);
    const indexToBeRemoved = listTobeUpdated.list.findIndex(
      (item) => item === itemToBeRemoved,
    );

    listTobeUpdated.list.splice(indexToBeRemoved, 1);
    const updatedList = completeList.map((listItem) => {
      if (listItem.title === title) {
        return listTobeUpdated;
      } else {
        return listItem;
      }
    });
    console.log(listTobeUpdated);
    setCompleteList(updatedList);
  };

  const handleMoveItem = (title, itemToBeMoved, isMovingUp) => {
    const listTobeUpdated = completeList.find((item) => item.title === title);
    const indexToBeMoved = listTobeUpdated.list.findIndex(
      (item) => item === itemToBeMoved,
    );
    if (indexToBeMoved >= 0) {
      const indexDecider = isMovingUp ? -1 : +1;
      const indexToBeUpdatedItem =
        listTobeUpdated.list[indexToBeMoved + indexDecider];
      console.log(indexToBeUpdatedItem);

      listTobeUpdated.list.splice(indexToBeMoved, 1, indexToBeUpdatedItem);
      listTobeUpdated.list.splice(
        indexToBeMoved + indexDecider,
        1,
        itemToBeMoved,
      );
      console.log(listTobeUpdated);

      const updatedList = completeList.map((listItem) => {
        if (listItem.title === title) {
          return listTobeUpdated;
        } else {
          return listItem;
        }
      });
      setCompleteList(updatedList);
    }
  };
  return (
    <>
      {data.map((list) => {
        return (
          <section key={list.title}>
            <h3>{list.title}</h3>
            <ul>
              {list.list.map((item, index) => (
                <li key={item}>
                  <span className="item-label">{item}</span>
                  <span className="item-actions">
                    <button
                      aria-label={`Remove ${item}`}
                      onClick={() => handleRemoveItem(list.title, item)}
                    >
                      <IoRemoveCircle />
                    </button>
                    <button
                      aria-label={`Move ${item} up`}
                      disabled={index === 0}
                      onClick={() => handleMoveItem(list.title, item, true)}
                    >
                      <IoCaretUpCircle />
                    </button>
                    <button
                      aria-label={`Move ${item} down`}
                      disabled={index === list.list.length - 1}
                      onClick={() => handleMoveItem(list.title, item, false)}
                    >
                      <IoCaretDownCircle />
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
};

export default ListContent;
