import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./livebidding.css";
import search_icon from "../../../assets/search.svg";
import sort_icon from "../../../assets/sort.svg";
import { Select, Skeleton, Container, SimpleGrid, Flex } from "@mantine/core";

const LiveBidding = () => {
  const [search, setSearch] = useState("");

  return (
    <motion.div
      className="hackathon"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="profileedit">
        <h1>Live Biddings</h1>
      </div>
      <div className="hackathon-main">
        <div className="header-search">
          <div className="header-searchbox">
            <img src={search_icon} alt="Search" />
            <input
              type="text"
              placeholder="Find Live Biddings"
              className="search-inp"
            />
          </div>
          <Select
            transition="scale-y"
            placeholder="Sort by"
            data={["Newest First", "Oldest First"]}
            icon={<img src={sort_icon} alt="search" />}
            className="select-sort"
          />
        </div>

        <div className="hackathons-list">
          <motion.div whileHover={{ scale: 1.05 }} className="card">
            <h1>product.name</h1>
            <p className="time">Date</p>
            <p className="time-txt">product.start</p>
            <p className="time">Ends</p>
            <p className="time-txt">product rate</p>
            <p className="status">100</p>
            <motion.div whileTap={{ scale: 0.9 }} className="participate-btn">
              Accept
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default LiveBidding;