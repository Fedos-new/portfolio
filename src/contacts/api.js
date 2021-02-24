import axios from "axios";

export const API = {
    sendMail(body) {
        return axios.post('https://server-send-mail.herokuapp.com/sendMessage', body)
    }
}
