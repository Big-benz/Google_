
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Title -->

    <title>GOOGLE CLONE</title>

    <!-- Link to CSS-->

    <link rel="stylesheet" href="style.css">

    <!-- BOXICON NODE PACKAGE MANAGER -->

    <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css">
    
</head>

<body>

    <!-- Menu Container -->

    <div class="container" id="container">

        <!-- Menu List -->

        <div class="menu">

            <li><a href="#" class="img">Gmail</a></li>

            <li><a href="#" class="img">Images</a></li>

            <li><a href="#"><i class='bx bxs-grid' id="icon"></i></a></li>

            <li><a href="#" class="name">W</a></li>

        </div>

    </div>

    <!-- Items present in the menu icon container -->

    <div class="options">

        <div class="options-container">

            <div class="data">

                <li><div class="google">

                    <a href="#"><i class='bx bxl-google'></i></a>

                    <h6>Search</h6>

                </div></li>

                <li><div class="YouTube">

                    <a href="#"><i class='bx bxl-youtube'></i></a>

                    <h6>YouTube</h6>

                </div></li>

                <li><div class="mongo">

                    <a href="#"><i class='bx bxl-mongodb'></i></a>

                    <h6>Mongodb</h6>

                </div></li>
               
            </div>

            <div class="data">

                <li><div class="meta">

                    <a href="#"><i class='bx bxl-meta'></i></a>

                    <h6>Meta</h6>

                </div></li>

                <li><div class="twitter">

                    <a href="#"><i class='bx bxl-twitter'></i></a>

                    <h6>twitter</h6>

                </div></li>

                <li><div class="snapchat">

                    <a href="#"><i class='bx bxl-snapchat'></i></a>

                    <h6>Snapchat</h6>

                </div></li>
          
            </div> 

            <div class="data">

                <li><div class="tiktok">

                    <a href="#"><i class='bx bxl-tiktok'></i></a>

                    <h6>tiktok</h6>

                </div></li>

                <li><div class="venmo">

                    <a href="#"><i class='bx bxl-venmo'></i></a>

                    <h6>Venmo</h6>

                </div></li>

                <li><div class="xing">

                    <a href="#"><i class='bx bxl-xing'></i><a>

                    <h6>Xing</h6>

                </div></li>
               
            </div>     
            
        </div>
     
    </div>

    <!-- Google text logo -->

    <div class="logo">

        <h2><span class="G">G</span><span class="o1">o</span><span class="o">o</span><span class="g">g</span><span class="l">l</span><span class="e">e</span></h2>

        <!-- Search-icon -->

        <div class="search-box">

            <button class="search-btn"><a href="#"><i class='bx bx-search'></i></a></button>

            <input type="search" class="srch" placeholder="Search Google Or Type URL">

            <button class="mic"><a href="#"><i class='bx bxs-microphone'></i></a></button>

        </div>

    </div>

    <!-- Recently Opened items -->

    <div class="socials">

        <div class="socials-container">

                <a href="#"><i class='bx bxl-youtube'></i></a>      <span><i class='bx bx-dots-vertical-rounded'></i></span>

                <h3>YouTube</h3>
        </div>

        <div class="socials-container">

            <a href="#"><i class='bx bxl-github'></i></a>      <span><i class='bx bx-dots-vertical-rounded'></i></span>

            <h3>Github</h3>

        </div>

        <div class="socials-container">

            <a href="#"><i class='bx bxl-facebook-circle'></i></a>      <span><i class='bx bx-dots-vertical-rounded'></i></span>

            <h3>Facebook</h3>

        </div>

        <div class="socials-container">

            <a href="#"><i class='bx bxl-whatsapp' ></i></a>      <span><i class='bx bx-dots-vertical-rounded'></i></span>

            <h3>Whatsapp</h3>

        </div>
        
    </div>

    <!-- Digita-clock -->

    <div class="time">

        <span id="hours">00</span>

        <span>:</span>

        <span id="minutes">00</span>

        <span>:</span>

        <span id="seconds">00</span>

        <span id="session">AM</span>

    </div>
    
    <!-- Quick weather access -->

    <div class="weather-view">

        <a href="#" class="weather-link">view weather</a>

    </div>

    <!-- Theme color flipper -->

    <div class="theme-toggle">

        <div class="color" id="color"></div>

        <button class="theme-btn">Theme-toggle</button>

    </div>

   <!-- Pop Up weather App -->

    <section class="weather-app" id="weather-app">

        <div class="weather-wrapper">
            
            <div class="weather-container">

                <div class="app-title">

                    <p>Today's Weather Forecast</p>

                </div>

                <!-- Cancel button for weather icon  -->

                <div class="cancel-icon" id="cancel-icon">

                    <i class='bx bx-x'></i>

                </div>

                <!-- Notification if weather geolocation is disabled -->

                <div class="notification"></div>

                <div class="weather-container">

                  <div class="weather-icon">

                    <img src="WEATHER-ICONS/unknown.png" alt="" />

                  </div>

                  <div class="temperature-value">

                    <p>- °<span>C</span></p>

                  </div>

                  <div class="temperature-description">

                    <p>-</p>

                  </div>

                  
                  <div class="humidity">

                    <p>-</p>

                  </div>

                  <div class="pressure">

                    <p>-</p>
                    
                  </div>


                  <div class="location">

                    <p>-</p>

                  </div>

                </div>

            </div>

        </div>
        
    </section>

    <script src="app.js"></script>

</body>

</html>
