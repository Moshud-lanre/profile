import axios from "axios";


export default axios.create({
    baseURL: "https://api.enye.tech/v1/"
    // params: {
    //     limit: this.props.perPage,
    //     offset: this.state.offset
    // }
});