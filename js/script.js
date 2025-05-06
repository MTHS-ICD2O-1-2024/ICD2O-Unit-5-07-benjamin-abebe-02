// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

// process
function myButtonClicked() {
  const userNumber = parseInt(document.getElementById("user-input").value)
  let result = 0

  for (let i = 1; i <= userNumber; i++) {
    result += i
  }

  // display results
  document.getElementById("answer").innerHTML = "<p>The sum from 1 to " + userNumber + " is: " + result + ".</p>"
}
