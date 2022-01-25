import React from "react";
import "./featured.scss";
import { PlayArrow } from "@material-ui/icons";
import { InfoOutlined } from "@material-ui/icons";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="Adventure" key="Adventure">
              Adventure
            </option>
            <option value="Crime" key="Crime">
              Crime
            </option>
            <option value="Fantasy" key="Fantasy">
              Fantasy
            </option>
            <option value="Historical" key="Historical">
              Historical
            </option>
            <option value="Horror" key="Horror">
              Horror
            </option>
            <option value="Romance" key="Romance">
              Romance
            </option>
            <option value="Sci-fi" key="Sci-fi">
              Sci-fi
            </option>
            <option value="Thriller" key="Thriller">
              Thriller
            </option>
            <option value="Western" key="Western">
              Western
            </option>
            <option value="Animation" key="Animation">
              Animation
            </option>
            <option value="Drama" key="Drama">
              Drama
            </option>
            <option value="Documentary" key="Documentary">
              Documentary
            </option>
          </select>
        </div>
      )}
      <img
        src="https://wwcsff.com/wp-content/uploads/2019/05/film-background-1334067869u9d.jpg"
        alt="featured"
      />
      <div className="info">
        <img
          src="https://64.media.tumblr.com/9fd9e2aae23bf9e6af85af7a5f1ba958/c8e523837d7d309c-19/s1280x1920/68d50e87515539b6a9e0707f644a4c493d31a55f.jpg"
          alt="featured"
        />
        <span className="desc">
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..."
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
