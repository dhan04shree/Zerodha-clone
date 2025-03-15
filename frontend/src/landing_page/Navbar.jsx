export default function Navbar(){
    return(
    <nav class="navbar navbar-expand-lg border-bottom">
        <div class="container p-2">
            <a class="navbar-brand"  href="#"><img src="images/logo.svg" style={{width:"25%"}} alt="logo" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link f-link" href="#">Signup</a>
                    <a class="nav-link f-link" href="#">About</a>
                    <a class="nav-link f-link" href="#">Products</a>
                    <a class="nav-link f-link" href="#">Pricing</a>
                    <a class="nav-link f-link" href="#">Support</a>
                    <a class="nav-link" href="#"><i class="fa-solid fa-bars"></i></a>
                </div>
            </div>
        </div>
    </nav>
    );
}