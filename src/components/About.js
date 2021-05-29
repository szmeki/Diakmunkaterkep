import React from 'react';
import './About.css';
import Navbar from "./Navbar"
import dsc_1 from './dsc_1.png';
import dsc_2 from './dsc_2.png';
import dsc_3 from './dsc_3.png';
import dsc_4 from './dsc_4.png';
import { Link } from 'react-router-dom';


export default function About(props) {

  return (
    <>
      <div>
      <Navbar value={3} />       
      <div class="start-container">
        <h1 class="title">Diákmunkatérkép</h1>
        <p>Nehéz és a fárasztó a munkakeresés? Találd meg álmaid munkáját pár másodperc alatt.</p>
        <div class="main-btn">
            <Link to="/">
                <button class="btn-slide">
                    <span class="slide-btn-text">Érdekel</span>
                </button>
            </Link>
        </div>
    </div>
    <div class="benefits-container" id="benefits">
        <div class="left-benefits">
            <div class="text-container">
                <h2>Spórolj időt, és könnyítsd meg az életed</h2>
                <p>Az oldalamon kigyújtöttem az összes fellelhető iskolaszövetkezet munkalehetőségeit, így nem kell órákig böngészned a különböző oldalakon.</p>
                <div class="left1-btn">
                    <Link to="/">
                        <button class="btn-slide">
                            <span class="slide-btn-text">Munkák</span>
                        </button>
                    </Link>
                </div>
            </div>
            <img src={dsc_1} alt=""/>
        </div>
        <div class="right-benefits">
        <img src={dsc_4} alt=""/>
            <div class="text-container">
                <h2>Napi frissülés, hogy ne maradj le semmiről</h2>
                <p>A kialakított automatizmusnak hála, mindennap az éppen aktuális munkák találhatók meg az odalon.</p>
                <div class="right1-btn">
                    <Link to="/">
                        <button class="btn-slide">
                            <span class="slide-btn-text">Munkák</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div class="left-benefits">
            <div class="text-container">
                <h2>Reklámoktól mentes, folyamatosan ellenőrzött oldal</h2>
                <p>A kigyűjtött munkákat az adminisztrátor folyamatosa ellenőrzi, hogy csak valós adatok szerepeljenek.</p>
                <div class="left2-btn">
                <   Link to="/">
                        <button class="btn-slide">
                            <span class="slide-btn-text">Munkák</span>
                        </button>
                    </Link>
                </div>
            </div>
            <img src={dsc_2} alt=""/>
        </div>
        <div class="right-benefits">
        <img src={dsc_3} alt=""/>
            <div class="text-container">
                <h2>Egyedi kereső funkciók, mert minden perced számít</h2>
                <p>A különböző keresési opcióknak hála tényleg pillanatok alatt megtalálhatod amit keresel.</p>
                <div class="right2-btn">
                    <Link to="/">
                        <button class="btn-slide">
                            <span class="slide-btn-text">Munkák</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    <div class="description-container">
        <div class="about-us" id="about-us">
            <h2>Amiben különbözik ez az oldal</h2>
            <ol>
                <div class="left-dsc">
                    <li><div>Napi szinten frissített adatbázis</div></li>
                    <li><div>Folyamatos háttér ellenőrzés</div></li>
                    <li><div>Gyors és gördülékeny használat</div></li>
                </div>
                <div class="right-dsc">
                    <li><div>Az diákokért van, nincs üzleti célja</div></li>
                    <li><div>Friss, reszponzív modern dizájn</div></li>
                    <li><div>Reklámoktól mentes környezet</div></li>
                </div>
            </ol>
            <Link to="/">
                <button class="btn-slide">
                    <span class="slide-btn-text">Munkák</span>
                </button>
            </Link>
        </div>
    </div>
      </div>

    </>
  );
}