*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{

    background:#6c3df4;

    color:white;

    height:100vh;

    overflow:hidden;

}

.tela{

    width:100%;

    height:100vh;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    padding:20px;

}

.escondido{

    display:none;

}

h1{

    font-size:60px;

    margin-bottom:20px;

}

h2{

    font-size:34px;

    margin-bottom:20px;

    text-align:center;

}

h3{

    margin-top:25px;

    font-size:24px;

}

button{

    width:250px;

    height:60px;

    border:none;

    border-radius:15px;

    background:white;

    color:#6c3df4;

    font-size:22px;

    font-weight:bold;

    cursor:pointer;

}

button:active{

    transform:scale(.95);

}

#contadorInicio{

    margin-top:20px;

    font-size:70px;

    font-weight:bold;

}

#topo{

    width:100%;

    text-align:center;

}

#temaJogo{

    margin-top:10px;

}

#letra{

    font-size:90px;

    font-weight:bold;

    margin:20px 0;

}

#tempo{

    width:90px;

    height:90px;

    border-radius:50%;

    background:white;

    color:#6c3df4;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:40px;

    margin:auto;

    font-weight:bold;

}

#vidas{

    width:100%;

    display:flex;

    justify-content:space-around;

    margin:20px 0;

    font-size:22px;

    font-weight:bold;

}

#jogadores{

    flex:1;

    width:100%;

    display:flex;

}

.lado{

    flex:1;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:34px;

    font-weight:bold;

    border:2px solid rgba(255,255,255,.3);

    user-select:none;

}

#rosa{

    background:#ff4fa3;

}

#hemerson{

    background:#3498db;

}

.lado:active{

    filter:brightness(80%);

}

#fim h1{

    text-align:center;

    margin-bottom:40px;

}
