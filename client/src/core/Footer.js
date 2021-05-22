import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer mt-5 pt-3" >
            <div className="row w-100">
                <h2 id="contactus" className="mx-auto text-black font-weight-bold">
                    <span>Contact Us</span>
                </h2>
            </div>
            <div className="container">
                <div className="row text-white">
                    <div className="col row">
                        <div className="col d-flex flex-column">
                        <div className="imgContainer">
						<img src="./imgs/main_bg_trans.png" alt="asd" />
					    </div>
	
                        </div>
                        
                    </div>
                    <div className="col">
                        <form action="" className="">
                            <div className="form-group"  >
                                <label htmlFor="name">Full Name</label>
                                <input className="form-control out1" type="text" name="name" id="name"  placeholder="John Doe"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="query">Query</label>
                                <textarea className="form-control out1" name="query" id="query" cols="30" rows="10" placeholder="Describe your query here"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>






        <div class="row footer1 justify-content-between w-100 ">
            
                <div class="col-7 col-sm-5">
                    <div class="row justify-content-center">
                        <div class="col-12 col-sm-8 mt-4">
                            <p>© Copyright 2020 Musicana</p>
                        </div>
                    </div>
                    
                </div>
                        <div class="col-12 col-sm-4 mt-3">
                            <div class="text-center">
                                <a class="btn btn-social-icon btn-google" href="http://google.com/+">
                                    <i class="fa fa-google-plus"></i></a> 
                                    <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                                        <i class="fa fa-facebook"></i></a>
                                    <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
                                        <i class="fa fa-linkedin"></i></a> 
                                    <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                                        <i class="fa fa-twitter"></i></a> 
                                    <a class="btn btn-social-icon btn-google" href="http://youtube.com/">
                                        <i class="fa fa-youtube"></i></a> 
                                    <a class="btn btn-social-icon" href="mailto:"><i class="fa fa-envelope-o"></i></a>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>
                                 
                                    

        </footer>
    )
}

//style={{background: '#0C2461'}}


    
                 