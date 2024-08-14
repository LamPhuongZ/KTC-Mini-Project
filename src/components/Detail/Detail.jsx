/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useEffect } from "react";

const Detail = ({ item, onSelect: handleSelect }) => {
  useEffect(() => {
    if (item) document.getElementById("my_modal_3").showModal();
  }, [item]);

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box text-black rounded-none">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            onClick={() => handleSelect()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            X
          </button>
        </form>
        <h3 className="font-bold text-lg">{item?.title || ""}</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  );
};

export default Detail;
