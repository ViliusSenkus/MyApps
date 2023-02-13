import style from './navigation.module.css';

const Navigation = () => {
    
    const navItem=['Home','About', 'CV', 'Portfolio', 'Blog', 'Services', 'Feedbacks', 'Contacts'];
    const items=["bi-house-door-fill", "bi-person-lines-fill", "bi-card-heading", "bi-collection-fill", "bi-globe-central-south-asia", "bi-easel-fill", "bi-bucket-fill",  "bi-envelope-fill"]
    
    const handleMenuName = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return  <div>
                <div className={style.navigation}>
                    {navItem.map((value, index) => {
                        return <i key={index} className={'bi '+ items[index]}  name={value} onMouseEnter={handleMenuName}></i>
                    })}
                    {/* <i class="bi bi-house-door-fill" name={navItem} onMouseEnter={handleMenuName}></i>
                    <i class="bi bi-person-lines-fill"></i>
                    <i class="bi bi-card-heading"></i>
                    <i class="bi bi-collection-fill"></i>
                    <i class="bi bi-globe-central-south-asia"></i>
                    <i class="bi bi-easel-fill"></i>
                    <i class="bi bi-bucket-fill"></i>
                    <i class="bi bi-envelope-fill"></i> */}
                </div>
                <div>
                    {navItem}
                </div>
                {/* <i class="bi bi-camera-fill"></i>
                    <i class="bi bi-image-fill"></i>
                    <i class="bi bi-chat-square-text-fill"></i>
                    
                    <i class="bi bi-geo-alt-fill"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-telephone-fill"></i>
                    <i class="bi bi-facebook"></i> */}
            </div>
}

export default Navigation;

