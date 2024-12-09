import { io } from "socket.io-client";

let socket = io("http://localhost:7000/");
export default socket;
