// const button = document.getElementById("button");
 
//      function getDistance(lat1, lon1, lat2, lon2) {
//        const R = 6371e3; 
//        const φ1 = lat1 * Math.PI / 180;
//        const φ2 = lat2 * Math.PI / 180;
//        const Δφ = (lat2 - lat1) * Math.PI / 180;
//        const Δλ = (lon2 - lon1) * Math.PI / 180;
 
//        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//                  Math.cos(φ1) * Math.cos(φ2) *
//                  Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 
//        return R * c; 
//      }
 
//      function gotLocation(position) {
//        const userLat = position.coords.latitude;
//        const userLon = position.coords.longitude;
 
//        const targetLat = 25.6234486;
//        const targetLon = 85.1323779;
 
//        const distance = getDistance(userLat, userLon, targetLat, targetLon);
 
//        console.log(`Your Location: Latitude ${userLat}, Longitude ${userLon}`);
//        console.log(`Target Location: Latitude ${targetLat}, Longitude ${targetLon}`);
//        console.log(`Distance: ${distance.toFixed(2)} meters`);
 
//        if (distance <= 10000) {
//          document.body.innerHTML = `
//            <div class="black-screen">
//              You are inside the target zone.
//            </div>`;
//        } else {
//          document.body.innerHTML = `
//            <div class="pink-screen">
//              You are outside the zone.
//            </div>`;
//        }
//      }
 
//      function failed() {
//        console.error("Failed to get location");
//        alert("Failed to get location. Check your permissions.");
//      }
 
//      button.addEventListener("click", () => {
//        const userResponse = confirm("Do you want to allow location access?");
//        if (userResponse) {
//          if (navigator.geolocation) {
//            navigator.geolocation.getCurrentPosition(gotLocation, failed);
//          } else {
//            alert("Geolocation is not supported by your browser.");
//          }
//        }
//      });




// const button = document.getElementById('button');

// function gotLocation(position){
//     console.log(position);
// }

// function failedToGet() {
//     console.log("There was some issue");
// }
// button.addEventListener("click", async() => {
//     navigator.geolocation.getCurrentPosition(gotLocation);
// });
// const button = document.getElementById("button");

// function getDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371e3; 
//   const φ1 = lat1 * Math.PI / 180;
//   const φ2 = lat2 * Math.PI / 180;
//   const Δφ = (lat2 - lat1) * Math.PI / 180;
//   const Δλ = (lon2 - lon1) * Math.PI / 180;

//   const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//             Math.cos(φ1) * Math.cos(φ2) *
//             Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//   return R * c;
// }

// function showMessage(className, message) {
//   document.body.innerHTML = `
//     <div class="${className}">
//       <p>${message}</p>
//     </div>
//   `;
// }

// function gotLocation(position) {
//   const userLat = position.coords.latitude;
//   const userLon = position.coords.longitude;

//   const targetLat = 25.6234486;
//   const targetLon = 85.1323779;

//   const distance = getDistance(userLat, userLon, targetLat, targetLon);

//   console.log(`Your Location: Latitude ${userLat}, Longitude ${userLon}`);
//   console.log(`Target Location: Latitude ${targetLat}, Longitude ${targetLon}`);
//   console.log(`Distance: ${distance.toFixed(2)} meters`);

//   if (distance <= 10) {
//     showMessage("black-screen", "✅ You're within the class boundary.<br>Proceed to mark your attendance.");
//   } else {
//     showMessage("pink-screen", "🚫 You're outside the allowed area.<br>Attendance can't be marked.");
//   }
// }

// function failed() {
//   console.error("Failed to get location");
//   alert("Failed to get location. Please check your permissions or try again.");
// }

// button.addEventListener("click", () => {
//   const userResponse = confirm("Allow access to your location to mark attendance?");
//   if (userResponse) {
//     showMessage("black-screen", "📍 Detecting your location...");
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(gotLocation, failed);
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   }
// });
// function markAttendance() {
//   const subject = document.getElementById("subject-select").value;
//   const messageBox = document.getElementById("message-box");

//   if (!subject) {
//     alert("Please select a subject first, jaan!");
//     return;
//   }

//   messageBox.innerText = `Attendance marked for ${subject}.`;
// }
// const cooldownTime = 50 * 60 * 1000; // 50 minutes in milliseconds

// function markAttendance() {
//   const subject = document.getElementById("subject-select").value;
//   const messageBox = document.getElementById("message-box");

//   if (!subject) {
//     alert("Please select a subject first, jaan!");
//     return;
//   }

//   const lastMarkedTime = localStorage.getItem("globalAttendanceTime");
//   const now = new Date().getTime();

//   if (lastMarkedTime && now - lastMarkedTime < cooldownTime) {
//     const remaining = Math.ceil((cooldownTime - (now - lastMarkedTime)) / 60000);
//     messageBox.innerText = `You already marked attendance recently. Please wait ${remaining} more minute(s).`;
//     messageBox.style.color = "red";
//     return;
//   }

//   // Global attendance marked
//   localStorage.setItem("globalAttendanceTime", now);
//   messageBox.innerText = `Attendance marked for ${subject}. Cooldown started for all subjects.`;
//   messageBox.style.color = "#2e7d32";
// }








// function updateDateTime() {
//   const now = new Date();

//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const day = days[now.getDay()];

//   const date = now.toLocaleDateString();
//   const time = now.toLocaleTimeString();

//   document.getElementById('datetime').innerText = `📅 ${date} | 📆 ${day} | ⏰ ${time}`;
// }

// setInterval(updateDateTime, 1000);
// updateDateTime();

// // Attendance cooldown logic
// const cooldown = new Map(); // track subject-wise cooldown

// function markAttendance() {
//   const subject = document.getElementById("subject").value;
//   const msg = document.getElementById("message");

//   if (!subject) {
//     msg.innerText = "⚠️ Please select a subject first!";
//     return;
//   }

//   const now = new Date();
//   const lastMarked = cooldown.get(subject);

//   if (lastMarked && now - lastMarked < 50 * 60 * 1000) {
//     msg.innerText = `⏳ Attendance already marked for ${subject}. Please wait for cooldown.`;
//   } else {
//     cooldown.set(subject, now);
//     msg.innerText = `✅ Attendance marked for ${subject}. Cooldown started.`;
//   }
// }


function updateDateTime() {
  const now = new Date();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  document.getElementById('datetime').innerText = `📅 ${date} | 📆 ${day} | ⏰ ${time}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// Attendance cooldown logic
const cooldown = new Map(); // track subject-wise cooldown

function markAttendance(e) {
  const subject = document.getElementById("subject").value;
  const msg = document.getElementById("message");

  if (!subject) {
    e.preventDefault(); // stop form submission
    msg.innerText = "⚠️ Please select a subject first!";
    return;
  }

  const now = new Date();
  const lastMarked = cooldown.get(subject);

  if (lastMarked && now - lastMarked < 50 * 60 * 1000) {
    e.preventDefault(); // stop form submission
    msg.innerText = `⏳ Attendance already marked for ${subject}. Please wait for cooldown.`;
  } else {
    cooldown.set(subject, now);
    msg.innerText = `✅ Attendance marked for ${subject}. Cooldown started.`;
    // Allow form submission
  }
}

// Attach listener to the form
document.querySelector("form").addEventListener("submit", markAttendance);
