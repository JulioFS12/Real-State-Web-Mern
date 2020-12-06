import React from 'react'
import { Link } from 'react-router-dom'
import { blog1 } from '../assets/Images'

export const BlogUser = () => {
    return (
        <section className="container">
            <div className="row mt-5">
                <div className="col-md-8 mt-5">
                    <h2 className="text-center mb-5">Nuestro Blog</h2>
                    <div>
                        <div className="row entrada mb-4">
                            <div className="col-sm-5">
                                <img src={blog1} alt="entrada blog" className="img-fluid" />
                            </div>
                            <div className="col-md-7">
                                <h3 className="my-2">Terraza en el techo de tu casa.</h3>
                                <p className="meta">
                                    Escrito el: <span>20/10/2018</span>  por: <span>Admin</span>
                                </p>
                                <p>Mauris malesuada arcu nec felis fermentum tempor. Sed dignissim facilisis purus, quis ornare velit lobortis vitae. In nibh augue, tincidunt nec vulputate sed, </p>
                                <Link to="/" className="btn btn-success">Leer más</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row entrada mb-4">
                            <div className="col-sm-5">
                                <img src={blog1} alt="entrada blog" className="img-fluid" />
                            </div>
                            <div className="col-md-7">
                                <h3 className="my-2">Terraza en el techo de tu casa.</h3>
                                <p className="meta">
                                    Escrito el: <span>20/10/2018</span>  por: <span>Admin</span>
                                </p>
                                <p>Mauris malesuada arcu nec felis fermentum tempor. Sed dignissim facilisis purus, quis ornare velit lobortis vitae. In nibh augue, tincidunt nec vulputate sed, </p>
                                <Link to="/" className="btn btn-success">Leer más</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h2 className="text-center mb-5">Our Blog</h2>
                    <div className="testimoniales p-5">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner text-light">
                                <div className="carousel-item active">
                                    <p className="testimonial-texto">
                                        Vestibulum et sem sem. Pellentesque habitant morbi tristique senectus et netus et malesuadatum tristique senectus”.
                                        <span className="d-block text-right mt-4"> - Persona 1</span>
                                    </p>
                                </div>
                                <div className="carousel-item">
                                    <p className="testimonial-texto">
                                        Vestibulum et sem sem. Pellentesque habitant morbi tristique senectus et netus et malesuadatum tristique senectus”.
                                        <span className="d-block text-right mt-4"> - Persona 2</span>
                                    </p>
                                </div>
                                <div className="carousel-item">
                                    <p className="testimonial-texto">
                                        Vestibulum et sem sem. Pellentesque habitant morbi tristique senectus et netus et malesuadatum tristique senectus”.
                                        <span className="d-block text-right mt-4"> - Persona 3</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
