import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFirestore } from "../../firebase/useFirestore";
import { uploadFile } from "../../firebase/firebaseStorage";
import "./customerReview.css";
// https://i.pinimg.com/564x/97/43/ec/9743ecac80966a95e9d328c08b995c04.jpg
const CustomerReview = () => {
  const { addItem } = useFirestore("reviews");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectName: "",
    review: "",
    avatar: null,
  });
  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, avatar: file }));
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.projectName ||
        !formData.review
      ) {
        toast.error("Please fill in all fields except the avatar.", {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
        return;
      }

      let avatarUrl = null;
      if (formData.avatar) {
        try {
          avatarUrl = await uploadFile(formData.avatar, "avatars");
        } catch (error) {
          toast.error("Error uploading avatar. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
          return;
        }
      }

      const reviewData = {
        name: formData.name,
        email: formData.email,
        projectName: formData.projectName,
        review: formData.review,
        avatar: avatarUrl,
        status: "pending",
      };

      await addItem(reviewData);

      toast.success("Review submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
      setFormData({
        name: "",
        email: "",
        projectName: "",
        avatar: null,
        review: "",
      });
      setAvatarPreview(null);
    } catch (error) {
      toast.error(
        "There was an error submitting your review. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        }
      );
    }
  };

  return (
    <section className="contact section" id="CustomerReview">
      <ToastContainer />
      <h2 className="section__title">Customer Review</h2>
      <span className="section__subtitle">Submit your review</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Review Details</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="image-upload-container">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
              />
              <div
                onClick={() => fileInputRef.current.click()}
                className="image-upload-placeholder"
              >
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Preview"
                    className="image-preview"
                  />
                ) : (
                  <div className="image-upload-icon">
                    <svg
                      width="26"
                      height="21"
                      viewBox="0 0 26 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.7813 20.8H1.21873C0.545489 20.8 0 20.2629 0 19.6V4.89192C0 4.22942 0.545489 3.69194 1.21873 3.69194H6.42384L8.37574 0.478529C8.59832 0.189482 8.94704 0 9.34378 0H16.6562C16.9986 0 17.3065 0.140217 17.5283 0.363677L17.5291 0.362514L19.5988 3.69194H24.7813C25.4545 3.69194 26 4.22942 26 4.89192V19.6C26 20.2629 25.4545 20.8 24.7813 20.8ZM13 6.15323C9.44446 6.15323 6.56227 8.99141 6.56227 12.4919C6.56227 15.9928 9.44446 18.8306 13 18.8306C16.5556 18.8306 19.4378 15.9928 19.4378 12.4919C19.4378 8.99141 16.5556 6.15323 13 6.15323ZM9.27432 12.4919C9.27432 14.5178 10.9425 16.1604 13 16.1604C15.0578 16.1604 16.7257 14.5178 16.7257 12.4919C16.7257 10.4658 15.0578 8.82355 13 8.82355C10.9425 8.82355 9.27432 10.4658 9.27432 12.4919Z"
                        fill="#98A7C5"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <span className="image-upload-text">
                {formData.avatar ? formData.avatar.name : "Add Your Image"}
              </span>
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact__form-input"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Project Name</label>
              <input
                type="text"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                required
                className="contact__form-input"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Review</label>
              <textarea
                required
                className="contact__form-input"
                name="review"
                id="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Write your Review"
              ></textarea>
            </div>

            <button
              type="submit"
              className="button button--flex"
              title="Submit Review"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
