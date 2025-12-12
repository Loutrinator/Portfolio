class MyFooter extends HTMLElement {
	connectedCallback(){
		var footer = `
<footer class="footer-strip-dark padding-50px-tb sm-padding-30px-tb bg-light-olive color-dark-olive">
    <div class="container">
        <div class="row align-items-center">
            <!-- start logo -->
            <div class="col-md-3 text-center text-md-start sm-margin-20px-bottom">
                <a href="/index.html"><img class="footer-logo" src="/images/logo.png" data-at2x="/images/logo@2x.png" alt="Antoine Pavy"></a>
            </div> 
            <!-- end logo -->
            <!-- start copyright -->
            <div class="col-md-6 text-center text-medium sm-margin-10px-bottom font-weight-bold">
                <!-- &copy; --> 2025
            </div>
            <!-- end copyright -->
            <!-- start social media -->
            <div class="col-md-3 text-center text-md-end">
                <div class="social-icon-style-8 d-inline-block align-middle">
                    <ul class="small-icon mb-0">
                        <li><a class="linkedin color-dark-olive" href="https://www.linkedin.com/in/antoine-pavy/" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                        <li><a class="github color-dark-olive" href="https://github.com/Loutrinator" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></li>
                        <li><a class="instagram color-dark-olive" href="https://www.instagram.com/photo.apavy/" target="_blank"><i class="fab fa-instagram me-0" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <!-- end social media -->
        </div>
    </div>
</footer>`

		this.innerHTML = footer;
	}
}

customElements.define('my-footer',MyFooter);
