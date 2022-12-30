import React from "react";
import PageHeader from "../components/PageHeader";
import galleryimg from "../assets/gallery.jpg";
import { blogData } from "../constants";
import '../styles/gallery.css'

const Gallery = () => {
  return (
    <main id="gallery">
      <PageHeader pageTitle={"Gallery"} bgImage={galleryimg} />
      <section className="blog-content">
        {blogData.map((blog) => {
          return (
            <div className="blog-post">
              <img src={blog.img} alt="" />
              <div className="text">
                <div className="meta">
                  <div className="category">Artificail Inteligence</div>
                  <div className="date">12 july 2022</div>
                </div>
                {/* <div className="title">{blog.title}</div> */}
                {/* <div className="author">
                  <img src={people02} alt="" />
                  <div className="text">
                    <h2 className="name">{blog.author.name}</h2>
                    <p>{blog.author.position}</p>
                  </div>
                </div> */}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Gallery;
