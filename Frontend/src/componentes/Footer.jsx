/* function Footer(props) {
    const { texto } = props
    return (
      <footer>
          <h3>&copy; {texto}</h3>
      </footer>
    )
} */

const Footer = props => 
    <footer>
        <h3>&copy; {props.texto}</h3>
    </footer>


export default Footer