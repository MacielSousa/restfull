let NeDB = require('nedb');
let db = new NeDB({
    filename:'users.db',
    autoload: true
});


module.exports = (app) => {

    //Rota de listar usuários
    app.get('/users',(req, res)=>{

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.json({
            users:[{
                name:'Maciel',
                email:'maciel@maciel.com',
                id:1
            }]
        });

    });

    app.post('/users', (req, res) => {

        db.insert(req.body, (err, user)=>{

            if(err){

                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });

            } else{

                res.status(200).json(user);

            }

        });

    });

};

