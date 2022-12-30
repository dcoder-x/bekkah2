import React from "react";
import PageHeader from "../components/PageHeader";
import { blog, people01, people02 } from "../assets";
import "../styles/blog.css";
import blog1 from "../assets/ai-energy.jpg";
import { blogData } from "../constants";

const Blog = () => {
  return (
    <main id="blog">
      <PageHeader pageTitle={"Blog"} bgImage={blog} />
      <section className="blog-header">
        <img src={blog1} alt="" />

        <div className="text">
          <div className="meta">
            <div className="category">Tech</div>
            <div className="date">12 july 2022</div>
          </div>
          <div className="title">
            <h1>Tech on Rampage</h1>
          </div>
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ut
              harum sapiente odio accusantium laborum veritatis fuga
              perspiciatis unde nulla voluptates reprehenderit tenetur nam
              molestias voluptas excepturi iste, dolor iure.
            </p>
          </div>
          <div className="author">
            <img src={people01} alt="" />
            <div className="text">
              <h2 className="name">Ayomikun Faluyi</h2>
              <p>Front End developer</p>
            </div>
          </div>
        </div>
      </section>
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
                <div className="title">{blog.title}</div>
                <div className="post">
                  {blog.content ||
                    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Inventore temporibus nisi minima praesentium eligendi rerum 
                                        quis suscipit esse voluptatibus quibusdam omnis a, veritatis enim, 
                                        numquam quaerat dignissimos quam similique. Reprehenderit.`}
                </div>
                <div className="author">
                  <img src={people02} alt="" />
                  <div className="text">
                    <h2 className="name">{blog.author.name}</h2>
                    <p>{blog.author.position}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Blog;
