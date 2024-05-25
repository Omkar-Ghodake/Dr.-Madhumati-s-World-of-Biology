"use client";

import { motion } from "framer-motion";

const ShortVideos = () => {
  return (
    <div className="md:pt-5">
      <div className="w-full overflow-hidden overflow-x-scroll md:overflow-x-hidden scrollbar-sm p-2 md:scale-[1.3]">
        <div className="flex w-fit md:w-full justify-center space-x-5">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none"
            id="video1"
          >
            <video
              controls
              autoPlay={true}
              className="rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black"
            >
              <source src={"/shortVideos/shortVideo1.mp4"} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none"
            id="video2"
          >
            <video
              controls
              autoPlay={true}
              className="rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black"
            >
              <source src={"/shortVideos/shortVideo2.mp4"} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none"
            id="video3"
          >
            <video
              controls
              autoPlay={true}
              className="rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black"
            >
              <source src={"/shortVideos/shortVideo3.mp4"} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative w-[20rem] md:w-fit h-[30rem] md:h-[50vh] rounded-xl select-none"
            id="video4"
          >
            <video
              controls
              autoPlay={true}
              className="rounded-xl w-[20rem] md:w-full h-[30rem] md:h-[50vh] bg-black"
            >
              <source src={"/shortVideos/shortVideo4.mp4"} />
              Your browser does not support the video tag...
            </video>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="#video1">
          <div
            className={`bg-primary w-[1rem] h-[1rem] rounded-full mx-2`}
          ></div>
        </a>
        <a href="#video2">
          <div
            className={`bg-primary w-[1rem] h-[1rem] rounded-full mx-2`}
          ></div>
        </a>
        <a href="#video3">
          <div
            className={`bg-primary w-[1rem] h-[1rem] rounded-full mx-2`}
          ></div>
        </a>
        <a href="#video4">
          <div
            className={`bg-primary w-[1rem] h-[1rem] rounded-full mx-2`}
          ></div>
        </a>
      </div>
    </div>
  );
};

export default ShortVideos;
