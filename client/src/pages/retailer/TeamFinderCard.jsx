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
        <div className="teamfindercardbody">
          <img className="teamfindercardbg" src={land_grad} alt="gradient" />
          <div className="teamfindercontent">
            <h1>Find a teammate</h1>
            <form action="" className="teamfinderform">
              <div className="teamfinderinputs">
                <h4>Title : </h4>
                <div className="inputbox">
                  <input
                    name="title"
                    placeholder="Role You Searching For"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="teamfinderinputs">
                <h4>Email : </h4>
                <div className="inputbox">
                  <input
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="teamfinderskills">
                <div className="teamfinderskillhead">
                  <h4>Skills : </h4>
                  <div className="inputbox">
                    <input
                      name="skill"
                      placeholder="Enter the skill you are looking for"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <textarea></textarea>{" "}
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
