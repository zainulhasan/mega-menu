import styles from './menu.css';





const Menu = function (props) {

    const menuList = props.attributes.Lev0;
    return (
        <>
            <div className="level-zero">
                {menuList.map((item: any, index: number) => {


                    const subMenu: Array<any> = [];

                    Object.values(item).map((sub, index) => {
                        if (Array.isArray(sub)) {
                            subMenu.push(sub);
                        }
                    });


                    const childList = subMenu.map((subItems, index) => {
                        return <div key={index} className={`subgroup submenu-${index}`}>

                            {subItems.map((subItem: any) => {

                                return (
                                    <div key={subItem.id} className={subItem.id}>
                                        <a className="level-two-child" href="">{subItem.label}</a>
                                    </div>
                                )
                            })
                            }

                        </div>
                    })





                    return (
                        <div key={item.id} className="level-one">
                            <a href="">{item.Heading}</a>
                            <div className="level-two">
                                {childList}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}



export default Menu;