import React, { useEffect, useState } from "react";
import { useFirestore } from "../../firebase/useFirestore";
import { uploadFile } from "../../firebase/firebaseStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollUp from "../../components/scrollUp/ScrollUp";
import "./addProjects.css";

const AddProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    demo: "",
    video: null,
    images: [],
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const { addItem } = useFirestore("projects");

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") === "true"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();

    if (password === "AlaaYasser963741852@@##" || isAuthenticated) {
      setIsAuthenticated(true);
      localStorage.setItem("auth", "true");
      toast.success("Authentication successful", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    } else {
      toast.error("Incorrect password", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleVideoChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (
      !formData.title ||
      !formData.demo ||
      imageFiles.length === 0 ||
      !videoFile
    ) {
      toast.error(
        "Please fill in all fields and upload at least one image and a video.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        }
      );
      setIsSubmitting(false);
      return;
    }

    try {
      // Upload images
      const imageUrls = await Promise.all(
        imageFiles.map((file) => uploadFile(file, "images"))
      );

      // Upload video
      const videoUrl = await uploadFile(videoFile, "videos");

      const projectData = {
        ...formData,
        images: imageUrls,
        video: videoUrl,
        createdAt: new Date(),
      };

      await addItem(projectData);
      toast.success("Project added successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      setIsSubmitting(false);
      setFormData({ title: "", demo: "", video: null, images: [] });
      setImageFiles([]);
      setVideoFile(null);
      setImagePreviews([]);
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error(
        "There was an error uploading your project. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        }
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`contact section ${!isAuthenticated && "form__Auth"}`}
      id="AddProject"
    >
      <ToastContainer />
      {!isAuthenticated ? (
        <div className="form__Auth_container">
          <h3 className="contact__title">Project Details</h3>
          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="contact__form-input"
              />
            </div>
            <button className="button button--flex" onClick={handleAuth}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <>
          <h2 className="section__title">Add New Project</h2>
          <span className="section__subtitle">Submit your project details</span>

          <div className="contact__container container grid">
            <div className="contact__content">
              <h3 className="contact__title">Project Details</h3>
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Demo</label>
                  <input
                    type="text"
                    id="demo"
                    name="demo"
                    value={formData.demo}
                    onChange={handleChange}
                    required
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Video</label>
                  <input
                    type="file"
                    id="video"
                    accept="video/*"
                    onChange={handleVideoChange}
                    required
                    className="contact__form-input"
                  />
                </div>
                <div className="contact__form-div">
                  <label className="contact__form-tag">Images</label>
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    required
                    className="contact__form-input"
                  />
                </div>
                <div className="image-previews">
                  {imagePreviews.map((preview, index) => (
                    <img
                      key={index}
                      src={preview}
                      alt={`preview ${index}`}
                      className="image-preview"
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className="button button--flex"
                  title="Add Project"
                >
                  Add Project
                </button>
              </form>
            </div>
          </div>
          <ScrollUp />
        </>
      )}
    </section>
  );
};

export default AddProject;
