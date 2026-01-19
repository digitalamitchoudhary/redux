import React, { useEffect } from "react";
import CollectionCard from "../Component/collectionCard";
import { useDispatch, useSelector } from "react-redux";
import { clearCollection, resetLastAction } from "../Redux/Slice/collectionSlice";
import { Bounce, toast } from "react-toastify";

function Collection() {
  // const collection  = JSON.parse(localStorage.getItem("collection")) || []; // Retrieve collection from localStorage
  const collection = useSelector((store) => store.collection.items); // Access collection items from Redux store
  const { lastAction, lastItemType } = useSelector(
    (state) => state.collection
  );
  const dispatch = useDispatch();
  const clearToAll = () => {
    dispatch(clearCollection());
  };

   useEffect(() => {
    if (!lastAction || !lastItemType) return;

    const label =
      lastItemType === "photo"
        ? "Image"
        : lastItemType === "video"
        ? "Video"
        : "GIF";

    if (lastAction === "REMOVED") {
      toast.warn(`${label} removed from collection`);
    }

    dispatch(resetLastAction());
  }, [lastAction, lastItemType, dispatch]);

  // const clearToAll = () => {
  //   // Clear collection in Redux store
  //   // Dispatch an action to clear the collection in the Redux store
  //   // Here, we will just clear the local storage for simplicity
  //   localStorage.removeItem("collection");
  //   window.location.reload(); // Reload to reflect changes
  // }
  return (
    <div className=" overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-semibold text-center">
            Your Collection.
          </h2>
          <button
            onClick={() => {
              clearToAll();
              toast.error(" Clear Collection !", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
              });
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-8 py-3 text-lg font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-5xl py-10 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}
       <div className='flex justify-start w-full flex-wrap gap-6'>
      {collection.map((item) => (
        <CollectionCard key={item.id} item={item} />
      ))}</div>
    </div>
  );
}

export default Collection;
