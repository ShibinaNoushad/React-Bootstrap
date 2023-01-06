import classes from './Mybutton.module.css'

const Button = (props) => {
    return (
        <div>
            <button className={classes.button}>{props.children}</button>
        </div>
    )
}

export default Button;