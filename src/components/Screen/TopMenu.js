import classes from './TopMenu.css';

const TopMenu =(props)=>{
    
        return(
                <div class="TopContent">
                   {props.children}
                </div>
        );
}

export default TopMenu;
