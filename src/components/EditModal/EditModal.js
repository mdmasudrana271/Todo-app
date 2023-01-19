import React from "react";

const EditModal = ({todo}) => {
  
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-black">
            Congratulations random Internet user!
          </h3>
          <p className="py-4 text-black">
            {todo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
