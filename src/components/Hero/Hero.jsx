import React, { useEffect } from 'react';

import './Hero.scss';
import './Hero-media.scss';

function Hero() {
    useEffect(() => {
        var c = document.getElementById('canv');
        // @ts-ignore
        var $ = c.getContext('2d');

        var col = function (x, y, r, g, b) {
            $.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
            $.fillRect(x, y, 1, 1);
        };
        var R = function (x, y, t) {
            return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
        };

        var G = function (x, y, t) {
            return Math.floor(
                192 + 64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
            );
        };

        var B = function (x, y, t) {
            return Math.floor(
                192 +
                    64 *
                        Math.sin(
                            5 * Math.sin(t / 9) +
                                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
                        )
            );
        };

        var t = 0;

        var run = function () {
            for (let x = 0; x <= 35; x++) {
                for (let y = 0; y <= 35; y++) {
                    col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
                }
            }
            t = t + 0.02;
            window.requestAnimationFrame(run);
        };

        run();
    });

    return (
        <div className="hero">
            <div className="background-wrapper">
                <canvas id="canv" width="32" height="32"></canvas>
            </div>
            <div className="title-wrapper">
                <h1 className="title">Payments infrastructure for the internet</h1>
                <p className="copy title__second">Payments infrastructure for the internet</p>
                <p className="copy title__overlay">Payments infrastructure for the internet</p>
            </div>
        </div>
    );
}

export default Hero;
