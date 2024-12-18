var express  = require('express')
  , session  = require('express-session')
  , passport = require('passport')
  , Strategy = require('passport-discord').Strategy
  , app      = express();
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const db = require('pro.db');

const webhook = require("webhook-discord")

const Hook = new webhook.Webhook("https://discord.com/api/webhooks/965658080396328960/a3eN_eUkRzJB0ek-qd0LDkhcss9gBvW0PQnyAFFruP3nCRUKuDo3Bh4mSciwG-nGbF7X")

$("#submit").click(function(){
  alert("The paragraph was clicked.");
});


passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) return next();
     res.sendFile(`/home/accxbcuh/public_html/main.html`);
}
var scopes = ['identify','email'];
var prompt = 'consent';

passport.use(new Strategy({
    clientID: '963522393345785886',
    clientSecret: '--pSGNeABrdPjoyUYYHQA81OiGB_TWO8',
    callbackURL: 'https://accxme.com/callback',
    scope: scopes,
    prompt: prompt
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/login', passport.authenticate('discord', { scope: scopes, prompt: prompt }), function(req, res) {});
app.get('/callback',
    passport.authenticate('discord', { failureRedirect: '/login' }), function(req, res) { res.redirect('/') } // auth success
);
app.get('/logout', checkAuth, async function(req, res) {
    await Hook.warn("website logs", `${req.user.username} just logged out`)
    await req.logout();
    await res.redirect('/');
});

app.get('/logout',  function(req, res) {
    
 req.logout();
res.redirect('/');
});

app.get('/team', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/team.html")
});

app.get('/leaderboard', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/leaderboard.html")
});

app.get('/news', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/news.html")
});
app.get('/contact', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/contact.html")
});
app.get('/kfwo', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/kfwo.html")
});
app.get('/socials', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/socials.html")
});
app.get('/supreme', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/supreme.html")
});
app.get('/auroracup', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/auroracup.html")
});
app.get('/tournaments', function(req, res) {
 res.sendFile("/home/accxbcuh/public_html/tournaments.html")
});



app.get('/dashboard', checkAuth, function(req, res) {
    if (db.has("admins", req.user.id)) {
        res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>ACCXME</title>
<!-- Stylesheets -->
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/design.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7152527158598569"
     crossorigin="anonymous"></script>
<link rel="shortcut icon" href="images/mainicon.png" type="image/x-icon">
<link rel="icon" href="images/mainicon.png" type="image/x-icon">
<link href="https://fonts.googleapis.com/css?family=Montserrat:700,900" rel="stylesheet">


<!-- Responsive -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

<!--Website Embed-->
<meta property="og:site_name" content="ACCxME">
<meta property="og:url" content="https://accxme.com">
<meta property="og:title" content="Main">
<meta property="og:description" content="Home page of ACCxME">
<meta property="og:type" content="website"> <meta name="og:image" itemprop="image" content="https://cdn.discordapp.com/avatars/938843255427178547/97a89954a9e5fad0ea6b24587a4723ee.png?size=1024
">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>


<div class="page-wrapper">
    <!-- Preloader -->
    <div class="preloader"><div class="icon"></div></div>

    <!-- Main Header -->
    <header class="main-header">
        <!-- Header Top -->
        <div class="header-top">
            <div class="auto-container clearfix">

                <div class="top-left clearfix">
                    <ul class="info-list">
                        <li>ACCxME, Advertisers and Tournaments Organizers based in ME Region!</li>
                    </ul>
                </div>

                <div class="top-right">
                    <ul class="social-icons">
                        <li><a href="https://twitter.com/ArabsCc"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="https://discord.gg/RzA8ZM8632"><span class="fab fa-discord"></span></a></li>
                        <li><a href="https://www.instagram.com/accxme_/"><span class="fab fa-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Header Upper -->
        <div class="header-upper">
            <div class="inner-container">
                <div class="auto-container clearfix">
                    <!--Logo-->
                    <div class="logo-outer">
                        <div class="logo"><a href="https://accxme.com/"><img src="images/main.png" alt="" title="ACCxME"></a></div>
                    </div>

                    <!--Nav Box-->
                    <div class="nav-outer clearfix">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu-1"></span></div>

                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix pull-left">
                                    <li><a href="https://accxme.com/">Home</a>  
                                    </li>
									<li class="dropdown"><a>Pages</a>
                                        <ul>
                                            <li><a href="socials">Socials</a></li>
											<li><a href="team">Our Team</a></li>
                                            <li><a href="https://discord.gg/RzA8ZM8632">Arab Scrims</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="news">News</a></li>
                                </ul>

                                <ul class="navigation pull-right clearfix">
                                    <li><a href="tournaments">Tournaments</a>
                                    </li>
                                    <li><a href="leaderboard">Leaderboard</a>
                                    </li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <!-- Main Menu End-->
                    </div>
                </div>
            </div>
        </div>
        <!--End Header Upper-->

        <!-- Sticky Header  -->
        <div class="sticky-header">
            <div class="auto-container clearfix">
                <!--Logo-->
                <div class="logo pull-left">
                    <a href="https://accxme.com/" title=""><img src="images/main.png" alt="" title="ACCxME"></a>
                </div>
                <!--Right Col-->
                <div class="pull-right">
                    <!-- Main Menu -->
                    <nav class="main-menu clearfix">
                        <!--Keep This Empty / Menu will come through Javascript-->
                    </nav><!-- Main Menu End-->
                </div>
            </div>
        </div><!-- End Sticky Menu -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-close"></span></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="https://accxme.com/"><img src="images/main.png" alt="" title="ACCxME"></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
				<!--Social Links-->
				<div class="social-links">
					<ul class="clearfix">
						<li><a href="https://twitter.com/ArabsCc"><span class="fab fa-twitter"></span></a></li>
						<li><a href="https://discord.gg/AmhPDPdT65"><span class="fab fa-discord"></span></a></li>
						<li><a href="https://www.instagram.com/accxme_/"><span class="fab fa-instagram"></span></a></li>
					</ul>
                </div>
            </nav>
        </div><!-- End Mobile Menu -->
    </header>
    
  <p>leaderboard id:</p>
  <input type="text" id="leaderboardid"><br><br>
  <p>before time end text:</p>
  <input type="text" id="lname"><br><br>
   <button id="submit">Click me!</button>

    <script>
   let leaderboard = $("#leaderboardid").val();
        $(document).ready(function () {
          $("#leaderboardid").attr("value", \`${db.get('leaderboardid')}\`);
          $("#submit").click(function () {
                if (leaderboard.startsWith(" ")) {
                alert(\`there is unknown error\`)
                } else {
                 console.log("tnrbe") 
                }
                
                });
            });
       

</script>
    
    
    
    
    
    
	<!-- Main Footer -->
    <footer class="main-footer">
    	<div class="auto-container">
        	<!--Widgets Section-->
            <div class="widgets-section">
            	<div class="row clearfix">
                	
                    <!--Column-->
                    <div class="column col-lg-4 col-md-6 col-sm-12">
						<div class="footer-widget logo-widget">
							<div class="logo">
                            	<a href="https://accxme.com/"><img src="images/main.png" alt="" /></a>
                            </div>
							<div class="text">This is the official website of ACCxME and its branches, Individual Tournaments Organizers and Advertisers.</div>
						</div>
					</div>
					
					<!--Column-->
                    <div class="column col-lg-4 col-md-6 col-sm-12">
						<div class="footer-widget links-widget">
							<div class="widget-content">
								<div class="footer-title">
									<h2>Links</h2>
								</div>
								<div class="row clearfix">
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<ul class="list">
											<li><a href="https://accxme.com/">Home</a></li>
											<li><a href="team">Our Team</a></li>
											<li><a href="tournaments">Tournaments</a></li>
                                            <li><a href="leaderboard">Leaderboard</a></li>
										</ul>
									</div>
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<ul class="list">
											<li><a href="contact">Help & Support</a></li>
										</ul>
									</div>
								</div>
							</div>	
						</div>
					</div>
					
					<!--Column-->
                    <div class="column col-lg-4 col-md-6 col-sm-12">
						<div class="footer-widget newsletter-widget">
							<div class="footer-title">
                            	<h2>Newsletter</h2>
                            </div>
							<div class="text">Subsrcibe to us now to stay uptodate!</div>
							<div class="newsletter-form">
                                <form method="post" action="contact">
                                    <div class="form-group clearfix">
                                        <input type="email" name="email" value="" placeholder="Email address" required>
                                        <button type="submit" class="theme-btn newsletter-btn"><span class="fas fa-envelope"></span></button>
                                    </div>
                                </form>
                            </div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="auto-container">
				<!--Scroll to top-->
				<div class="scroll-to-top scroll-to-target" data-target="html"><span class="flaticon-up-arrow"></span></div>
				<!--Scroll to top-->
				<div class="row clearfix">
					<!-- Column -->
					<div class="column col-lg-6 col-md-12 col-sm-12">
						<div class="copyright">&copy; Copyrights, 2022 All Rights Reserved to ACCxME</div>
					</div>
					<!-- Column -->
					<div class="column col-lg-6 col-md-12 col-sm-12">
						<ul class="social-icons">
						<li><a href="https://twitter.com/ArabsCc"><span class="fab fa-twitter"></span></a></li>
						<li><a href="https://discord.gg/AmhPDPdT65"><span class="fab fa-discord"></span></a></li>
						<li><a href="https://www.instagram.com/accxme_/"><span class="fab fa-instagram"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	</footer>
	
</div>
<!--End pagewrapper-->

<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/jquery.fancybox.js"></script>
<script src="js/owl.js"></script>
<script src="js/appear.js"></script>
<script src="js/wow.js"></script>
<script src="js/scrollbar.js"></script>
<script src="js/script.js"></script>



</body>
</html>
    
    
    `)
    }else {
    res.send(`sii`)
    }
});
app.get('/dashboard', function(req, res) {
    res.sendFile("/home/accxbcuh/public_html/dash.html")
});
app.get('/', checkAuth, function(req, res) {

res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>ACCxME</title>
<meta name="title" content="Main">
<meta name="description" content="Home page of ACCxME">
<!-- Stylesheets -->
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/design.css" rel="stylesheet">
<link href="css/responsive.css" rel="stylesheet">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7152527158598569"
     crossorigin="anonymous"></script>
<link rel="shortcut icon" href="images/mainicon.png" type="image/x-icon">
<link rel="icon" href="images/mainicon.png" type="image/x-icon">

<!-- Responsive -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

<!--Website Embed-->
<meta property="og:site_name" content="ACCxME">
<meta property="og:url" content="https://accxme.com">
<meta property="og:title" content="Main">
<meta property="og:description" content="Home page of ACCxME">
<meta property="og:type" content="website"> <meta name="og:image" itemprop="image" content="https://cdn.discordapp.com/avatars/938843255427178547/97a89954a9e5fad0ea6b24587a4723ee.png?size=1024
">
<!--google analytics-->
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-L41RJV9R4S"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L41RJV9R4S');
</script>
</head>

<body>

<div class="page-wrapper">
    <!-- Preloader -->
    <div class="preloader"><div class="icon"></div></div>

    <!-- Main Header -->
    <header class="main-header">
        <!-- Header Top -->
        <div class="header-top">
            <div class="auto-container clearfix">

                <div class="top-left clearfix">
                    <ul class="info-list">
                        <li>ACCxME, Advertisers and Tournaments Organizers based in ME Region!</li>
                    </ul>
                </div>

                <div class="top-right">
                    <ul class="social-icons">
                        <li><a href="https://twitter.com/ArabsCc"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="https://discord.gg/RzA8ZM8632"><span class="fab fa-discord"></span></a></li>
                        <li><a href="https://www.instagram.com/accxme_/"><span class="fab fa-instagram"></span></a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Header Upper -->
        <div class="header-upper">
            <div class="inner-container">
                <div class="auto-container clearfix">
                    <!--Logo-->
                    <div class="logo-outer">
                        <div class="logo"><a href="https://accxme.com/"><img src="images/main.png" alt="" title="ACCxME"></a></div>
                    </div>

                    <!--Nav Box-->
                    <div class="nav-outer clearfix">
                        <!--Mobile Navigation Toggler-->
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu-1"></span></div>

                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-md navbar-light">
                            <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix pull-left">
                                    <li><a href="https://accxme.com/">Home</a>  
                                    </li>
									<li class="dropdown"><a>Pages</a>
                                        <ul>
                                            <li><a href="news">News</a></li>
                                            <li><a href="socials">Socials</a></li>
											<li><a href="team">Our Team</a></li>
                                            <li><a href="https://discord.gg/RzA8ZM8632">Arab Scrims</a></li>
                                        </ul>
                                    </li>
                                    
                                     <li><a href="tournaments">Tournaments</a>
                                    </li>
                                </ul>

                                <ul class="navigation pull-right clearfix">
                                  
                                    <li><a href="leaderboard">Leaderboard</a>
                                    </li>
                                    <li><a href="contact">Contact</a></li>
                                    <li id="userimage" class="dropdown"><a><img  src="https://cdn.discordapp.com/avatars/535005704264613889/${req.user.avatar}.png?size=1024" alt="${req.user.username} avatar" width="64" height="64"></a>
                                        <ul>
                                            <li><a href="#"><p id="username">${req.user.username}</p></a></li>
                                            <li><a href="logout">logout</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <!-- Main Menu End-->
                    </div>
                </div>
            </div>
        </div>
        <!--End Header Upper-->

        <!-- Sticky Header  -->
        <div class="sticky-header">
            <div class="auto-container clearfix">
                <!--Logo-->
                <div class="logo pull-left">
                    <a href="https://accxme.com/" title=""><img src="images/main.png" alt="" title="ACCxME"></a>
                </div>
                <!--Right Col-->
                <div class="pull-right">
                    <!-- Main Menu -->
                    <nav class="main-menu clearfix">
                        <!--Keep This Empty / Menu will come through Javascript-->
                    </nav><!-- Main Menu End-->
                </div>
            </div>
        </div><!-- End Sticky Menu -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon flaticon-close"></span></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="https://accxme.com/"><img src="images/main.png" alt="" title="ACCxME"></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
				<!--Social Links-->
				<div class="social-links">
					<ul class="clearfix">
						<li><a href="https://twitter.com/ArabsCc"><span class="fab fa-twitter"></span></a></li>
						<li><a href="https://discord.gg/AmhPDPdT65"><span class="fab fa-discord"></span></a></li>
						<li><a href="https://www.instagram.com/accxme_/"><span class="fab fa-instagram"></span></a></li>
					</ul>
                </div>
            </nav>
        </div><!-- End Mobile Menu -->
    </header>
    <!-- End Main Header -->

    <!-- Banner Section -->
    <section class="banner-section">
        <div class="banner-carousel owl-theme owl-carousel">
            <!-- Slide Item -->
            <div class="slide-item">
            	<div class="image-layer" style="background-image:url(images/main-slider/main.jpg)"></div>

                <div class="auto-container">
                    <div class="content-box">
                        <h2>Welcome to <br> <ac style="color: #df2f2a;">ACCxME</ac></h2>
                    </div>  
                </div>
            </div>

            <!-- Slide Item -->
            <div class="slide-item">
            	<div class="image-layer" style="background-image:url(images/main-slider/2.png)"></div>
                <div class="auto-container">
                    <div class="content-box">
                        <h2><ao style="font-size:40px;">#1 Organizers loved by the community!</ao></h2>
                        <div class="btn-box"><a href="socials" class="theme-btn btn-style-one"><span class="btn-title">Follow Us</span></a></div>
                    </div>  
                </div>
            </div>
			
			<!-- Slide Item -->
            <div class="slide-item">
            	<div class="image-layer" style="background-image:url(images/main-slider/third.jpg)"></div>
                <div class="auto-container">
                    <div class="content-box">
                        <h2>Join our <br> discord</h2>
                        <div class="btn-box"><a href="https://discord.gg/H2rcqTYHPD" class="theme-btn btn-style-one"><span class="btn-title">Join now</span></a></div>
                    </div>  
                </div>
            </div>
        </div>
    </section>
    <!--End Banner Section -->

	<!-- News Section -->
	<section class="news-section">
		<div class="auto-container">
			<!-- Sec Title -->
			<div class="sec-title centered">
				<div class="title">Announcements</div>
				<h2>Recent News</h2>
			</div>
			
			<div class="row clearfix">

                <!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="https://www.instagram.com/p/Ca43oO1AZaz/?utm_medium=copy_link"><img src="https://media.discordapp.net/attachments/955559328998383726/955559377039949865/main.png" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="post-date">30 Mar. 2022</div>
							<h3><a href="news#popup1">R3N4D x XDI_A 200$ DUOS CUP OFFICIAL DETAILS</a></h3>
						</div>
					</div>
				</div>

<!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="https://www.instagram.com/p/Ca43oO1AZaz/?utm_medium=copy_link"><img src="https://media.discordapp.net/attachments/947949176333959178/951170237749936158/ACCxME_Main_Design.png" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="post-date">14th march 2022</div>
							<h3><a href="https://www.instagram.com/p/Ca43oO1AZaz/?utm_medium=copy_link">DKW esp X KFWO 100$Duos Cup official details</a></h3>
						</div>
					</div>
				</div>

                <!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="auroracup"><img src="images/resource/aurora-news.jpg" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="post-date">10th Feb 2022</div>
							<h3><a href="auroracup">Aurora 70$ Duos Cup official details</a></h3>
						</div>
					</div>
				</div>
				
				<!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="supreme"><img src="images/resource/news-1.png" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="post-date">5th Feb 2022</div>
							<h3><a href="supreme">ACCxME Supreme customs official announcement</a></h3>
						</div>
					</div>
				</div>
				
				<!-- News Block -->
				<div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="procordcup"><img src="images/resource/news-2.png" alt="" /></a>
						</div>
						<div class="lower-content">
							<div class="post-date">20th Jan 2022</div>
							<h3><a href="procordcup">893z x Procord 100$ Duos Cup Ended on 23rd of Jan</a></h3>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
	</section>
	<!-- End News Section -->
	
	<!--Sponsors Section-->
    <section class="sponsors-section">
    	<div class="auto-container">
        	<!-- Sec Title -->
			<div class="sec-title centered">
				<div class="title" style="font-size: 35px;">ACCxME Partners</div>
			</div>
            <div class="sponsors-outer">
                <!--Sponsors Carousel-->
                <ul class="sponsors-carousel owl-carousel owl-theme">
                    <li class="slide-item"><figure class="image-box"><a href="https://www.instagram.com/mtjr1zone/"><img src="images/clients/mtjr.png" alt="" title="ACCxME Store (Branch)"></a></figure></li>
                    <li class="slide-item"><figure class="image-box"><a href="https://www.twitch.tv/3zoxtaz"><img src="images/clients/3zoxtaz.png" alt="" title="3zo x Taz Streamer"></a></figure></li>
                    <li class="slide-item"><figure class="image-box"><a href="https://discord.gg/H2rcqTYHPD"><img src="images/clients/arabscrims.png" alt="" title="Arab Scrims (Branch)"></a></figure></li>
                    <li class="slide-item"><figure class="image-box"><a href="https://www.twitch.tv/tvskr"><img src="images/clients/tvskr.png" alt="" title="tvSKR Streamer"></a></figure></li>
                    <li class="slide-item"><figure class="image-box"><a href="https://www.twitch.tv/893z"><img src="images/clients/893z.png" alt="" title="893z Streamer"></a></figure></li>
                    <li class="slide-item"><figure class="image-box"><a href="https://www.instagram.com/accxcs/"><img src="images/clients/accxcs.png" alt="" title="ACCxCS (Branch)"></a></figure></li>
                    
                </ul>
            </div>
            
        </div>
    </section>
    <!--End Sponsors Section-->

	<!-- Main Footer -->
    <footer class="main-footer">
    	<div class="auto-container">
        	<!--Widgets Section-->
            <div class="widgets-section">
            	<div class="row clearfix">
                	
                    <!--Column-->
                    <div class="column col-lg-4 col-md-6 col-sm-12">
						<div class="footer-widget logo-widget">
							<div class="logo">
                            	<a href="https://accxme.com/"><img src="images/main.png" alt="" /></a>
                            </div>
							<div class="text">This is the official website of ACCxME and its branches, Individual Tournaments Organizers and Advertisers.</div>
						</div>
					</div>
					
					<!--Column-->
                    <div class="column col-lg-4 col-md-6 col-sm-12">
						<div class="footer-widget links-widget">
							<div class="widget-content">
								<div class="footer-title">
									<h2>Links</h2>
								</div>
								<div class="row clearfix">
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<ul class="list">
											<li><a href="https://accxme.com/">Home</a></li>
											<li><a href="team">Our Team</a></li>
											<li><a href="tournaments">Tournaments</a></li>
                                            <li><a href="leaderboard">Leaderboard</a></li>
										</ul>
									</div>
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<ul class="list">
											<li><a href="contact">Help & Support</a></li>
										</ul>
									</div>
								</div>
							</div>	
						</div>
					</div>
					
					<!--Column-->
                    <div class="column col-lg-4 col-md-6 col-sm-12">
						<div class="footer-widget newsletter-widget">
							<div class="footer-title">
                            	<h2>Newsletter</h2>
                            </div>
							<div class="text">Subsrcibe to us now to stay uptodate!</div>
							<div class="newsletter-form">
                                <form method="post" action="contact">
                                    <div class="form-group clearfix">
                                        <input type="email" name="email" value="" placeholder="Email address" required>
                                        <button type="submit" class="theme-btn newsletter-btn"><span class="fas fa-envelope"></span></button>
                                    </div>
                                </form>
                            </div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		
		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="auto-container">
				<!--Scroll to top-->
				<div class="scroll-to-top scroll-to-target" data-target="html"><span class="flaticon-up-arrow"></span></div>
				<!--Scroll to top-->
				<div class="row clearfix">
					<!-- Column -->
					<div class="column col-lg-6 col-md-12 col-sm-12">
						<div class="copyright">&copy; Copyrights, 2022 All Rights Reserved to ACCxME</div>
					</div>
					<!-- Column -->
					<div class="column col-lg-6 col-md-12 col-sm-12">
						<ul class="social-icons">
						<li><a href="https://twitter.com/ArabsCc"><span class="fab fa-twitter"></span></a></li>
						<li><a href="https://discord.gg/AmhPDPdT65"><span class="fab fa-discord"></span></a></li>
						<li><a href="https://www.instagram.com/accxme_/"><span class="fab fa-instagram"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		
	</footer>
	
</div>
<!--End pagewrapper-->

<script src="js/jquery.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-ui.js"></script>
<script src="js/jquery.fancybox.js"></script>
<script src="js/owl.js"></script>
<script src="js/appear.js"></script>
<script src="js/wow.js"></script>
<script src="js/scrollbar.js"></script>
<script src="js/script.js"></script>

</body>
</html>`);
if (db.has("users", req.user.id)) {

} else {
Hook.success("WEBSITE LOGS", `${req.user.username} just logged in at https://accxme.com/ \nemail: ${req.user.email}`)
db.push("users", req.user.id)

}
});

app.get('/', function(req, res) {
    res.sendFile("/home/accxbcuh/public_html/main.html")
});

app.get('/test', function(req, res) {
    fs.readFile('/home/accxbcuh/public_html/main.html', function (err, html) {
        if (err) {
          res.sendFile("/home/accxbcuh/public_html/404.shtml")
        } else {
          var $html = $(html.toString());
          $("bode").hide()
        }
      });
});



app.use(function(req, res) {
 res.sendFile(`/home/accxbcuh/public_html/404.shtml`)
});

app.listen();
