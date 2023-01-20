import React from "react";
import { useContext } from "react";
import { StateContext } from "../../context/StateProvider";

const EditModal = ({todo}) => {

  const {setEditTodo} = useContext(StateContext)
  
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
          <input type="text" placeholder="Type here" onBlur={(e)=> setEditTodo(e.target.value)} className="text-black input input-bordered input-accent w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
