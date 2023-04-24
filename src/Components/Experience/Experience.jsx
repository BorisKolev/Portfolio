import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5> What Skills I Have </h5>
      <h2> My Experience </h2>

      <div className='container experience__container'>

        <div className='experience__languages'>

          <h3> Languages </h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> C# </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>
            
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> Javascript / TS </h4>
                <small className="text-light"> intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> Java </h4>
                <small className="text-light"> intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> Python </h4>
                <small className="text-light"> intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> SQL </h4>
                <small className="text-light"> intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> HTML/CSS </h4>
                <small className="text-light"> intermediate </small>
              </div>
            </article>

          </div>

        </div>

        <div className='experience__frameworks__architecturalPatterns'>

        <h3> Architectures / Frameworks / Patterns </h3>
          <div className="experience__content">

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> Microservices </h4>
                <small className="text-light"> Experience </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> Clean architecture </h4>
                <small className="text-light"> Experience </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> .NET / IoC </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> REST APIs  </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> DDD, CI/CD  </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> React </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> WPF/Prism </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4> Monolithic architecture </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>  MVVM / MVC </h4>
                <small className="text-light"> Intermediate </small>
              </div>            
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience