import React, { useState } from "react";
import AgoraRTC from "agora-rtc-sdk";
import MyEditor from "./MyEditor";
import "../styles/custom.css";
function ExamPage() {
  const [page, setPage] = useState("");
  let question;
  let comp;
  if (page === "1") {
    question = "What are some basic Operating System?";
    comp = <MyEditor />;
  } else if (page === "2") {
    question = "what are page faulting?";
    comp = <MyEditor />;
  } else if (page === "3") {
    question = "Define ACID properties of DBMS";
    comp = <MyEditor />;
  } else {
    question = "what is time complexity of merge sort?";
    comp = <MyEditor />;
  }
  var rtc = {
    client: null,
    joined: false,
    published: false,
    localStream: null,
    remoteStreams: [],
    params: {},
  };

  // Options for joining a channel
  var option = {
    appID: "1918264190ac441faa7dee3792e418ee",
    channel: "Himanshu",
    uid: null,
    token:
      "0061918264190ac441faa7dee3792e418eeIABvHmaIyGu1+tu1Bfg3/dOUiC7WW/DkoJbg8rQtbCzz6Vt/SZEAAAAAEAALrnX4x3QsYQEAAQDGdCxh",
    key: "42abb8bcb7784bbba61c111ad2c4af95",
  };

  function joinChannel(role) {
    // Create a client
    rtc.client = AgoraRTC.createClient({ mode: "live", codec: "h264" });
    // Initialize the client
    rtc.client.init(
      option.appID,
      function () {
        console.log("init success");

        // Join a channel
        rtc.client.join(
          option.token ? option.token : null,
          option.channel,
          option.uid ? +option.uid : null,
          function (uid) {
            console.log(
              "join channel: " + option.channel + " success, uid: " + uid
            );
            rtc.params.uid = uid;
            if (role === "host") {
              rtc.client.setClientRole("host");
              // Create a local stream
              rtc.localStream = AgoraRTC.createStream({
                streamID: rtc.params.uid,
                audio: true,
                video: true,
                screen: false,
              });

              // Initialize the local stream
              rtc.localStream.init(
                function () {
                  console.log("init local stream success");
                  rtc.localStream.play("local_stream");
                  rtc.client.publish(rtc.localStream, function (err) {
                    console.log("publish failed");
                    console.error(err);
                  });
                },
                function (err) {
                  console.error("init local stream failed ", err);
                }
              );

              rtc.client.on("connection-state-change", function (evt) {
                console.log("audience", evt);
              });
            }
            if (role === "audience") {
              rtc.client.on("connection-state-change", function (evt) {
                console.log("audience", evt);
              });

              rtc.client.on("stream-added", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                if (id !== rtc.params.uid) {
                  rtc.client.subscribe(remoteStream, function (err) {
                    console.log("stream subscribe failed", err);
                  });
                }
                console.log("stream-added remote-uid: ", id);
              });

              rtc.client.on("stream-removed", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                console.log("stream-removed remote-uid: ", id);
              });

              rtc.client.on("stream-subscribed", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                remoteStream.play("remote_video_");
                console.log("stream-subscribed remote-uid: ", id);
              });

              rtc.client.on("stream-unsubscribed", function (evt) {
                var remoteStream = evt.stream;
                var id = remoteStream.getId();
                remoteStream.pause("remote_video_");
                console.log("stream-unsubscribed remote-uid: ", id);
              });
            }
          },
          function (err) {
            console.error("client join failed", err);
          }
        );
      },
      (err) => {
        console.error(err);
      }
    );
  }

  function leaveEventHost(params) {
    rtc.client.unpublish(rtc.localStream, function (err) {
      console.log("publish failed");
      console.error(err);
    });
    rtc.client.leave(function (ev) {
      console.log(ev);
    });
  }
  function leaveEventAudience(params) {
    rtc.client.leave(
      function () {
        console.log("client leaves channel");
        //??????
      },
      function (err) {
        console.log("client leave failed ", err);
        //error handling
      }
    );
  }
  return (
    <div>
      <button class="btn btn-warning" onClick={() => joinChannel("audience")}>
        Turn On Camera
      </button>
      <button
        class="btn btn-danger"
        onClick={() => leaveEventAudience("audience")}
      >
        End Test
      </button>
      <div className="container" style={{ marginTop: "30px" }}>
        <div class="card">
          <div class="card-header bg-warning">{question}</div>
          <div class="card-body">
            <div class="card-text">{comp}</div>
          </div>
        </div>
      </div>
      <div
        className="btn-toolbar btngroup-pos"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div class="btn-group me-2" role="group" aria-label="First group">
          <button
            onClick={() => setPage("1")}
            type="button"
            class="btn btn-primary"
          >
            1
          </button>
          <button
            type="button"
            onClick={() => setPage("2")}
            class="btn btn-primary"
          >
            2
          </button>
          <button
            type="button"
            onClick={() => setPage("3")}
            class="btn btn-primary"
          >
            3
          </button>
          <button
            type="button"
            onClick={() => setPage("4")}
            class="btn btn-primary"
          >
            4
          </button>
        </div>
      </div>
      <div
        id="local_stream"
        className="local_stream student"
        style={{ width: "400px", height: "400px" }}
      ></div>
      <div id="remote_video_" className="student" />
    </div>
  );
}
export default ExamPage;
