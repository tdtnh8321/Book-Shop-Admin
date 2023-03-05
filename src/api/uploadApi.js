import axiosClient from "./axiosClient";
class UploadApi {
  uploadAvatar = async (data) => {
    const url = "/api/upload_avatar";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
      headers: {
        "content-type": "multipart/form-data",
        //Authorization: token,
      },
    });
  };
}
const uploadApi = new UploadApi();
export default uploadApi;
