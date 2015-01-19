"use strict";var app=angular.module("micasaupgradesApp",["ngRoute","ngTouch","parse-angular","ajoslin.promise-tracker","duScroll"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).when("/signin",{templateUrl:"views/signin.html",controller:"SignInCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"})}]);app.controller("ModalCtrl",["$scope",function(a){console.log("Modal Controller reporting for duty."),a.showModal=!1,a.toggleModal=function(){console.log("Toggle Modal"),a.showModal=!a.showModal}}]),app.directive("modal",function(){return console.log("modal directive loaded"),{template:'<div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">{{ title }}</h4></div><div class="modal-body" ng-transclude></div></div></div></div>',restrict:"E",transclude:!0,replace:!0,scope:!0,link:function(a,b,c){a.title=c.title,a.$watch(c.visible,function(a){$(b).modal(1==a?"show":"hide")}),$(b).on("shown.bs.modal",function(){a.$apply(function(){a.$parent[c.visible]=!0})}),$(b).on("hidden.bs.modal",function(){a.$apply(function(){a.$parent[c.visible]=!1})})}}}),app.run(["$rootScope","$location","$anchorScroll","$routeParams",function(a,b,c,d){a.$on("$routeChangeSuccess",function(){b.hash(d.scrollTo),c()})}]),app.directive("parsleyValidateInput",["$timeout",function(a){return{link:function(b,c,d){return c.on("remove",function(){return c.closest("form").parsley("removeItem","#"+d.id)}),a(function(){return d.id||(d.id="input_"+_.uniqueId(),c.attr("id",d.id)),c.closest("form").parsley("addItem","#"+d.id)})}}}]),$(document).on("click",".navbar-collapse.in",function(a){$(a.target).is("a")&&$(this).collapse("hide")}),angular.module("micasaupgradesApp").controller("MainCtrl",["$scope",function(){console.log("Main Controller reporting for duty."),analytics.page({title:"Home",url:"http://www.micasaupgrades.com",path:"/"})}]),angular.module("micasaupgradesApp").controller("AboutCtrl",["$scope",function(){console.log("About Controller reporting for duty."),analytics.page({title:"About",url:"http://www.micasaupgrades.com/#about",path:"/#about"})}]),angular.module("micasaupgradesApp").controller("ContactCtrl",["$scope","$http","$log","$timeout","promiseTracker",function(a,b,c,d,e){analytics.page({title:"Contact",url:"http://www.micasaupgrades.com",path:"/#contact"}),a.progress=e("prog"),a.submit=function(b){if(a.submitted=!0,!b.$invalid){var c={name:a.name,email:a.email,company:a.company,phone:a.phone,message:a.message};Parse.initialize("ShzuLP3tmkQKqtA1U1BBSeR4CzwtpGGunjQkrkju","9lpKCFpx9Ih7bKrfkW2YNY9EdLmbqKkWq0dGmZl3");var d=Parse.Cloud.run("contactus",c,{success:function(){a.name=null,a.email=null,a.company=null,a.phone=null,a.message=null,a.messages="Information sent. Thank you for contacting us.",a.submitted=!1,analytics.page({title:"Contact Success",url:"http://www.micasaupgrades.com/#contact-success",path:"/#contact-success",referrer:"http://www.micasaupgrades.com/#contact"})},error:function(){a.messages="Oops, we received your request, but there was an error processing it."}});a.progress.addPromise(d)}}}]);