"use client"
import { useEffect, useState, useRef } from "react"
import styles from "./style.module.css"
import { useRouter } from "next/navigation"
import api from "../api/connect"

export default function PageSingUp() {
    const [data, setData] = useState({})
    const [MsgErro, setMsgErro] = useState("")
    const [user, setUser] = useState([])

    const inputName = useRef()
    const inputEmail = useRef()
    const inputSenha = useRef()
    const router = useRouter()

    async function createUser(){
    await api.post("/usuario", {
        name: inputName.current.value,
        email: inputEmail.current.value,
        senha: inputSenha.current.value,
    })
}

    function SendData(e){
        e.preventDefault()

        const verificarDados = user.find((d) => {
            return d.email === data.email && d.senha === data.password
        })

        if(verificarDados){
            router.push("/entrou")
        }else{
            setMsgErro("Email ou senha errado!")
        }
    }

    async function getUser(){
        const getApi = await api.get("/usuario")
        setUser(getApi.data)
    }

    useEffect(() =>{
        getUser()
    },[])

    return (
        <div>
            <div className={styles.All}>
                <h1 className={styles.Titulo}>Sign-up</h1>
                <form className={styles.Formulario} onSubmit={SendData}>
                    <label className={styles.Label} htmlFor="I1">Name</label>
                    <br />
                    <input className={styles.Input} type="text" id="I1" name="name" placeholder="Write your name here..." required ref={inputName}/>
                    <br /><br />
                    <label className={styles.Label} htmlFor="I2">E-mail</label>
                    <br />
                    <input className={styles.Input} type="email" id="I2" name="email" placeholder="Write your name here..." required ref={inputEmail}/>
                    <br /><br />
                    <label className={styles.Label} htmlFor="I3">Password</label>
                    <br />
                    <input className={styles.Input} type="password" id="I3" name="password" placeholder="Write an password here..." required ref={inputSenha}/>
                    <br />
                    <a className={styles.ES} href="/TelaCadastro">Esqueceu a senha?</a>
                    <p className={styles.Error}>{MsgErro}</p>
                    <br />
                    <button className={styles.Btn} type="submit" onClick={createUser}>send data</button>
                </form>
                {user.map((users) => (
                    <div key={users.id} className={styles.AllData}>
                        <div className={styles.Data}>
                            <p className={styles.Element}>Id: {users.id}</p>
                            <p className={styles.Element}>Name: {users.name}</p>
                            <p className={styles.Element}>Email: {users.email}</p>
                            <p className={styles.Element}>Senha: {users.senha}</p>
                            <div className={styles.Btns}>
                                <a href="#" className={styles.Btn}><img src="/edit_note_30dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg" alt="" />Edit</a>
                                <a href="#" className={styles.Btn}><img src="/delete_30dp_7A2917_FILL0_wght400_GRAD0_opsz24.svg" alt="" />Trash</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
