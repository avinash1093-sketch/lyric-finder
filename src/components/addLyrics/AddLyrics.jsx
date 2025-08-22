import Axios from "axios";
import { useState } from "react";
import "../addLyrics/AddLyrics.css";
import Navbar from "../navbar/Navbar";
import { DEV_URL, PROD_URL } from "../../config";
import { useLocation } from "react-router-dom";

const AddLyrics = () => {
  const location = useLocation();
  const { email } = location.state || {};
  const [formData, setFormData] = useState({
    artistName: "",
    songName: "",
    lyrics: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let addLyrics = async (e) => {
    e.preventDefault();
    if (
      formData.artistName === "" ||
      formData.songName === "" ||
      formData.lyrics === ""
    ) {
      setError({
        errorMessage: "Please enter both artist and song name.",
      });
      return;
    }
    setError("");
    try {
      let response = await Axios.post(`${PROD_URL}/lyrics/addOne`, formData, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.data.insertedLyrics) {
        setFormData({
          artistName: response.data.insertedLyrics.artist,
          songName: response.data.insertedLyrics.song,
          lyrics: response.data.insertedLyrics.lyrics,
        });
      } else {
        setError({
          errorMessage: "Lyrics not Saved",
        });
      }
    } catch (error) {
      setError({
        errorMessage: "Something Went Wrong. Try again",
      });
    }
  };

  return (
    <>
      <Navbar userEmail={email} />
      <div className="lyrics-app">
        <h1>Add Lyrics to your List</h1>
        <form onSubmit={addLyrics}>
          <div className="lyrics-form">
            <input
              className="artist"
              type="text"
              name="artistName"
              value={formData.artistName}
              placeholder="Artist Name"
              onChange={handleChange}
            />
            <input
              className="song"
              type="text"
              name="songName"
              value={formData.songName}
              placeholder="Song Name"
              onChange={handleChange}
            />
            <input
              className="lyrics"
              type="text"
              name="lyrics"
              value={formData.lyrics}
              placeholder="Add Lyric"
              onChange={handleChange}
            />
            <button className="btn" type="submit">
              Add Lyrics
            </button>
          </div>
          <hr />
          {error ? (
            <div style={{ color: "red" }}>{error.errorMessage}</div>
          ) : (
            <pre>
              <h2>{formData.lyrics}</h2>
            </pre>
          )}
        </form>
      </div>
    </>
  );
};

export default AddLyrics;
