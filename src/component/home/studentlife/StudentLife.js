import { Route, Link } from 'react-router-dom';
//this component is used to find all students
//and display a card for each student

import React from 'react';

export default function StudentLife() {
    return (
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {/*<<<<<<<<Loop starts here>>>>>>>>>>*/}
                <div className="col">
                    <div className="card shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div className="card-body">
                            <p className="card-text">First Name: </p>
                            <p className="card-text">Last Name: </p>
                            <p className="card-text">Telephone Number: </p>
                            <p className="card-text">Email: </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                        Facebook
                                    </button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                        LinkedIn
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<<<<<<<<Loop stops here>>>>>>>>>>*/}
            </div>



        </div>

    );
}
