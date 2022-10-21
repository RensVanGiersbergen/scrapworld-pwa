<template>
    <div class="settings">
        <div class="Content-StartScreen px-4 pt-5">
        <instellingen-nav />
        <div class="text-left mb-5">
          <img class="anita" src="../assets/Anitasettings.png" />
          <a class="text-right">Anita Broeders</a>
        </div>

        <div class="d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-user"/> <span class="mx-2">Personal Credentials</span>
        </div>
        <hr />
        <div class="text-left mb-4">
          <div class="d-flex justify-content-between align-items-center">
            <a>Edit profile</a> <font-awesome-icon icon="phone" /><font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <a>Change password</a><font-awesome-icon icon="fa-solid fa-chevron-right" />
          </div>
        </div>

        <div class="d-flex align-items-center">
        <font-awesome-icon icon="fa-solid fa-bell"/> <span class="mx-3">Pushnotifications</span>
        </div>
        <hr />
        <div class="text-left mb-4">
          <div class="d-flex justify-content-between align-items-center">
            <a>Friend request</a>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <a>New Scrapbook alert</a>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>

        <div class="d-flex align-items-center">
          <font-awesome-icon icon="fa-solid fa-gear"/><span class="mx-2">More</span>
        </div>
        <hr />
        <div class="d-flex justify-content-between align-items-center">
          <a>Language</a><font-awesome-icon icon="fa-solid fa-chevron-right" />
        </div>
        <br>
        <div class="text-center py-5 mt-5">
          <link to="/">
            <button class="btn-uitloggen">
              <font-awesome-icon icon="fa-solid fa-right-from-bracket"/> Logout
            </button>
        <link>
          </div></div></div>
          </template>

          <style>

            .settings{
              background-color: #fff;
            }

            .anita{
              margin-left: -75px;
            }

            .text-right {
                text-decoration: none;
                margin-left: 25px;
                font-size: 20px;
                color: #7935FE;
              }
              
            
            .switch {
                position: relative;
                display: inline-block;
                width: 43px;
                height: 11px;
              }
              
              .switch input { 
                opacity: 0;
                width: 0;
                height: 0;
              }
              
              .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #707070;
                -webkit-transition: .4s;
                transition: .4s;
              }
              
              .slider:before {
                position: absolute;
                content: "";
                height: 20px;
                width: 20px;
                left: -1px;
                bottom: -4px;
                background-color: #7935FE;
                -webkit-transition: .4s;
                transition: .4s;
              }
              
              input:checked + .slider {
                background-color: #E8E0E0;
              }
              
              input:checked + .slider:before {
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
              }
              
              /* Rounded sliders */
              .slider.round {
                border-radius: 17px;
              }
              
              .slider.round:before {
                border-radius: 50%;
              }
            
              .btn-uitloggen {
                background-color: #ffffff;
                color: black;
                border: none;
                border-radius: 10px;
                -webkit-box-shadow: 0px 3px 6px #00000029;
                        box-shadow: 0px 3px 6px #00000029;
                width: 50%;
                padding-top: 1em;
                padding-bottom: 1em;
              }
            
              .instellingen-nav{
                  position: absolute;
                  top: 2em;
                  right: 2em;    
              }</style>

  
  
  