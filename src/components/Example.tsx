import React from "react";
import { connect } from "react-redux";

import { AppState } from "../store";

import { ChatState } from "../store/chat/types";
import { PointsState } from "../store/points/types";
import { sendMessage } from "../store/chat/actions";
import { addPoint } from "../store/points/actions";

import { thunkSendMessage } from "../thunks";

// https://thoughtbot.com/blog/using-redux-with-react-hooks

interface AppProps {
  // messages
  sendMessage: typeof sendMessage;
  chat: ChatState;
  thunkSendMessage: any;
  // points
  points: PointsState;
  addPoint: typeof addPoint;
}

class Example extends React.Component<AppProps> {
  state = {
    message: ""
  };

  componentDidMount() {
    this.props.sendMessage({
      user: "Chat Bot",
      message:
        "This is a very basic chat application written in typescript using react and redux. Feel free to explore the source code.",
      timestamp: new Date().getTime()
    });

    this.props.addPoint({
      x: 42,
      y: 42,
      z: 42,
      surface: "Surf0"
    });

    this.props.addPoint({
      x: 24,
      y: 24,
      z: 24,
      surface: "Surf0"
    });

    this.props.thunkSendMessage("This message was sent by a thunk!");
  }

  render() {
    const messages = this.props.chat;
    const points = this.props.points;
    console.log(points);
    console.log(messages);

    return <div className="parent">Hello World</div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
  points: state.points
});

export default connect(mapStateToProps, {
  sendMessage,
  addPoint,
  thunkSendMessage
})(Example);
