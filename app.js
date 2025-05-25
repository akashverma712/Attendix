



// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const teachers = require('./models/teachers');
// const students = require('./models/students');
// const Attendance = require('./models/Attendance');
// const cookieParser = require('cookie-parser');
// const crypto = require('crypto');
// const path = require('path');
// const { name } = require('ejs');

// app.set("view engine", "ejs");

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/bhak", (req,res) => {
//     res.render("login");
// })
// app.get("/mark",(req,res) => {
//     // res.render("mark");
//     res.render("mark", { student: user });

// })
// app.get("/",(req,res) => {
//     res.render("portal");
// })

// app.get("/login2",(req,res)=> {
//     res.render("login2")
// })

// app.get("/profile", (req,res) => {
//     res.render("profile");
// })

// app.get("/profile2", (req,res)=> {
//     res.render("profile2");
// })
// app.post("/mark", async (req, res) => {
//     const { name, regno, subject } = req.body;

//     try {
//         // Create a new attendance record
//         const newAttendance = new Attendance({
//             name,
//             regno,
//             subject
//         });

//         await newAttendance.save();

//         res.send(`<h2>✅ Attendance marked successfully for ${subject}, ${name}!</h2>
//                   <a href="/mark">Go Back</a>`);
//     } catch (err) {
//         console.error("Error marking attendance:", err);
//         res.status(500).send("Something went wrong! 😢");
//     }
// });


// app.post("/", async (req, res) => {
//     const { email, unique_id } = req.body;
//     const user = await students.findOne({ email: email, unique_id: unique_id });

//     if (!user) {
//         return res.status(401).send("Invalid credentials");
//     }
//     else{
//     // res.redirect("/profile");
//     res.render("profile", { student: user })
//     }
// });

// // app.get("/profile", async (req,res) => {
// //     let user = await students.fineOne({email: req.user.email});
// //     res.render("profile", {user});
// // })

// // app.post("/", async (req, res) => {
// //     const { email, unique_id } = req.body;
// //     const student = await students.findOne({ email: email, unique_id: unique_id });

// //     if (!student) {
// //         return res.status(401).send("Invalid credentials");
// //     } else {
// //         res.render("profile", { student }); // directly send data to profile page
// //     }
// // });


// app.post("/login2", async (req, res) => {
//     const { name, rgt_number } = req.body;

//     // Log the received form data
//     console.log("Form Data Received:", name, rgt_number);

//     try {
//         // Find the teacher by name and registration number
//         const user = await teachers.findOne({
//             name: { $regex: new RegExp(name, 'i') },  // Case-insensitive search
//             rgt_number: rgt_number
//         });

//         if (!user) {
//             console.log("Teacher not found. Invalid credentials.");
//             return res.status(401).send("Invalid credentials");
//         } else {
//             console.log("Teacher found. Redirecting to /profile2...");
//             res.redirect("/profile2");
//         }
//     } catch (error) {
//         console.error("Error in database query:", error);
//         res.status(500).send("Internal Server Error. Please try again later.");
//     }
// });






// app.listen(3000,function(){
//     console.log("port running successfully on the local host 3000");
// })
const express = require('express');
const app = express();

const bcrypt = require('bcrypt');
const session = require('express-session');

const jwt = require('jsonwebtoken');
const teachers = require('./models/teachers');
const students = require('./models/students');
const Attendance = require('./models/Attendance');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const path = require('path');
const { name } = require('ejs');

app.use(session({
    secret: 'mySecretKey', // you can name this anything
    resave: false,
    saveUninitialized: false
}));



app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/bhak", (req,res) => {
    res.render("login");
});

// app.get("/mark", (req, res) => {
//     const { name, regno } = req.query;
//     res.render("mark", { student: { name, regno } });
// });
app.get("/mark", (req, res) => {
    const { name, regno } = req.query;
    res.render("mark", { student: { name, unique_id: regno } }); // ✅ fix here
});


app.get("/", (req, res) => {
    res.render("portal");
});

app.get("/login2", (req,res)=> {
    res.render("login2");
});

app.get("/check", function(req,res){
    res.render("check");
})

// app.get("/profile", (req,res) => {
//     res.render("profile");
// });
app.get("/profile", (req, res) => {
    const student = req.session.student;

    if (!student) {
        return res.redirect("/bhak"); // go to login page
    }

    res.render("profile", { student });
});




app.get("/profile2", (req,res)=> {
    res.render("profile2");
});

// app.post("/mark", async (req, res) => {
//     const { name, unique_id, subject } = req.body;

//     try {
//         const newAttendance = new Attendance({
//             name,
//             unique_id,
//             subject
//         });

//         await newAttendance.save();

//         res.send(`<h2>✅ Attendance marked successfully for ${subject}, ${name}!</h2>
//                   <a href="/mark?name=${name}&unique_id=${unique_id}">Go Back</a>`);
//     } catch (err) {
//         console.error("Error marking attendance:", err);
//         res.status(500).send("Something went wrong! 😢");
//     }
// });
app.post("/mark", async (req, res) => {
    try {
      const { name, unique_id, subject } = req.body;
  
      if (!name || !unique_id || !subject) {
        return res.status(400).send("Missing required fields");
      }
  
      const newEntry = new Attendance({
        name,
        unique_id,
        subject
      });
  
      await newEntry.save();
      res.send("✅ Attendance marked successfully!");
    } catch (err) {
      console.error(err);
      res.status(500).send("❌ Something went wrong while marking attendance");
    }
  });

app.post("/", async (req, res) => {
    const { email, unique_id } = req.body;
    const user = await students.findOne({ email: email, unique_id: unique_id });

    if (!user) {
        return res.status(401).send("Invalid credentials");
    } else {
      
        req.session.student = user;

    
        res.redirect("/profile");
    }
});

app.post("/login2", async (req, res) => {
    const { name, rgt_number } = req.body;

    console.log("Form Data Received:", name, rgt_number);

    try {
        const user = await teachers.findOne({
            name: { $regex: new RegExp(name, 'i') },
            rgt_number: rgt_number
        });

        if (!user) {
            console.log("Teacher not found. Invalid credentials.");
            return res.status(401).send("Invalid credentials");
        } else {
            console.log("Teacher found. Redirecting to /profile2...");
            res.redirect("/profile2");
        }
    } catch (error) {
        console.error("Error in database query:", error);
        res.status(500).send("Internal Server Error. Please try again later.");
    }
});

app.listen(3000,(req,res)=>{
    console.log("port running successfully on the local host");
})