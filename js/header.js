class MyHeader extends HTMLElement {
	connectedCallback(){
		this.innerHTML = `
		<header>
            <!-- start navigation -->
            <nav class="navbar navbar-default bootsnav navbar-top header-light background-transparent nav-box-width navbar-expand-lg">
                <div class="container-fluid nav-header-container">
                    <!-- start logo -->
                    <div class="col-auto ps-0">
                        <a href="index.html" title="Pofo" class="logo"><img src="images/logo.png" data-at2x="images/logo@2x.png" class="logo-dark default" alt="Pofo"><img src="images/logo-white.png" data-at2x="images/logo-white@2x.png" alt="Pofo" class="logo-light"></a>
                    </div>
                    <!-- end logo -->
                    <div class="col accordion-menu pe-0 pe-md-3">
                        <button type="button" class="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle-1">
                            <span class="sr-only">toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1">
                            <ul id="accordion" class="nav navbar-nav navbar-left no-margin alt-font text-normal" data-in="animate__fadeIn" data-out="animate__fadeOut">
                                <!-- start menu item -->
                                <li class="dropdown megamenu-fw">
                                    <a href="/index.html">Home</a><i class="fas fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                                </li>
                                <!-- end menu item -->
                                <li class="dropdown megamenu-fw">
                                    <a href="/portfolio.html">Portfolio</a><i class="fas fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                                </li>
                                <li class="dropdown megamenu-fw">
                                    <a href="#">Contactez-moi</a><i class="fas fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto pe-0">
                        <div class="header-searchbar">
                            <a href="#search-header" class="header-search-form"><i class="fas fa-search search-button"></i></a>
                            <!-- search input-->
                            <form id="search-header" method="post" action="search-result.html" name="search-header" class="mfp-hide search-form-result">
                                <div class="search-form position-relative">
                                    <button type="submit" class="fas fa-search close-search search-button"></button>
                                    <input type="text" name="search" class="search-input" placeholder="Enter your keywords..." autocomplete="off">
                                </div>
                            </form>
                        </div>
                        <div class="header-social-icon d-none d-md-inline-block">
                            <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="https://dribbble.com/" title="Dribbble" target="_blank"><i class="fab fa-dribbble"></i></a>                          
                        </div>
                    </div>
                </div>
            </nav>
            <!-- end navigation --> 
        </header>

		`
	}
}

customElements.define('my-header',MyHeader);