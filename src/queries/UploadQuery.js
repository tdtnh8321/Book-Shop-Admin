import uploadApi from "../api/uploadApi";
const fetchApiUploadAvatar = async (formData) => {
  try {
    const res = await uploadApi.uploadAvatar(formData);
    return res;
  } catch (error) {
    console.log("Failed fetchApiUploadAvatar: ", error);
  }
};

export { fetchApiUploadAvatar };
