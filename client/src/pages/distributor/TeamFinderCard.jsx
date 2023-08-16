import React from "react";
import "./teamFinderCard.css";
import { motion } from "framer-motion";
import { Backdrop } from "../../components/backdrop/Backdrop";
import land_grad from "../../assets/land-grad.png";

export const TeamFinderCard = ({ setModal }) => {
  return (
    <Backdrop onClick={() => setModal(false)}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="teamfindercardbody2">
          <img className="teamfindercardbg" src={land_grad} alt="gradient" />
          <div className="teamfindercontent">
            <h1>Confirm Your Deal</h1>
            <form action="" className="teamfinderform">
              <div className="teamfinderinputs">
                <h4>Your Deal : </h4>
                <div className="inputbox">
                  <input
                    name="title"
                    placeholder="Rs"
                    type="text"
                    required
                  />
                </div>
              </div>
            </form>
            <div className="teamfindersubmit">
              <div type="submit" id="sb" className="teamsubmit">
                Submit
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default TeamFinderCard;
