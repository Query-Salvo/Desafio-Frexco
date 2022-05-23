import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { NONAME } from "dns"
import { Link } from "react-router-dom"

function Nav () {
    return (
     <List sx={{
         display:"flex",
     }}>
        <Link to="/" style={{
            color: "inherit",
            textDecoration: "none" }}>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary="Home"/>
                </ListItemButton>
            </ListItem>
        </Link>
        <Link to="/produtos" style={{
            color: "inherit",
            textDecoration: "none" }}>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary="Adicionar Produto">
                    </ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
        <Link to="/estoque" style={{
            color: "inherit",
            textDecoration: "none" }}>
            <ListItem>
                <ListItemButton>
                    <ListItemText primary="Adicionar Estoque"/>
                </ListItemButton>
            </ListItem>
        </Link>
     </List>
    )  
 }
 
 export default Nav