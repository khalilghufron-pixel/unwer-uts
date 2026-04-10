import { useState } from "react";



function Login() {
    
      
    const user = {
        Username: "nama",
        Password: "123"
    }

    const Admin = {
        Username: "khalil",
        Password: "123"
    }

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    const Navigate = useNavigate

    
    function loginUser(e) {
        e.prevenDefault();
        if (!Username || !Password) {
            alert("masukin data nya bener!")
            return
        }
        if (Username === user.Username && Password === user.Password) {
            Navigate("/Admin");
        }
        if (Username === Admin.Username && Password === Admin.Password) {
            Navigate("/User");
        }
        else {
            alert("akun ora isuk masss");
        }

    }
     return (
        <div className={style.container}>
            {/* <img src='/imglogin/foto2.jpg' /> */}

            <div className={style.background}>
                <div className={style.left}>
                    <div className={style.logo}>
                        {/* <p>Welcome back you</p> */}
                    </div>


                    <div className={style.left2}>

                        <div className=''>
                            <p>Login</p>
                        </div>



                    </div>



                    <form>
                        <div className={style.login_input_name}>

                            <div className={style.title}>
                                <label for="Username">Username</label>
                            </div>

                            <input
                                className={style.placeforname}
                                type="text"
                                name='username'
                                value={Username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                        </div>

                        <div className={style.placeforpassword_p}>

                            <div className={style.title}>
                                <label for="e-mail">Password</label>
                            </div>

                            <input
                                className={style.placeforpassword}
                                type="password"
                                name='password'
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <p>isi yang benar</p>

                        </div>

                        <button className={style.button} onClick={loginUser}>
                            <p>Login</p>
                        </button>
                        

                        {/* <p className={style.dont}>Don't have an account?<span className={style.hijau}> Register</span></p> */}


                    </form>

                </div>

                {/* <div className={style.right} style={{ backgroundImage: "url('/imglogin/foto1.jpg')" }}> */}

                    {/* <div className={style.logo} style={{ backgroundImage: "url('/imglogin/foto2.jpg')" }}></div>

                    <div className={style.titlejudul}>
                        <p>HELLO GUES </p>
                    </div>

                    <div className={style.titledesc}>
                        <p>WELKOM TO SKY</p>
                    </div> */}

                {/* </div> */}
            </div>




        </div >
    )



    
}

export default Login;