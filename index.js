const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Divine Express API</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    body{
      font-family:'Poppins',sans-serif;
      min-height:100vh;
      background:
        radial-gradient(circle at top left,#ffb34722,transparent 30%),
        radial-gradient(circle at bottom right,#7c3aed33,transparent 35%),
        linear-gradient(135deg,#020617,#0f172a,#1e293b);
      color:white;
      overflow-x:hidden;
      position:relative;
    }

    .glow{
      position:absolute;
      width:400px;
      height:400px;
      border-radius:50%;
      filter:blur(120px);
      z-index:0;
    }

    .glow.one{
      background:#facc1530;
      top:-100px;
      left:-100px;
    }

    .glow.two{
      background:#9333ea30;
      bottom:-100px;
      right:-100px;
    }

    .container{
      position:relative;
      z-index:2;
      max-width:1200px;
      margin:auto;
      padding:40px 20px;
    }

    nav{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:70px;
    }

    .logo{
      font-size:30px;
      font-weight:700;
      background:linear-gradient(to right,#facc15,#ffffff);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }

    .hero{
      text-align:center;
      padding:60px 20px;
    }

    .hero h1{
      font-size:72px;
      line-height:1.1;
      margin-bottom:25px;

      background:linear-gradient(to right,#ffffff,#facc15);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }

    .hero p{
      max-width:850px;
      margin:auto;
      font-size:20px;
      color:#cbd5e1;
      line-height:1.9;
    }

    .cards{
      margin-top:80px;
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
      gap:30px;
    }

    .card{
      background:rgba(255,255,255,0.07);
      border:1px solid rgba(255,255,255,0.1);
      backdrop-filter:blur(12px);
      border-radius:28px;
      padding:35px;
      transition:0.4s ease;
      box-shadow:0 15px 40px rgba(0,0,0,0.3);
    }

    .card:hover{
      transform:translateY(-10px) scale(1.02);
      border-color:#facc1588;
      box-shadow:0 20px 50px rgba(250,204,21,0.15);
    }

    .icon{
      font-size:48px;
      margin-bottom:20px;
    }

    .card h3{
      font-size:26px;
      margin-bottom:15px;
    }

    .card p{
      color:#d1d5db;
      line-height:1.8;
    }

    .api-section{
      margin-top:100px;
    }

    .api-title{
      text-align:center;
      font-size:48px;
      margin-bottom:50px;

      background:linear-gradient(to right,#facc15,#ffffff);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }

    .endpoint{
      background:rgba(255,255,255,0.06);
      padding:25px;
      border-radius:22px;
      margin-bottom:20px;
      border-left:5px solid #facc15;
      transition:0.3s ease;
    }

    .endpoint:hover{
      transform:translateX(8px);
      background:rgba(255,255,255,0.08);
    }

    .method{
      color:#facc15;
      font-size:20px;
      font-weight:700;
      margin-bottom:10px;
    }

    .endpoint p{
      color:#cbd5e1;
    }

    footer{
      margin-top:100px;
      text-align:center;
      color:#94a3b8;
      padding-bottom:30px;
      font-size:15px;
    }

    @media(max-width:768px){

      .hero h1{
        font-size:46px;
      }

      .hero p{
        font-size:17px;
      }

      .api-title{
        font-size:36px;
      }

    }

  </style>
</head>

<body>

  <div class="glow one"></div>
  <div class="glow two"></div>

  <div class="container">

    <nav>
      <div class="logo">✨ Divine Express API</div>
    </nav>

    <section class="hero">
      <h1>
        Cosmic Node.js <br/>
        Express Experience
      </h1>

      <p>
        A beautiful API application powered by Express.js, deployed with AWS
        CodePipeline, CodeBuild, and Elastic Beanstalk with fully automated CI/CD.
      </p>
    </section>

    <section class="cards">

      <div class="card">
        <div class="icon">⚡</div>
        <h3>Fast Backend</h3>
        <p>
          Lightweight Express architecture designed for speed, scalability,
          and smooth API performance.
        </p>
      </div>

      <div class="card">
        <div class="icon">☁️</div>
        <h3>AWS Deployment</h3>
        <p>
          Automatically deployed using modern AWS DevOps services and cloud infrastructure.
        </p>
      </div>

      <div class="card">
        <div class="icon">🚀</div>
        <h3>CI/CD Automation</h3>
        <p>
          Every GitHub push automatically triggers build and deployment pipeline.
        </p>
      </div>

    </section>

    <section class="api-section">

      <h2 class="api-title">Available API Endpoints</h2>

      <div class="endpoint">
        <div class="method">GET /api/hello</div>
        <p>Returns a greeting message from the Express server.</p>
      </div>

      <div class="endpoint">
        <div class="method">GET /api/users</div>
        <p>Returns a sample users JSON response.</p>
      </div>

      <div class="endpoint">
        <div class="method">POST /api/echo</div>
        <p>Returns the same JSON body you send in the request.</p>
      </div>

    </section>

    <footer>
      Built with Node.js • Express • AWS • DevOps ✨
    </footer>

  </div>

</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(html);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ],
  });
});

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});