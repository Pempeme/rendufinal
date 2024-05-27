import React from 'react';
import profil from '../assets/profil.jpeg';
import art  from '../assets/art.jpg';
import edit from '../assets/edit.jpg' ;
import d from '../assets/delete.jpg';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Single = () => {
  return (
    <div className='single'>
      <div className='content'> 
        <img src={art}  alt="logo"/> 
        <div className="user">
          <img src={profil}  alt="test"/> 
          <div className="info">
            <span>OWU</span>
            <p>posted 2 days ago </p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`} >
            <img src={edit} alt="" />
            </Link>
            <img src={d} alt="" />
          </div>
        </div>
        <h1> lorem ipsum</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus libero magna, non egestas nibh sollicitudin id. Praesent dignissim consequat pulvinar. Praesent vel luctus libero, vel tempor ante. Etiam id viverra erat, vestibulum commodo erat. In non mauris a massa efficitur cursus. Cras sapien arcu, pretium a bibendum vel, vehicula at tortor. Phasellus molestie massa mauris, quis vehicula nisl laoreet ut. Suspendisse et augue ullamcorper, lacinia felis ac, ullamcorper dui. Donec vel ex a turpis ornare venenatis vel rhoncus sapien. Fusce at magna at sapien scelerisque imperdiet a at turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus varius ante felis, non pellentesque ex consequat et. Fusce lectus enim, accumsan sed egestas ut, pharetra vel lorem. Praesent vitae metus sollicitudin libero commodo venenatis et in mi.

      Vivamus feugiat congue dolor vitae viverra. Fusce tincidunt ipsum et nisl fermentum, id laoreet ligula malesuada. Vestibulum vitae dui sed arcu bibendum posuere. Donec tincidunt scelerisque tellus, quis faucibus ipsum commodo eu. Donec suscipit felis sit amet massa ullamcorper, at varius augue lobortis. Nulla rhoncus congue lectus, sed viverra odio sollicitudin ut. Fusce sit amet blandit lectus. Integer molestie ex et lacus aliquam, lobortis convallis lorem vestibulum. Aliquam efficitur nisi non orci vestibulum, ut eleifend tortor vestibulum. Nulla laoreet placerat dui, sit amet vestibulum nulla faucibus ut. Curabitur diam arcu, tempus eu elementum non, tincidunt vitae risus. Nulla ac purus et tellus feugiat posuere. In lacinia tellus in aliquet laoreet. 
      </p>
      </div>
       <Menu/>
    </div>
  )
}

export default Single
