"use strict";var app=angular.module("micasaupgradesApp",["ui.router","ngTouch","parse-angular","ajoslin.promise-tracker","duScroll"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/#"),a.state("#",{templateUrl:"views/main.html",url:"/",controller:"MainCtrl"}).state("jobs",{templateUrl:"views/jobs.html",url:"/jobs",controller:"JobsCtrl"}).state("sales-associate",{templateUrl:"views/sales-associate.html",url:"/jobs/sales-associate"}).state("success-member",{templateUrl:"views/success-member.html",url:"/jobs/success-member"}).state("full-stack-engineer",{templateUrl:"views/full-stack-engineer.html",url:"/jobs/full-stack-engineer"}).state("contact",{templateUrl:"views/contact.html",url:"/contact",controller:"ContactCtrl"}).state("signin",{templateUrl:"views/signin.html",url:"/signin",controller:"SigninCtrl"}).state("about",{templateUrl:"views/about.html",url:"/about",controller:"AboutCtrl"})}]);angular.module("micasaupgradesApp").run(["$rootScope","$anchorScroll",function(a,b){a.$on("$locationChangeSuccess",function(){b()})}]),app.directive("parsleyValidateInput",["$timeout",function(a){return{link:function(b,c,d){return c.on("remove",function(){return c.closest("form").parsley("removeItem","#"+d.id)}),a(function(){return d.id||(d.id="input_"+_.uniqueId(),c.attr("id",d.id)),c.closest("form").parsley("addItem","#"+d.id)})}}}]),$(document).on("click",".navbar-collapse.in",function(a){$(a.target).is("a")&&$(this).collapse("hide")}),angular.module("micasaupgradesApp").controller("MainCtrl",["$scope",function(){analytics.page({title:"Home",url:"http://www.micasaupgrades.com",path:"/"})}]),angular.module("micasaupgradesApp").controller("AboutCtrl",["$scope",function(){analytics.page({title:"About",url:"http://www.micasaupgrades.com/#about",path:"/#about"})}]),angular.module("micasaupgradesApp").controller("ContactCtrl",["$scope","$http","$log","$timeout","promiseTracker",function(a,b,c,d,e){analytics.page({title:"Contact",url:"http://www.micasaupgrades.com",path:"/#contact"}),a.progress=e("prog"),a.submit=function(b){if(a.submitted=!0,!b.$invalid){var c={name:a.name,email:a.email,company:a.company,phone:a.phone,message:a.message};Parse.initialize("ShzuLP3tmkQKqtA1U1BBSeR4CzwtpGGunjQkrkju","9lpKCFpx9Ih7bKrfkW2YNY9EdLmbqKkWq0dGmZl3");var d=Parse.Cloud.run("contactus",c,{success:function(){a.name=null,a.email=null,a.company=null,a.phone=null,a.message=null,a.messages="Information sent. Thank you for contacting us.",a.submitted=!1,analytics.page({title:"Contact Success",url:"http://www.micasaupgrades.com/#contact-success",path:"/#contact-success",referrer:"http://www.micasaupgrades.com/#contact"})},error:function(){a.messages="Oops, we received your request, but there was an error processing it."}});a.progress.addPromise(d)}}}]),angular.module("micasaupgradesApp").controller("SigninCtrl",["$scope",function(){analytics.page({title:"Sign In",url:"http://www.micasaupgrades.com",path:"/#signin"})}]);