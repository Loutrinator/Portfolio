class MyHeader extends HTMLElement {
	connectedCallback(){
		var lightDefault = '';
		var darkDefault  = 'default';
		var whiteLink    = '';

		var isWhiteHeader = this.classList.contains("white-header");

		if(isWhiteHeader){
			lightDefault = 'default';
			darkDefault  = '';
			whiteLink    = "white-link";
		}
		var header = `
		<header>
            <!-- start navigation -->
            <nav class="navbar navbar-default bootsnav navbar-top header-light background-transparent nav-box-width `+ whiteLink+` navbar-expand-lg">
                <div class="container-fluid nav-header-container">
                    <!-- start logo -->
                    <div class="col-auto ps-0">
                        <a href="/index.html" title="Antoine Pavy" class="logo"><img src="/images/logo.png" data-at2x="/images/logo@2x.png" class="logo-dark `+darkDefault+`" alt="Antoine Pavy"><img src="/images/logo-white.png" data-at2x="/images/logo-white@2x.png" alt="Antoine Pavy" class="logo-light `+lightDefault+`"></a>
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
                                <li class="dropdown megamenu-fw">
                                    <a href="mailto:antoine.pavy92@gmail.com">Contactez-moi</a><i class="fas fa-angle-down dropdown-toggle" data-bs-toggle="dropdown" aria-hidden="true"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto pe-0">
                        <div class="header-social-icon d-none d-md-inline-block">
                            <a class="linkedin" href="https://www.linkedin.com/in/antoine-pavy/" target="_blank"><i class="fab fa-linkedin-in" aria-hidden="true"></i></a>
                            <a class="github" href="https://github.com/Loutrinator" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
                            <a class="instagram" href="https://www.instagram.com/the.3dee.guy/" target="_blank"><i class="fab fa-instagram me-0" aria-hidden="true"></i></a>                          
                        </div>
                    </div>
                </div>
            </nav>
            <!-- end navigation --> 
        </header>

		`

		this.innerHTML = header;
	}
}

customElements.define('my-header',MyHeader);
