<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Basic Page Info
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta charset="utf-8">
    <title>OSCAR - A premium portfolio / agency template from designova</title>
    <meta name="description" content="OSCAR - A premium portfolio / agency template from designova">
    <meta name="author" content="designova">

    <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="icon" type="image/png" href="images/favicon.png" />

    <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="fonts/webfonts.css">
    <link href='//fonts.googleapis.com/css?family=Raleway:400,300,600%7CLato:400,300,100,700,900' rel='stylesheet' type='text/css'>

    <!-- ICON FONTS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="stylesheets/ionicons.min.css">

    <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <link rel="stylesheet" href="stylesheets/bootstrap.css">
    <link rel="stylesheet" href="elements/css/elements.css">
    <link rel="stylesheet" href="stylesheets/sinister.css">
    <link rel="stylesheet" href="stylesheets/venobox.css">
    <link rel="stylesheet" href="stylesheets/owl.carousel.css">
    <link rel="stylesheet" href="stylesheets/slimmenu.css">
    <link rel="stylesheet" href="stylesheets/main.css">
    <link rel="stylesheet" href="stylesheets/main-bg.css">
    <link rel="stylesheet" href="stylesheets/main-responsive.css">

    <!-- LESS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <!-- <link rel="stylesheet/less" type="text/css" href="less/color.less">
    <link rel="stylesheet/less" type="text/css" href="less/fonts.less">
    <script src="less/less.min.js"></script> -->


</head>

<body>



    <!-- Preloader
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <div id="preloader">
        <div id="status"></div>
    </div>
    <!-- end : preloader -->



    <?php include "./menu.php"; ?>



    <!-- MASTER CONTENT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
    <section class="mastwrap">

    

      
      <section class="container about pad-top-half pad-bottom-half">

        <div class="row">
              <article class="col-md-5 text-left  inner-pad">
                <h6 class="super-text  font2bold black">Contacto</h6>
              </article>
              <article class="col-md-5 col-md-offset-2 text-left ">
                <h3 class="main-heading  font2light black"> <a class="hvr-sweep-to-right" href="mailto:jmo@tao-arquitectura.com"> jmo@tao-arquitectura.com </a> / 999 196 11 14<br/>
                Calle 38 No. 335 x 53 y 57 Fracc. Villas la Hacienda.
                Mérida, Yucatán, México</h3>
              </article>
        </div>
            
      </section>




      <section class="container pad silver-bg ">

        <div class="row">
              <article class="col-md-12 pad text-left">
             
                <div class="contact-item">
                              <div class="alert alert-error error color-bg" id="fname">
                                <p class="white">Name must not be empty</p>
                              </div>
                              <div class="alert alert-error  error color-bg" id="fmail">
                                <p class="white">Please provide a valid email</p>
                              </div>
                               <div class="alert alert-error  error color-bg" id="fmsg">
                                 <p class="white">Message should not be empty</p>
                               </div>
                                <form name="myform" id="contactForm" action="sendcontact.php" enctype="multipart/form-data" method="post"> 
                                  <article>
                                    <input type="text" placeholder="Tu Nombre" id="name" name="name" size="100" class="border-form white font4light">
                                  </article>
                                  <article>
                                     <input type="text" placeholder="E-Mail" name="email" id="email" size="30" class="border-form white font4light">
                                   </article>
                                   <article>
                                    <textarea placeholder="Mensaje" name="message" cols="40" rows="5" id="msg" class="border-form white font4light"></textarea>
                                    <div class="btn-wrap  text-left">
                                      <button class="btn  btn-oscar btn-oscar-dark" id="submit" name="submit" type="submit">Enviar</button>
                                    </div>
                                  </article>
                               </form>
                        </div>

              </article>
        </div>
            
      </section>




    
      <div class="container-fluid">
            <div class="row">
                <article class="col-md-12 map-wrap no-pad">
                    <div id="map" class=" fullheight"></div>
                </article>
            </div>
      </div>






    </section>
    <!-- end : mastwrap -->


    <!-- FOOTER
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    
    <?php include "./footer.php"; ?>
    <!-- end : mastfoot -->


    <!-- End Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->

    <!-- JS
    –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <script src="javascripts/libs/common.js"></script>
    <script src="elements/js/elements.js"></script>
    <script src="javascripts/custom/form-validation.js"></script>
    <script src="javascripts/custom/main.js"></script>

  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

<script type="text/javascript">
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 17,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(21.0192109, -89.6162), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "saturation": 36
                                },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 40
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                },
                                {
                                    "weight": 1.2
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 20
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 21
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 29
                                },
                                {
                                    "weight": 0.2
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 18
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 16
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 19
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#000000"
                                },
                                {
                                    "lightness": 17
                                }
                            ]
                        }
                    ]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }
        </script>

</body>

</html>