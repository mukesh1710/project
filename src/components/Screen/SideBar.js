import classes from './SideBar.css';

const SideBar =(props) =>{

    return(

        <div class="SideContent">
            {props.children}
         </div>
    );
}

export default SideBar;