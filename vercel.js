{ 
    "version": 2, 
    "name": "Ai And Chat bot", 
    "builds": [ 
       { "src": "app.mjs", "use": "@vercel/node" } 
    ], 
    "routes": [ 
       { "src": "/(.*)", "dest": "/app.mjs" } 
    ] 
  }