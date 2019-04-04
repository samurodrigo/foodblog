const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const path = require("path")

//Configurações
    app.engine("handlebars", handlebars(
        {
            defaultLayout: "main"
        }
    ))
    app.set("view engine", "handlebars")

// Arquivos estaticos
    app.use(express.static(path.join(__dirname, "public"))) 

//Rotas
    app.get("/", (req, res) => {
        res.render("home/index")
    })



//Inicia servidor
    const PORT = process.env.PORT || 8091
    app.listen(PORT , () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    })


