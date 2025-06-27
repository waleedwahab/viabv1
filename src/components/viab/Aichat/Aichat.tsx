"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Aichat.css";

export default function Aichat() {
    const[closeactive, setcloseactive] = useState(false);
  const [messages] = useState([
    {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
    {
      sender: "user",
      text: "I'm planning a residential renovation.",
    },
    {
      sender: "ai",
      text: "Understood. Could you describe the finishes you’re considering for these rooms?",
    },
    {
      sender: "user",
      text: "I'm looking at high-end finishes, including hardwood flooring and custom cabinetry.",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },

       {
      sender: "ai",
      text: "Hello! To start, could you please specify the type of project you're working on?",
    },
  ]);

  const CloseSideBar = ()=>{
setcloseactive(!closeactive);
  }
  return (
    <div className="chat-container">
    <div className={`sidebar ${closeactive ? "closed" : ""}`}>
  {
    closeactive ? (
      <img
        src="/assets/icons/png/historyopeningicon.png"
        className="mt-5"
        width={20}
        height={20}
        onClick={CloseSideBar}
      />
    ) : (
      <>
      <div className="d-flex flex-column justify-content-between align-items-between   height-sidebar  ">
        <div className="d-flex align-items-start gap-5 mt-5">
          <button className="btn btn-light txt-dark ms-1">New Chat</button>
          <img
            src="/assets/icons/png/historyclosingicon.png"
            className="mt-2"
            width={20}
            height={20}
            onClick={CloseSideBar}
          />
        </div>
       
        <div className="serach-chats ">
        <input
          className="form-control mb-3 mt-5 pt-2 pb-2 search-static"
          placeholder="Search Chats..."
        />
          <p>Lorem ipsum dolor sit amet elit</p>
          <p>Lorem ipsum dolor sit amet elit</p>
         
          <p>Lorem ipsum dolor sit amet elit</p>
          <p>Lorem ipsum dolor sit amet elit</p>
        </div>
        <div>
        <button className="btn upgrade-clr mt-5 pt-3">
          <span>
            <img
              src="/assets/icons/png/upgradeplan.png"
              className="me-3"
              width={20}
              height={20}
            />
          </span>
          Upgrade Plan
        </button>
        </div>
        </div>
      </>
    )
  }
</div>

        {/* {!closeactive?(
      <div className="sidebar">
        <div className="d-flex align-items-start gap-5 mt-5">
        <button className="btn btn-light txt-dark ms-1">New Chat</button>
        <img src = "/assets/icons/png/historyclosingicon.png" className="mt-2" width = {20}height={20} onClick={CloseSideBar}></img>
        </div>
        <input className="form-control mb-3 mt-5 pt-2 pb-2" placeholder="Search Chats..." />
        <div>
          <p>Lorem ipsum dolor sit amet elit</p>
          <p>Lorem ipsum dolor sit amet  elit</p>
          <p>Lorem ipsum dolor sit amet elit</p>
        </div>
        <button className="btn upgrade-clr mt-5  pt-3 pb-3"> <span><img src = "/assets/icons/png/upgradeplan.png" className="me-3" width={20} height={20}></img> </span>Upgrade Plan</button>
      </div>
        ):(
            <div className="sidebar ">
                <img src = "/assets/icons/png/historyopeningicon.png" className=" mt-5" width = {20}height={20} onClick={CloseSideBar}></img>
            </div>
        )

        } */}

      <div className="chat-main">
        <div className="chat-header">Project Details</div>
        <div className="chat-subtext">
          Please provide the following information to generate your Bill of Quantities (BOQ).
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div className="message-row" key={i}>
              {msg.sender === "ai" && <div className="ai-avatar"><img src="/assets/icons/png/aiicon.png" className="ai-avatar "></img></div>}
              <div
                className={`message-bubble ${
                  msg.sender === "user" ? "message-user" : "message-ai"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && <div className="user-avatar"><img src="/assets/icons/png/usericon.png" className="user-avatar"></img></div>}
            </div>
          ))}
        </div>

        <div className="chat-footer">
          <div className="input-bar">
            <span><img src = "/assets/icons/png/plusicon.png" width={25} height={25}></img></span>
            <input type="text" placeholder="Type Message" className= {closeactive ? "aimsginputactiveclass" : "aimsginput"}/>
            <span><img src = "/assets/icons/png/voic-rec-icon.png" width={25} height={27}></img></span>
            <button className="btn btn-link"><span className="send-bg"><img src = "/assets/icons/png/sendmsgicon.png" width={25} height={25} className="text-center"></img> </span></button>
          </div>

          <div className="footer-buttons ps-2 pe-2 mb-2">
            <button className="btn  boq-btns">Generate BOQ</button>
            <button className="btn btn-outline-dark archite-drawing">Generate Architectural Drawings</button>
          </div>
        </div>
      </div>
    </div>
  );
}
