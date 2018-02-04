import axios from 'axios';

const chatroomApi = 'http://localhost:8000/chatroom';

export const getMessages = async () => {
  const response = await axios.get(chatroomApi)
  return response.data
}

export const createMessage = async (message) => {
  const response = await axios.post(chatroomApi, message)
  return response.data
}
