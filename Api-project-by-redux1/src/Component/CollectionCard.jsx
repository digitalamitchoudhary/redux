import React from "react";
import { removeCollection } from "../Redux/Slice/collectionSlice";
import { useDispatch } from "react-redux";
import { Bounce, toast } from "react-toastify";

function CollectionCard({ item }) {
  const dispatch = useDispatch();
  const removeToCollection = () => {
    dispatch(
      removeCollection({
        id: item.id,
        type: item.type,
      })
    );
  };
  return (
    <div>
      <div className="w-[18vw] relative h-80 bg-gray-200 rounded-xl overflow-hidden">
        <a target="_blank" className="h-full" href={item.url}>
          {item.type == "photo" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
          {item.type == "video" ? (
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              src={item.src}
            ></video>
          ) : (
            ""
          )}
          {item.type == "gif" ? (
            <img
              className="h-full w-full object-cover object-center"
              src={item.src}
              alt=""
            />
          ) : (
            ""
          )}
        </a>

        <div
          id="bottom"
          className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white"
        >
          <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">
            {item.title}
          </h2>
          <button
            onClick={() => {
              removeToCollection(item);
            //   console.log("Item removed:", item);

            //   toast.warn("Item Removed", {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: false,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     transition: Bounce,
            //   });
            }}
            className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
