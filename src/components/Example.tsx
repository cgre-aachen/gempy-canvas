import React, { useEffect } from "react";
import { connect } from "react-redux";

import { AppState } from "../store";

import { ChatState } from "../store/chat/types";
import { sendMessage } from "../store/chat/actions";

import { thunkSendMessage } from "../thunks";

// https://thoughtbot.com/blog/using-redux-with-react-hooks

interface AppProps {
  sendMessage: typeof sendMessage;
  chat: ChatState;
  thunkSendMessage: any;
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

    this.props.thunkSendMessage("This message was sent by a thunk!");
  }

  render() {
    const messages = this.props.chat;
    console.log(messages);
    return <div className="parent">Hello World</div>;
  }
}

const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
  counter: state.counter
});

export default connect(mapStateToProps, {
  sendMessage,
  thunkSendMessage
})(Example);
