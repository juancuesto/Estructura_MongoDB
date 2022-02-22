use pizzeria
db.clientes.find()
db.clientes.insertMany([{"nombre":"Luis",
    "email":"Luis@hotmail.com",
    "fecha registro":"20/06/2020",
    "atendido por":"Antonio",
    "cliente nuevo":"no",
    "recomendado por":"no"},
    {"nombre":"Ana",
    "email":"Ana@hotmail.com",
    "fecha registro":"20/05/2020",
    "atendido por":"Antonio",
    "cliente nuevo":"no",
    "recomendado por":"no"},
    {"nombre":"Pepi",
    "email":"Pepi@hotmail.com",
    "fecha registro":"20/05/2020",
    "atendido por":"Antonio",
    "cliente nuevo":"no",
    "recomendado por":"no"}])
    db.categoria.insertMany([{
        "id_categoria":1,
        "nombre":"pizza"
    },
    {
         "id_categoria":2,
        "nombre":"hambueguesa"
    },{
         "id_categoria":3,
        "nombre":"bebida"
    }])
    