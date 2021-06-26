import React from 'react';

const contact = () => {

    const userInput = (e) => {
        console.log(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form onSubmit={submitHandler}>
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" placeholder="Full name *" />
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" placeholder="Email Address *" />
                            </div>
                            <textarea onChange={userInput} cols="50" rows="5"></textarea>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;