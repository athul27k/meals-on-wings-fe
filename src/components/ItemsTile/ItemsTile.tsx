import './ItemsTile.scss';
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpeg';
import image4 from '../../Assets/image4.jpg';
import image5 from '../../Assets/image5.jpeg';
import { categoryProps } from '../../types/types';
import { BsPlusLg } from 'react-icons/bs';

export const ItemsTile = ({index,values}:categoryProps) =>{

    const imageMap:any = {
        1: image1,
        2: image2,
        3: image3,
        4: image4,
        5: image5,
        // Add more mappings as needed
    };


    const addItemsToCartModel=(items:any,quantity:Number|any)=>{


        let item={
          id:items.id,
          image:items.item_pic,
          name:items.item_name,
          quantity:quantity,
          price:items.item_price,
          totalPrice:items.item_price*quantity,
          maximumQuantity:items.item_quantity
        }
      
        let all_items = localStorage.getItem("items")
        let json_obje=JSON.parse(all_items?all_items:"")
        console.log(json_obje)
        json_obje.push(item)
        let stringyfy_obj = JSON.stringify(json_obje)
        localStorage.setItem("items",stringyfy_obj)
    
        // this.checkForCartChange()
      }

    return (
        <div className='shadowstyle2 mb-3 d-flex'  style={{height:"100px",width:"98%",borderRadius:"8px"}}>

<div className="col-lg-2 col-md-2 col-3 d-flex justify-content-start p-2">
            <img className='img-fluid item-img' src={values.item_pic} />
            </div>

<div className='col-7'>
    <div className='item-name'>{values.item_name}</div>
    <div className='item-price'>{values.currency} {values.item_price}</div>
</div>

<div className='col-2 d-flex align-items-center justify-content-center'>
<div onClick={()=>addItemsToCartModel(values,1)} className='add-btn-style pt-1 pb-2 ps-2 pe-2'><BsPlusLg /></div>
</div>
        </div>
    )
}