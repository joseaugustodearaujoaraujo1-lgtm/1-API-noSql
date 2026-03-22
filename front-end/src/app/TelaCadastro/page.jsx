"use client"
import { useRef, useState } from "react"
import styles from "./style.module.css"

export default function TelaLogin() {
    const [dataLogin, setDataLogin] = useState([])
    const [msgError, setMsgError] = useState("")

    const inputName = useRef()
    const inputEmail = useRef()
    const inputSenha = useRef()

    

    return (
        <div className={styles.TelaLogin}>
            <form action="post">
                <label className={styles.Label} htmlFor="I1">Name</label>
                <br />
                <input className={styles.Input} type="text" id="I1" name="name" placeholder="Write your name here..." required ref={inputName} />
                <br /><br />
                <label className={styles.Label} htmlFor="I2">E-mail</label>
                <br />
                <input className={styles.Input} type="email" id="I2" name="email" placeholder="Write your name here..." required ref={inputEmail} />
                <br /><br />
                <label className={styles.Label} htmlFor="I3">Password</label>
                <br />
                <input className={styles.Input} type="password" id="I3" name="password" placeholder="Write an password here..." required ref={inputSenha} />
                <br />
                <p className={styles.Error}>{msgError}</p>
                <br />
                <button className={styles.Btn} type="submit" >send data</button>
            </form>
        </div>
    )
}
