export default function NumeroDisplay(props){
    return(
        <div style={{
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"2rem",
            height:"50px",
            width:"50px",
            borderRadius:"25px",
            backgroundColor:"#222",
            color: "#fff",
            margin: "20px"
        }}>
            {props.numero}

        </div>
    )
}