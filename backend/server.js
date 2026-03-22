import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

const PORTA = 3001
const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.post("/usuario", async (req, res) => {
    const criar = await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            senha: req.body.senha
        }
    })
    res.status(201).json(criar)
})

app.get("/usuario", async (req, res) => {
    let user = ""

    if (req.query.email) {
        user = await prisma.user.findMany({
            where: {
                email: req.query.email
            }
        })
    } else {
        user = await prisma.user.findMany()
    }
    res.status(201).json(user)
})

app.put("/usuario/:id", async (req, res) => {
    const atualizar = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            senha: req.body.senha
        }
    })
    res.status(201).json(atualizar)
})

app.patch("/usuario/:email", async (req, res) => {
    const atualizarUmCampo = await prisma.user.update({
        where:{
            email:req.params.email
        },
        data:{
            name:req.body.name || undefined,
            email:req.body.email || undefined,
            senha:req.body.senha || undefined
        }
    })
    res.status(201).json(atualizarUmCampo)
})

app.delete("/usuario/:email", async (req, res) => {

    const apaga = await prisma.user.delete({
        where:{
            email:req.params.email
        }
    })

if(!apaga){
    res.status(404).json({menssagem:"Usuario não encontrado"})
}
    res.status(201).json(apaga)
})

app.listen(PORTA, () => {
    console.log(`http://localhost:${PORTA}`)
})