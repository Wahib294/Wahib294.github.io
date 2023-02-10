import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import LeftNav from "./LeftNav";
import { fetchDatafromApi, addtoplaylist } from "../utils/api";
import { Context } from "../context/contextAPI";
import SuggestionVideoCard from "./SuggestionVideoCard";
import Login from "./Login";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { id } = useParams();
  const { setLoading } = useContext(Context);
  const { setSelectedCategory } = useContext(Context);
  const { user, userLogin, modal } = useContext(Context);

  useEffect(() => {
    setSelectedCategory("NEW");
    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchDatafromApi(`video/details/?id=${id}`)
      .then((res) => {
        console.log(res.data);
        setVideo(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchDatafromApi(`video/related-contents/?id=${id}`)
      .then((res) => {
        console.log(res);
        setRelatedVideos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const addtolist = () => {
    addtoplaylist(user.id, id);
    alert("Added to playlist");
  };

  return (
    <>
      <div className="flex flex-row h-[calc(100%-56px)] bg-black">
        <LeftNav />
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row lg:ml-[150px]">
          <div className="flex flex-col lg:ml-[-60px] lg:w-[calc(100%-450px)] xl:w-[calc(100%-400px)] px-0 py-3 lg:py-6 overflow-y-auto">
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                style={{ backgroundColor: "#000000" }}
                playing={true}
              />
            </div>
            <div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {video?.title}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
              <div className="flex">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={video?.author?.avatar[0]?.url}
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-3">
                  <div className="text-white text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-white/[0.7] text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
              </div>
              <div className="flex text-white mt-4 md:mt-0">
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                  <AiOutlineLike className="text-xl text-white mr-2" />
                  {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                </div>
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                  {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                </div>
                {userLogin && (
                  <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                    <button onClick={addtolist}>Add to Playlist</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:ml-[160px] lg:mr-[-160px] py-6 px-4 overflow-y-auto scrollbar-hide lg:w-[350px] xl:w-[400px]">
            {relatedVideos?.contents?.map((item, index) => {
              if (item?.type !== "video") return false;
              return <SuggestionVideoCard key={index} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
      {modal && <Login />}
    </>
  );
};

export default VideoDetails;
