<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sign-in | AGK Mentors</title>
    <link rel="stylesheet" href="sign-in.css?v=<?php echo time(); ?>">

</head>
<body>
    <div class="banner">
        <div class="navbar">
            <a href="homepage.html">
                <img src="images/logo-transparent-svg.svg" class="logo">
            </a>
            <ul>
                <li><a href="homepage.html">Home</a></li> 
                <li><a href="about-page.html">About Us</a></li>
                <li><a href="services.html">Services</a></li>
                <a href="log-in.php">
                    <img src="images/account_circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24(1).png" class="icon" alt="Account Icon">
                </a>
            </ul>
        </div>


        <div class="signup-box">
            <h1>Sign up</h1>
            <h4>Create an account with us!</h4>
            <form>
                <label>First Name</label>
                <input type="text" placeholder="">
                <label>Last Name</label>
                <input type="text" placeholder="">
                <label>Email</label>
                <input type="email" placeholder="">
                <label>Password</label>
                <input type="password" placeholder="">
                <label>Confirm Password</label>
                <input type="password" placeholder="">
                <input  type="button" value="Submit">   
            </form>
            <p>By clicking the Sign Up button, you agree to our <br>
            <a href="#">Terms and Conditions</a> and <a href="#">Policy Privacy</a>   
            </p>
    
        </div>
        <p>Already have an account? <a href="#">Login here</a></p>
     
    </div>

</body>
</html>