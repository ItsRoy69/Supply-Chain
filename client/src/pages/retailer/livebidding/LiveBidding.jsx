import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./livebidding.css";
import search_icon from "../../../assets/search.svg";
import sort_icon from "../../../assets/sort.svg";
import { Select, Skeleton, Container, SimpleGrid, Flex } from "@mantine/core";
import axios from "axios";

const LiveBidding = () => {
  const [search, setSearch] = useState("");
  const prodarray = JSON.parse(localStorage.getItem("myArray"));
  console.log("checking products for bidding===>", prodarray);
  const [liveBiddings, setLiveBiddings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/deals/deal") // Update the endpoint as needed
      .then((response) => {
        setLiveBiddings(response.data); // Assuming the data is returned as an array of posts
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

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
          {liveBiddings.length > 0 ? (
            liveBiddings.map((bid) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card"
                key={bid.id}
              >
                <h1 style={{ textTransform: "capitalize" }}>{bid.title}</h1>
                <p className="time-txt">
                  {/* Auction starts at - {bid.auctionStart} */}
                </p>
                {/* <p className="time">Auction ends at - {bid.auctionEnd}</p> */}
                <p className="time-txt">Product rate: {bid.product}</p>
                <p className="time-txt">Product quantity: {bid.quantity}</p>
                {/* <p className="status">{bid.status}</p> */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="participate-btn"
                  onClick={() => {
                    setLiveBiddings((prevBiddings) =>
                      prevBiddings.filter((item) => item.id !== bid.id)
                    );
                  }}
                >
                  Delete
                </motion.div>
              </motion.div>
            ))
          ) : (
            <p>No live biddings available.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LiveBidding;
