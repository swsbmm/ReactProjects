const API_URL = "http://127.0.0.1:8000/api/markers/";

export const listMarkers = async() => {
    return await fetch(API_URL);
}