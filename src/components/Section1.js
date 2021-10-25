import React from 'react';
import balloon from "../img/balloon.png";
function Section1() {
    return (
        <section id="section1">
            <div class="grid wide padding">
                <div class="section__container">
                    <div class="section__text">
                        <div class="text1">
                            SPOTIFY PREMIUM
                        </div>
                        <div class="text2">
                            Get 3 months of Premium for free
                        </div>
                        <div class="description">
                            Enjoy ad-free music, offline listening, and more. Cancel anytime.
                        </div>
                        <button class="button button1">GET 3 MONTHS FREE</button>
                        <div class="sub_description">Individual plan only. Only $9.99/month after. Offer not available to
                            users who already tried Premium. Terms and conditions apply. Offer ends Dec 31, 2020.</div>
                    </div>
                    <img src={balloon} alt="" class="balloon__img" />
                </div>
            </div>
        </section>
    )
}
export default Section1;