/*Shareable codes */
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="banner-header">
            <div class="container banner_caption py-5">
                <div class="row py-4">
                    <div class="col-lg-7 pt-5  text-justify">
                        
                    </div>
                </div>
            </div>
    </section>
    `;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<footer class="bg-custom text-white text-lg-start">
  <div class="container p-3">
    <div class="row">

      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Daily Mart NZ</h5>

        <p>
          Daily Mart NZ is a grocery store located at Manukau, Auckland, NZ. Daily Mart NZ was founded in Nov 2021 by Nicole Fabian. The main goal of this site is to provide access to an easier grocery shopping experience for all of our customers.
        </p>
        
    </div>
    
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Services</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="AboutUs.html" class="text-white">About Us</a>
          </li>
          <li>
            <a href="ContactUs.html" class="text-white">Contact Us</a>
          </li>
        </ul>
      </div>

       <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Products</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="Essentials.html" class="text-white">Essentials</a>
              </li>
              <li>
                <a href="Fruits.html" class="text-white">Fruits</a>
              </li>
              <li>
                <a href="Vegetables.html" class="text-white">Vegetables</a>
              </li>
             
               
            </ul>
        </div>
     
    </div>
  </div>

    <div class="container pb-4">
    <p id="thankyoumessage"> Thank you for signing up ! </p>
    <p id="errormessage"> Please enter valid email </p>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
             <input type="text" class="form-control form-control-sm"  id="footer-email" placeholder="Sign up to our newsletter now!"
                aria-label="Your email" aria-describedby="basic-addon2">
            </div>

            <div class="col-lg-2 col-md-2 col-sm-4">
             <button class="btn btn-sm btn-warning my-0" type="button" id="footer-signup">Sign up</button>
            </div>
        </div>
    </div>

  <div class="text-center p-2" style="background-color: rgba(0, 0, 0, 0.2);">
    <p>Grocery Website by Nicole Fabian </p>
  </div>

</footer>
 
    `;
    }
}




class Menu extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id = "nav-bar">
<nav class="navbar navbar-expand-lg navbar-light">
     <img src="images/HeadersAndLogo/cover.png"  class="header_logo" alt="brand logo"/>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
            <!--to adjust to correct layout-->
            <li class="nav-item active px-3">
                <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item active px-3">
                <a class="nav-link" href="AboutUs.html">About Us</a>
            </li>


            <li class="nav-item dropdown active ">
                <a class="nav-link dropdown-toggle pl-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Shop Now</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="Essentials.html">Essentials</a>
                    <a class="dropdown-item" href="Fruits.html">Fruits</a>
                    <a class="dropdown-item" href="Vegetables.html">Vegetables</a>
                </div>
            </li>


            <li class="nav-item active px-3">
                <a class="nav-link" href="ContactUs.html">Contact Us</a>
            </li>
        </ul>
    </div>
</nav>
</section>
   `;
    }
}

class prodModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section id="prodModal">
   <!-----------------Modal--------------------------->
    <div class="modal fade" id="productModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content text-center">
                <div class="modal-header">
                  
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 ">
                                <div class="check-icon"> <i class="fa fa-check-square-o fa-5x"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="container py-3">
                        <h2 style="color:forestgreen;"> Successful !</h2>
                        <p> Product has been added to the cart.</p>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</section>
`
    }
}


class SearchItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
   <!-----------------Modal--------------------------->
    <div class="modal fade" id="searchModal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content text-center">
                <div class="modal-header">
                  
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 ">
                                <div class="check-icon"> <i class="fa fa-check-square-o fa-5x"></i></div>
                            </div>
                        </div>
                    </div>

                    <div class="container py-3">
                        <h2 style="color:forestgreen;"> Success !</h2>
                        <p> Your success has been successful.</p>
                    </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
`
    }
}


customElements.define('main-menu', Menu);
customElements.define('main-header', Header);
customElements.define('main-search', SearchItem);
customElements.define('prod-modal', prodModal);
customElements.define('main-footer', Footer);