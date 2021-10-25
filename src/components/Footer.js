import React from 'react';
import logo from "../img/logo.png";
import ig from "../img/ig.png";
import fb from "../img/fb.png";
import twitter from "../img/twitter.png";
import usa from "../img/usa.jpg";
function Footer() {
    return (
        <footer class="footer">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-7 flex">
                        <div class="footer__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div class="footer__text">
                            <div class="footer__desc">Company</div>
                            <div class="footer__sub-desc">About</div>
                            <div class="footer__sub-desc">Jobs</div>
                            <div class="footer__sub-desc">For the Record</div>
                        </div>
                        <div class="footer__text">
                            <div class="footer__desc">Communities</div>
                            <div class="footer__sub-desc">For Artists</div>
                            <div class="footer__sub-desc">Developers</div>
                            <div class="footer__sub-desc">Brands</div>
                            <div class="footer__sub-desc">Investors</div>
                            <div class="footer__sub-desc">Vendors</div>
                        </div>
                        <div class="footer__text">
                            <div class="footer__desc">Useful Links</div>
                            <div class="footer__sub-desc">Support</div>
                            <div class="footer__sub-desc">Web Player</div>
                            <div class="footer__sub-desc">Free Mobile App</div>
                            <div class="footer__sub-desc">2020 Wrapped</div>
                        </div>
                    </div>
                    <div class="col l-5 footer__icon">
                        <a href="#">
                            <img src={ig} alt="" />
                        </a>
                        <a href="#">
                            <img src={fb} alt="" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                    </div>
                </div>
                <div class="row logo__usa">USA
                    <img src={usa} alt="" />
                </div>
                <div class="row footer__flex">
                    <div class="footer__link col l-7">
                        <a href="#">Legal</a>
                        <a href="#">Privacy Center</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">About Ads</a>
                        <a href="#">Additional CA Privacy Disclosures</a>
                    </div>
                    <div class="footer__footer col l-5">
                        <div>© 2020 Spotify AB</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;