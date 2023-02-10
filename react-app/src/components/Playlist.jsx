import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchDatafromApi, fetchPlaylist } from "../utils/api";
import { Context } from "../context/contextAPI";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";
import Login from "./Login";

const Playlist = () => {
  const [video, setVideo] = useState([]);
  const { user } = useContext(Context);
  const { setLoading } = useContext(Context);
  const { modal } = useContext(Context);
  console.log(user.id);
  useEffect(() => {
    setLoading(true);
    document.getElementById("root").classList.remove("custom-h");
    const fatch = async () => {
      const playlist = await fetchPlaylist(user.id);
      for (let i = 0; i < playlist.length; i++) {
        console.log("Loop");
        console.log(playlist[i].videoid);
        var res = await fetchDatafromApi(
          "video/details/?id=" + playlist[i].videoid
        );
        setVideo((prevVideo) => [...prevVideo, res.data]);
      }
    };
    fatch();
    setLoading(false);
  }, [user.id]);

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
          <div className="grid grid-cols-1 gap-2 p-5">
            {video &&
              video?.map((item, index) => {
                return <SearchResultVideoCard key={index} video={item} />;
              })}
          </div>
        </div>
      </div>
      {modal && <Login />}
    </>
  );
};
export default Playlist;
