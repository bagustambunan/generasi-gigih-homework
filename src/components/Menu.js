import React from 'react';

function Menu(props) {

    return (
      <div className="text-left">

        <div className="my-10">
          <a href="http://localhost:3000">
            <img src="spotify.png" className="w-32" alt="logo"/>
          </a>
        </div>

        { props.menu_list.map((item) => {
          return (
            <div className="mb-2 ">
              <a className={`text-lg font-medium mb-5 ${props.view===item.name ? "text-gray-100" : "text-gray-600 hover:text-sptf"}`}
                href={`#${item.name}`} 
                onClick={() => { props.set_view(item.name) }} >
                  <i className={`fa m-2 ${item.icon}`}></i>
                  {item.text}</a>
            </div>
          );
        })}

      </div>
    );
}

export default Menu;