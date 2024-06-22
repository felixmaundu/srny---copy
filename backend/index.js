const express = require('express');
const cors = require('cors'); // Require the cors package
//coockie-parser
const authRoutes = require('./src/routes/authRoute');
const driversDataRoutes = require('./src/routes/driversDataRoutes');

const app = express();
const port = 5000;


// app.use(coockieParser());
// Middleware to parse JSON request bodies
app.use(express.json());

// CORS configuration (assuming you want to allow requests from http://localhost:3000)
app.use(cors({ origin: 'http://localhost:3000', methods : ['DELETE','GET','POST','PUT'], credentials: true }));

// Routes
app.use('/auth', authRoutes);

const verifyUser = (req, res, next)=> { 
const token = req.cookies.token;
if (!token){ 
  return res.json({Message: "no token"});
} else { 
  JsonWebToken.verify(token, "secret_key", (err, decoded)=>{ 
    if(err){ 
      return res.json({Message: "no token, auth err."})
    }else { 
      req.name = decoded.name;
      next()
    }
  })
}
}
app.get('/', verifyUser , (req, res ) => { 
 return res.json({Status: "success", name: req.name})
});
// Routes
app.use('/drivers-data', driversDataRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
