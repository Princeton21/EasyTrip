import React from 'react'
import st from "./Steps.module.css";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
const Steps = () => {
  return (
    <>
      <div className={st.steps}>
        <div className={st.step}>
          <div className={st.step_header}>Step 1:</div>
          <div className={st.step_info}>
            {" "}
            a d ad a dah
          </div>
        </div>
        <div className={st.step}>
          <div className={st.step_header}>Step 2:</div>
          <div className={st.step_info}>lorem blah blah blah</div>
        </div>
        <div className={st.step}>
          <div className={st.step_header}>Step 3:</div>
          <div className={st.step_info}>lorem blah blah blah</div>
        </div>

        <div className={st.navigate}>
          <div className={st.left}><AiOutlineArrowLeft className=''/></div>
          <div className={st.right}><AiOutlineArrowRight/></div>
        </div>
      </div>
    </>
  );
}

export default Steps