# ni-demo

(Its not complete ionic project. Its src folder only.)

functionality : 1. Login and registration using firebase Auth
              2. Google captcha 
              3. Firebase database
              
              
1.Login and registration
  * App uses firebase authentication for sign in and sign out purpose.
  * screen/login check empty values of fields, email format and password length.
  
2.[Google Captcha](https://github.com/Enngage/ngx-captcha) 
   * In this demo app i used [ngx-captcha](https://www.npmjs.com/package/ngx-captcha) package for implementing google captcha.
   * Without captcha verification user won't be able to login.
   * When user click on captcha it will load image challenges for human verification .
   * Sign-in button is disable until captcha verification.
   * When user verifies himself multiple time then image challenges won't be shown.
   
3.Firebase Databse
   * To store user data we used firebase databse.
   
